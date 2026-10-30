import { Color } from "three";
import { OPEN_WARM } from "../activity-colors.ts";

export const WASHER_PULSE_MS = 2000;

/** One smooth normal → orange → normal cycle every two seconds. */
export function washerPulseAmount(elapsed: number): number {
  return (1 - Math.cos((elapsed / WASHER_PULSE_MS) * Math.PI * 2)) / 2;
}

interface Range { id: string; start: number; end: number }

/** Recolour only running washer/dishwasher vertices in the merged furniture mesh, preserving the original colours for restoration. */
export class WasherPulse {
  private entries = new Map<string, { start: number; base: Float32Array; at: number }>();
  private readonly orange = new Color(OPEN_WARM).toArray();
  private readonly colors: Float32Array;
  private readonly changed: (start: number, count: number) => void;

  constructor(colors: Float32Array, changed: (start: number, count: number) => void = () => {}) {
    this.colors = colors;
    this.changed = changed;
  }

  get active(): boolean { return this.entries.size > 0; }

  setRunning(ranges: Range[], now: number): void {
    const wanted = new Set(ranges.map((r) => r.id));
    for (const [id, entry] of this.entries) {
      if (wanted.has(id)) continue;
      this.colors.set(entry.base, entry.start);
      this.changed(entry.start, entry.base.length);
      this.entries.delete(id);
    }
    for (const range of ranges) {
      if (this.entries.has(range.id)) continue;
      const start = range.start * 9;
      this.entries.set(range.id, { start, base: this.colors.slice(start, range.end * 9), at: now });
    }
  }

  update(now: number): void {
    for (const { start, base, at } of this.entries.values()) {
      const pulse = washerPulseAmount(now - at);
      for (let i = 0; i < base.length; i += 3) {
        // Keep dark glass and the model's face shading visible at the orange peak.
        const shade = Math.min(1, 0.65 + Math.max(base[i], base[i + 1], base[i + 2]));
        for (let c = 0; c < 3; c++) this.colors[start + i + c] = base[i + c] + (this.orange[c] * shade - base[i + c]) * pulse;
      }
      this.changed(start, base.length);
    }
  }
}
