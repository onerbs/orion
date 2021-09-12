/**
 * Generate a random number between min and max.
 * @param {number} max The maximum value admitted (inclusive).
 * @param {number} min The minimum value admitted (inclusive).
 */
export const int = (max, min = 0) => (
  Math.floor((Math.random() * (max + 1))) + min
);

/** Generate a random boolean. */
export const bool = () => !int(1);

/** Return a random item from the list */
export const pick = (all) => all[int(all.length - 1)];
