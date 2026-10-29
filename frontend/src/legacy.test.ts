import assert from "node:assert/strict";
import { test } from "node:test";
import { migrateBrowserSettings, PREVIOUS_DOMAIN } from "./legacy.ts";

test("browser preferences migrate once without overwriting newer settings", () => {
  const values = new Map([
    [PREVIOUS_DOMAIN + ".flows", "1"],
    [PREVIOUS_DOMAIN + ".quality", "high"],
    ["masterplan3d.quality", "low"],
    ["unrelated.setting", "keep"],
  ]);
  const storage = {
    get length() { return values.size; },
    key: (i: number) => [...values.keys()][i] ?? null,
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value); },
  };
  migrateBrowserSettings(storage);
  assert.equal(values.get("masterplan3d.flows"), "1");
  assert.equal(values.get("masterplan3d.quality"), "low");
  assert.equal(values.get(PREVIOUS_DOMAIN + ".flows"), "1");
  assert.equal(values.get("unrelated.setting"), "keep");
  const snapshot = [...values];
  migrateBrowserSettings(storage);
  assert.deepEqual([...values], snapshot);
});
