import React, { useState } from "react";

export default function Table({ users, hidden, setHidden }) {
  const attrs = users.length > 0 ? Object.keys(users[0]) : [];

  return (
    <table>
      <tbody>
        <tr>
          {attrs.filter((attr) => !hidden.includes(attr)).map((attr) => (
            <th
              key={attr}
              title="Click to hide"
              onClick={() => {
                setHidden((current) => [...current, attr]);
              }}
            >
              {attr}
            </th>
          ))}
        </tr>
        {users.map((user) => (
          <tr key={user.name}>
            {attrs.filter((attr) => !hidden.includes(attr)).map((
              attr,
            ) => (
              <td key={`${user.name}_${attr}`}>
                {user[attr].toString()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
