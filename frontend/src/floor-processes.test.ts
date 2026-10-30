import assert from "node:assert/strict";
import { test } from "node:test";
import { floorProcessPanels, processPanelsForView, processRunning } from "./floor-processes.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const entity = (state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id: "sensor.test", state, attributes });
const hass = (states: Record<string, HassEntity>) => ({ states }) as HomeAssistant;
function floor() {
  const f = newFloor("ground", "Ground", 0);
  f.processes = [
    { id: "wash", name: "Laundry", running_entity: "binary_sensor.wash", progress_entity: "sensor.wash_progress", time_left_entity: "sensor.wash_left" },
    { id: "dishes", name: "Dishes", running_entity: "sensor.dishes", progress_entity: "sensor.dishes_progress" },
  ];
  return f;
}

test("all-floor panels combine active processes in floor order and switching back filters them", () => {
  const b = emptyBuilding();
  const ground = floor();
  const upper = newFloor("upper", "Upper", 3);
  upper.processes = [{ id: "wash", name: "Upper laundry", running_entity: "binary_sensor.upper", progress_entity: "sensor.upper_progress" }];
  b.floors = [upper, ground, newFloor("empty", "Empty", -3)];
  const h = hass({ "binary_sensor.wash": entity("on"), "sensor.dishes": entity("off"), "binary_sensor.upper": entity("on"), "sensor.upper_progress": entity("80") });
  assert.deepEqual(processPanelsForView(h, b, null).map((p) => p.name), ["Upper laundry", "Laundry"], "process IDs may repeat across floors");
  assert.deepEqual(processPanelsForView(h, b, "ground").map((p) => p.name), ["Laundry"]);
  assert.deepEqual(processPanelsForView(h, b, "upper").map((p) => p.progress), [80]);
  assert.deepEqual(processPanelsForView(h, b, "missing"), []);
  assert.deepEqual(processPanelsForView(h, null, null), []);
  h.states["binary_sensor.upper"].state = "off";
  assert.deepEqual(processPanelsForView(h, b, null).map((p) => p.name), ["Laundry"]);
});

test("only explicit running states and positive boolean readings activate a process", () => {
  for (const state of ["on", "true", "1", "running", " RUNNING ", "active", "washing", "printing", "in_progress"]) {
    assert.equal(processRunning(entity(state)), true, state);
  }
  for (const state of ["off", "false", "0", "-1", "idle", "paused", "finished", "unknown", "unavailable", "", "no program"]) {
    assert.equal(processRunning(entity(state)), false, state);
  }
  assert.equal(processRunning(undefined), false);
});

test("process panels stay in floor order, and never include an inactive or another floor's process", () => {
  const h = hass({ "binary_sensor.wash": entity("on"), "sensor.dishes": entity("running"), "sensor.wash_progress": entity("42.25"), "sensor.dishes_progress": entity("75 %") });
  const panels = floorProcessPanels(h, floor());
  assert.deepEqual(panels.map((p) => p.name), ["Laundry", "Dishes"]);
  assert.deepEqual(panels.map((p) => p.progress), [42.3, 75]);
  assert.equal(panels[0].remaining, null, "a configured, missing remaining sensor is unknown");
  assert.equal(panels[1].remaining, undefined, "no remaining sensor means no time-left row");
  h.states["binary_sensor.wash"].state = "off";
  assert.deepEqual(floorProcessPanels(h, floor()).map((p) => p.id), ["dishes"]);
  assert.deepEqual(floorProcessPanels(h, newFloor("upper", "Upper", 3)), []);
  assert.deepEqual(floorProcessPanels(h, undefined), []);
  assert.deepEqual(floorProcessPanels(undefined, floor()), []);
});

test("percentage readings are bounded and invalid readings remain unknown", () => {
  const h = hass({ "binary_sensor.wash": entity("on") });
  for (const [state, expected] of [["0", 0], ["100", 100], ["-5", 0], ["105", 100], ["0.5", 0.5], ["unavailable", null], ["unknown", null], ["", null], ["Infinity", null], ["50 garbage", null]] as const) {
    h.states["sensor.wash_progress"] = entity(state);
    assert.equal(floorProcessPanels(h, floor())[0].progress, expected, state);
  }
});

test("time left supports minutes, seconds, hours, durations and end timestamps", () => {
  const now = Date.parse("2026-10-29T10:00:00Z");
  const h = hass({ "binary_sensor.wash": entity("on") });
  for (const [state, unit, expected] of [["12", "min", "12 min"], ["0", "min", "0 min"], ["120", "s", "2 min"], ["120", "seconds", "2 min"], ["1.5", "h", "1:30 h"], ["1.5", "hours", "1:30 h"], ["01:15:00", "", "1:15 h"], ["2026-10-29T10:20:00Z", "", "20 min"], ["unavailable", "min", null]] as const) {
    h.states["sensor.wash_left"] = entity(state, { unit_of_measurement: unit });
    const before = structuredClone(h.states);
    assert.equal(floorProcessPanels(h, floor(), now)[0].remaining, expected, state);
    assert.deepEqual(h.states, before, "formatting must not mutate HA state objects");
  }
  h.states["sensor.wash_left"] = entity("2026-10-29T10:20:00Z");
  assert.equal(floorProcessPanels(h, floor(), now + 5 * 60000)[0].remaining, "15 min", "timestamp countdowns refresh even when entity state is unchanged");
});
