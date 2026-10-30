/** Shared by open doors and running washing machines and dishwashers. */
export const OPEN_WARM = 0xffb547;
export const OPEN_WARM_RGB = [16, 8, 0].map((shift) => ((OPEN_WARM >> shift) & 255) / 255) as [number, number, number];
