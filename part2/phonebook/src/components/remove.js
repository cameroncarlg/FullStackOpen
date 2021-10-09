import React from "react";

const Remove = ({ person, removeNumber }) => (
  <button onClick={() => removeNumber(person.id)}>remove</button>
);

export default Remove;
