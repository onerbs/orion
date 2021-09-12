import { attrs, types, users } from "../lib/users.mjs";
import { compare, operatorAndNumber } from "../lib/compare.mjs";

import { Router } from "express";
const router = Router();

router.get("/users", (req, res) => {
  let $users = users;

  // Apply filters. The order matters here.
  for (const key of Object.keys(req.query)) {
    let op, num, is_numeric = types[key] === "number";
    if (is_numeric) {
      [op, num] = operatorAndNumber(req.query[key]);
    }
    $users = $users.filter((it) => (
      is_numeric
        ? compare(it[key], op, num)
        : it[key].toString() === req.query[key]
    ));
  }

  res.json($users);
});

router.get("/attrs", (req, res) => {
  if ("types" in req.query && req.query.types !== "false") {
    res.json(types);
  } else {
    res.json(attrs);
  }
});

export default router;
