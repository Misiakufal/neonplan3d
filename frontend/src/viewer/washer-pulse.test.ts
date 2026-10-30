import assert from "node:assert/strict";
import { test } from "node:test";
import { Color } from "three";
import { OPEN_WARM, OPEN_WARM_RGB } from "../activity-colors.ts";
import { WasherPulse, washerPulseAmount } from "./washer-pulse.ts";

test("washer pulse shares the exact open-door orange and a smooth two-second period", () => {
  assert.equal(OPEN_WARM, 0xffb547);
  assert.deepEqual(OPEN_WARM_RGB, [1, 181 / 255, 71 / 255]);
  for (const [time, amount] of [[0, 0], [500, 0.5], [1000, 1], [1500, 0.5], [2000, 0], [3000, 1], [4000, 0]]) {
    assert.ok(Math.abs(washerPulseAmount(time) - amount) < 1e-10);
  }
  assert.ok(washerPulseAmount(1) < 0.00001, "the pulse fades in rather than jumping");
  assert.ok(Math.abs(washerPulseAmount(1999) - washerPulseAmount(2001)) < 1e-10, "cycle boundaries are smooth");
});

test("only a running washer's geometry changes, repeated HA updates do not reset its pulse, and stopping restores exact colours", () => {
  const colors = new Float32Array(27).fill(0.8);
  const original = colors.slice();
  const touched: number[][] = [];
  const pulse = new WasherPulse(colors, (start, count) => touched.push([start, count]));
  const ranges = [{ id: "washer", start: 1, end: 2 }];
  pulse.setRunning(ranges, 100);
  pulse.update(100);
  assert.deepEqual(colors, original);
  pulse.update(1100);
  const orange = new Color(OPEN_WARM).toArray();
  for (let i = 9; i < 18; i++) assert.ok(Math.abs(colors[i] - orange[i % 3]) < 1e-7);
  assert.deepEqual(colors.slice(0, 9), original.slice(0, 9));
  assert.deepEqual(colors.slice(18), original.slice(18));
  const peak = colors.slice();
  pulse.setRunning(ranges, 1100);
  pulse.update(1100);
  assert.deepEqual(colors, peak, "sensor refreshes must not restart the two-second fade");
  pulse.update(2100);
  assert.deepEqual(colors, original);
  pulse.update(3100);
  pulse.setRunning([], 3100);
  assert.equal(pulse.active, false);
  assert.deepEqual(colors, original);
  assert.ok(touched.every(([start, count]) => start === 9 && count === 9), "upload only the changed washer's vertices");
});

test("multiple washers keep independent pulse phases and stopping one leaves the other active", () => {
  const colors = new Float32Array(18).fill(0.8);
  const pulse = new WasherPulse(colors);
  const first = { id: "first", start: 0, end: 1 };
  const second = { id: "second", start: 1, end: 2 };
  pulse.setRunning([first], 0);
  pulse.setRunning([first, second], 1000);
  pulse.update(1000);
  assert.notDeepEqual(colors.slice(0, 9), colors.slice(9));
  pulse.setRunning([second], 1500);
  assert.deepEqual([...colors.slice(0, 9)], [...new Float32Array(9).fill(0.8)]);
  assert.equal(pulse.active, true);
  pulse.setRunning([], 2000);
  assert.deepEqual([...colors], [...new Float32Array(18).fill(0.8)]);
});

test("the orange peak keeps the shared hue while preserving model contrast", () => {
  const colors = new Float32Array([...new Float32Array(9).fill(0.02), ...new Float32Array(9).fill(0.25)]);
  const pulse = new WasherPulse(colors);
  pulse.setRunning([{ id: "washer", start: 0, end: 2 }], 0);
  pulse.update(1000);
  const orange = new Color(OPEN_WARM).toArray();
  assert.ok(colors[0] < colors[9], "the glass remains darker than the body");
  for (const start of [0, 9]) {
    const brightness = colors[start] / orange[0];
    for (let c = 1; c < 3; c++) assert.ok(Math.abs(colors[start + c] / orange[c] - brightness) < 1e-6);
  }
});
