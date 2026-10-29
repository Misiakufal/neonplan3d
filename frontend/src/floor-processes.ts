import { remainingMinutes, remainingText } from "./household.ts";
import type { Floor } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export const PROCESS_REFRESH_MS = 5000;

const RUNNING = new Set(["on", "true", "active", "run", "running", "busy", "working", "in_progress", "in progress", "printing", "washing", "rinsing", "spinning", "drying", "cleaning", "cooking", "heating"]);

/** Explicit running states and positive numeric boolean sensors; unknown states stay hidden. */
export function processRunning(entity: HassEntity | undefined): boolean {
  const state = entity?.state.trim().toLowerCase() ?? "";
  return RUNNING.has(state) || (state !== "" && Number.isFinite(Number(state)) && Number(state) > 0);
}

export interface ProcessPanel {
  id: string;
  name: string;
  progress: number | null;
  /** Undefined: no time-left entity; null: configured, but unavailable. */
  remaining: string | null | undefined;
}

/** A snapshot of the selected floor, in its configured process order. */
export function floorProcessPanels(hass: HomeAssistant | undefined, floor: Floor | undefined, now = Date.now()): ProcessPanel[] {
  if (!hass || !floor) return [];
  return (floor.processes ?? []).filter((p) => processRunning(hass.states[p.running_entity])).map((p) => {
    const raw = hass.states[p.progress_entity]?.state.trim().replace(/\s*%$/, "") ?? "";
    const number = raw === "" ? NaN : Number(raw);
    const progress = Number.isFinite(number) ? Math.round(Math.max(0, Math.min(100, number)) * 10) / 10 : null;
    let remaining: ProcessPanel["remaining"];
    if (p.time_left_entity) {
      const entity = hass.states[p.time_left_entity];
      const unit = String(entity?.attributes.unit_of_measurement ?? "min").toLowerCase();
      const aliases: Record<string, string> = { seconds: "s", second: "s", sec: "s", hours: "h", hour: "h", hr: "h" };
      const normalized = entity && aliases[unit] ? { ...entity, attributes: { ...entity.attributes, unit_of_measurement: aliases[unit] } } : entity;
      const minutes = remainingMinutes(normalized, now);
      remaining = minutes === null ? null : remainingText(minutes);
    }
    return { id: p.id, name: p.name, progress, remaining };
  });
}
