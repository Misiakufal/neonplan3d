import assert from "node:assert/strict";
import { test } from "node:test";
import { roomSelection } from "./room-selection.ts";

test("a room tap from All floors selects the room and its floor in one step", () => {
  assert.deepEqual(roomSelection({ floorId: null, roomId: null }, "ground", "living", true), { floorId: "ground", roomId: "living" });
});

test("switching floors opens the tapped room instead of stopping at the floor overview", () => {
  assert.deepEqual(roomSelection({ floorId: "ground", roomId: "living" }, "upper", "office", true), { floorId: "upper", roomId: "office" });
  assert.deepEqual(roomSelection({ floorId: "ground", roomId: "same-id" }, "upper", "same-id", true), { floorId: "upper", roomId: "same-id" });
});

test("same-floor room switching, closing the selected room and floor-only taps retain their behavior", () => {
  const current = { floorId: "ground", roomId: "living" };
  assert.deepEqual(roomSelection(current, "ground", "kitchen", true), { floorId: "ground", roomId: "kitchen" });
  assert.deepEqual(roomSelection(current, "ground", "living", true), { floorId: "ground", roomId: null });
  assert.deepEqual(roomSelection(current, "ground", null, true), current);
  assert.deepEqual(roomSelection(current, "upper", null, true), { floorId: "upper", roomId: null });
  assert.deepEqual(roomSelection({ floorId: null, roomId: null }, "ground", "living", false), { floorId: null, roomId: "living" }, "single-floor views do not need a floor switch");
});
