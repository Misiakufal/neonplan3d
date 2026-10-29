import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor } from "./model.ts";
import { PREVIOUS_DOMAIN } from "./legacy.ts";
import { exportFile, parseExport } from "./transfer.ts";

function building() {
  const b = emptyBuilding();
  const f = newFloor("eg", "EG", 0);
  f.rooms = [{ id: "r", name: "Wohnen", area_id: "living_room", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  f.furniture = [{ id: "m", type: "lamp_ceiling", x: 2, z: 1.5, rotation: 0, w: 0.4, d: 0.4, h: 0.08, variant: null, entity: "light.decke", power: null }];
  f.placements = [{ entity_id: "sensor.temp", x: 1, z: 1, y: null }];
  f.background = { image_id: "img", x: 0, z: 0, width: 10, opacity: 0.5 };
  b.floors = [f];
  b.energy.grid = "sensor.grid";
  b.presence = [{ person: "person.mia", sensor: "sensor.mia" }];
  return b;
}

test("a shareable export has no entities, areas or images", () => {
  const file = exportFile(building(), true);
  const f = file.building.floors[0];
  assert.equal(f.rooms[0].area_id, null);
  assert.equal(f.furniture[0].entity, null);
  assert.deepEqual(f.placements, []);
  assert.equal(f.background, null);
  assert.equal(file.building.energy.grid, null);
  assert.deepEqual(file.building.presence, []);
  // the room shape and the lamp stay
  assert.equal(f.rooms[0].points.length, 4);
  assert.equal(f.furniture[0].type, "lamp_ceiling");
});

test("import reads export files and plain buildings, and rejects anything else", () => {
  const full = exportFile(building(), false);
  const back = parseExport(JSON.stringify(full));
  assert.equal(back.floors[0].furniture[0].entity, "light.decke");
  assert.equal(back.floors[0].background, null, "images are not imported");
  assert.equal(parseExport(JSON.stringify(building())).floors.length, 1);
  assert.throws(() => parseExport("{}"));
  assert.throws(() => parseExport("kein json"));
});


test("floor processes survive a full export and stay out of shareable templates", () => {
  const b = building();
  b.floors[0].processes = [
    { id: "wash", name: "Laundry", running_entity: "binary_sensor.washer_running", progress_entity: "sensor.washer_progress" },
    { id: "dishes", name: "Dishes", running_entity: "sensor.dishwasher_state", progress_entity: "sensor.dishwasher_progress", time_left_entity: "sensor.dishwasher_remaining" },
  ];
  const saved = structuredClone(b.floors[0].processes);
  const full = parseExport(JSON.stringify(exportFile(b, false)));
  assert.deepEqual(full.floors[0].processes, saved);
  assert.equal(full.floors[0].processes?.[0].time_left_entity, undefined);
  const shared = exportFile(b, true);
  assert.equal(shared.building.floors[0].processes, undefined);
  assert.deepEqual(b.floors[0].processes, saved, "sharing must not change the original floor");
});


test("the renamed app still imports plans exported under the previous format", () => {
  const old = { ...exportFile(building(), false), format: PREVIOUS_DOMAIN };
  const restored = parseExport(JSON.stringify(old));
  assert.equal(restored.floors[0].name, "EG");
  assert.equal(restored.floors[0].furniture[0].entity, "light.decke");
  assert.equal(exportFile(restored, false).format, "masterplan3d");
});
