import React from "react";
import Contact from "./contacts";
import Remove from "./remove";

const Persons = ({ persons, removeNumber }) => {
  return (
    <ul>
      {persons.map((person, i) => (
        <div key={i}>
          <Contact name={person.name} number={person.number} />
          <Remove person={person} removeNumber={removeNumber}></Remove>
        </div>
      ))}
    </ul>
  );
};

export default Persons;
