import React from "react";

const Filtered = ({ persons, search }) => {
  const newPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ul>
      {newPersons.map((person, i) => (
        <li key={i}>{person.name}</li>
      ))}
    </ul>
  );
};

export default Filtered;
