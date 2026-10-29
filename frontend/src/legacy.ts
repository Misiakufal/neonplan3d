// Read-only compatibility identifiers for data exported or stored before the namespace rename.
export const PREVIOUS_DOMAIN = "neonplan3d";

/** Copy browser preferences once; keep both the source and existing new values. */
export function migrateBrowserSettings(storage: Pick<Storage, "length" | "key" | "getItem" | "setItem">): void {
  const keys = Array.from({ length: storage.length }, (_, i) => storage.key(i));
  for (const oldKey of keys) {
    if (!oldKey?.startsWith(PREVIOUS_DOMAIN + ".")) continue;
    const key = "masterplan3d" + oldKey.slice(PREVIOUS_DOMAIN.length);
    const value = storage.getItem(oldKey);
    if (value !== null && storage.getItem(key) === null) storage.setItem(key, value);
  }
}
