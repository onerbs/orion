import * as random from "./random.mjs";

/**
 * The registered users.
 */
const userNames = [
  "alice",
  "bob",
  "dana",
  "daniel",
  "harry",
  "jane",
  "janice",
  "joe",
  "moe",
  "sandra",
  "silvia",
];

/**
 * Generate random data on server startup.
 */
export const users = userNames.map((name) => ({
  name,
  age: random.int(60, 18),
  happy: random.bool(),
  healthy: random.bool(),
  busy: random.bool(),
  // city: random.pick(['A', 'B', 'C', 'D'])
}));

const sample = users[0];
export const attrs = Object.keys(sample);
export const types = (
  attrs.reduce((dat, attr) => (
    dat[attr] = typeof (sample[attr]), dat
  ), {})
);
