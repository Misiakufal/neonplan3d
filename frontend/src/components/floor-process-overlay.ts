import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { floorProcessPanels, PROCESS_REFRESH_MS, type ProcessPanel } from "../floor-processes.ts";
import { formatNumber, translate } from "../i18n.ts";
import type { Floor } from "../model.ts";
import type { HomeAssistant } from "../types.ts";

/** Read the latest HA states every five seconds without rebuilding the 3D scene. */
export class FloorProcessOverlay extends LitElement {
  static properties = {
    hass: { attribute: false },
    floor: { attribute: false },
    _panels: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare floor: Floor | undefined;
  private declare _panels: ProcessPanel[];
  private timer: ReturnType<typeof setInterval> | undefined;

  constructor() {
    super();
    this._panels = [];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.refresh();
    this.timer = setInterval(this.refresh, PROCESS_REFRESH_MS);
  }

  disconnectedCallback(): void {
    clearInterval(this.timer);
    this.timer = undefined;
    super.disconnectedCallback();
  }

  protected willUpdate(changed: PropertyValues): void {
    // Switching floors or editing a definition must never show the old floor's snapshot.
    if (changed.has("floor")) this.refresh();
  }

  private refresh = (): void => {
    this._panels = floorProcessPanels(this.hass, this.floor);
    const active = this._panels.length > 0;
    this.toggleAttribute("active", active);
    this.dispatchEvent(new CustomEvent("process-panels-changed", { detail: { active }, bubbles: true, composed: true }));
  };

  protected render() {
    return this._panels.map((p) => html`<article aria-label=${p.name}>
      <h3>${p.name}</h3>
      <div class="percentage">${p.progress === null ? "—" : formatNumber(this.hass, p.progress, 1)} %</div>
      <progress max="100" value=${ifDefined(p.progress ?? undefined)} aria-label=${p.name}></progress>
      ${p.remaining === undefined ? nothing : html`<div class="remaining">${translate(this.hass, "hh_left", { t: p.remaining ?? "—" })}</div>`}
    </article>`);
  }

  static styles = css`
    :host {
      position: absolute;
      top: 12px;
      left: 12px;
      width: 15%;
      max-height: calc(100% - 24px);
      overflow-y: auto;
      scrollbar-width: thin;
      z-index: 5;
      box-sizing: border-box;
      color: var(--fp3d-text, #e6eefc);
      font: 14px var(--fp3d-font, system-ui, sans-serif);
      overscroll-behavior: contain;
    }
    article {
      box-sizing: border-box;
      width: 100%;
      padding: 12px;
      padding: clamp(6px, 0.9cqw, 14px);
      margin-bottom: 10px;
      border: 1px solid rgba(55, 224, 255, 0.25);
      border-radius: 12px;
      background: rgba(9, 18, 32, 0.72);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      overflow-wrap: anywhere;
    }
    article:last-child { margin-bottom: 0; }
    h3 {
      margin: 0 0 10px;
      font: 700 20px var(--fp3d-title-font, system-ui, sans-serif);
      font: 700 clamp(16px, 1.6cqw, 24px) var(--fp3d-title-font, system-ui, sans-serif);
      line-height: 1.2;
    }
    .percentage { font-variant-numeric: tabular-nums; }
    progress {
      display: block;
      width: 100%;
      height: 7px;
      margin: 8px 0;
      border: 0;
      border-radius: 6px;
      overflow: hidden;
      accent-color: var(--fp3d-accent, #37e0ff);
      background: rgba(255, 255, 255, 0.15);
    }
    progress::-webkit-progress-bar { background: rgba(255, 255, 255, 0.15); border-radius: 6px; }
    progress::-webkit-progress-value { background: var(--fp3d-accent, #37e0ff); border-radius: 6px; }
    progress::-moz-progress-bar { background: var(--fp3d-accent, #37e0ff); border-radius: 6px; }
    .remaining { color: var(--fp3d-muted, #8a9bb8); font-variant-numeric: tabular-nums; }
  `;
}

if (!customElements.get("fp3d-floor-processes")) customElements.define("fp3d-floor-processes", FloorProcessOverlay);
