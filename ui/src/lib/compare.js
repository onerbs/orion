/// Copy-pasted from the API project.

/**
 * @param {string} s A number with an optional logical operator prefix.
 *                   e.g. ">=44", "<30", "55"
 *
 * @returns {[string, number]} The logical operator and the number.
 */
export const operatorAndNumber = (s) => {
  let o = "", n = 0, q = s.split("");
  while (q.length > 0) {
    const x = q.shift();
    if (isNaN(parseInt(x))) {
      o += x;
    } else {
      n = parseInt([x, ...q].join(""));
      break;
    }
  }
  return [o, n];
};

/**
 * @param {number} a The first number to be compared.
 * @param {string} o The optional logical operator.
 * @param {number} b The second number to be compared.
 */
export const compare = (a, o, b) => {
  switch (o) {
    case ">=":
      return a >= b;
    case "<=":
      return a <= b;
    case ">":
      return a > b;
    case "<":
      return a < b;
    default:
      return a === b;
  }
};

/**
 * Check if `a` includes `b`.
 * @returns {boolean}
 */
export const includes = (a, b) => lower(a).includes(lower(b));
const lower = (x) => x.toString().toLowerCase();
