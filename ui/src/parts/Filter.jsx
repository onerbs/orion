import React, { useEffect, useState } from "react";

import { input } from "../lib/dialogs";
import { fetchTypes } from "../lib/api";
import { compare, includes, operatorAndNumber } from "../lib/compare";

export default function Filter({ users, setUsers }) {
  const [error, setError] = useState({});
  const [types, setTypes] = useState({});
  const [attrs, setAttrs] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchTypes()
      .then(($types) => {
        setTypes($types);
        setAttrs(Object.keys($types));
      })
      .catch(setError);
  }, []);

  useEffect(() => {
    let $users = users;
    for (const attr of Object.keys(filters)) {
      let op, num, is_numeric = types[attr] === "number";
      if (is_numeric) {
        [op, num] = operatorAndNumber(filters[attr]);
      }
      $users = $users.filter((it) => (
        is_numeric
          ? compare(it[attr], op, num)
          : includes(it[attr], filters[attr])
      ));
    }
    setUsers($users);
  }, [filters]);

  if (error.message) {
    return <strong>{error.message}</strong>;
  }

  return (
    <div className="filterGroup">
      {attrs.map((attr) => (
        <span
          key={`filter_${attr}`}
          className="filter"
          onClick={(e) => {
            if (e.shiftKey) {
              if (attr in filters) {
                const next = { ...filters };
                delete next[attr];
                setFilters(next);
              }
            } else {
              switch (types[attr]) {
                case "boolean":
                  if (attr in filters) {
                    setFilters((fs) => ({ ...fs, [attr]: !fs[attr] }));
                  } else {
                    setFilters((fs) => ({ ...fs, [attr]: true }));
                  }
                  break;
                default:
                  input("Filter", attr, filters[attr])
                    .then((val) => {
                      if (val) setFilters((fs) => ({ ...fs, [attr]: val }));
                    });
                  break;
              }
            }
          }}
          title="`Shift+Click` to remove filter"
        >
          {(attr in filters) ? `${attr}: ${filters[attr]}` : attr}
        </span>
      ))}
      {Object.keys(filters).length > 0
        ? (
          <span
            className="filter"
            onClick={() => setFilters({})}
            title="Clear filters"
            style={{
              backgroundColor: "#fc5c65",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            &times;
          </span>
        )
        : <span />}
    </div>
  );
}
