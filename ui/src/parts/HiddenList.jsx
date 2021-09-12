import React from "react";

export default function HiddenList({ hidden, setHidden }) {
  return (
    <div id="hiddenList">
      {hidden.sort().map((item) => (
        <div
          key={`H+${item}`}
          title="Click to show"
          onClick={() => {
            setHidden((current) => current.filter((value) => value !== item));
          }}
        >
          {item}
        </div>
      ))}
      {hidden.length > 0 && (
        <strong
          onClick={() => setHidden([])}
        >
          show all
        </strong>
      )}
    </div>
  );
}
