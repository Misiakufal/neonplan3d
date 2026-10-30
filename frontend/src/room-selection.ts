export interface RoomSelection {
  floorId: string | null;
  roomId: string | null;
}

/** A room tap selects its floor and room together; repeated taps on the same room still close it. */
export function roomSelection(current: RoomSelection, floorId: string | null, roomId: string | null, canSwitchFloor: boolean): RoomSelection {
  if (canSwitchFloor && floorId && current.floorId !== floorId) return { floorId, roomId };
  return {
    floorId: current.floorId,
    roomId: roomId ? (current.roomId === roomId ? null : roomId) : current.roomId,
  };
}
