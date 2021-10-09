import React, { useEffect, useState } from "react";
import Filtered from "./components/filter";
import Personform from "./components/personform";
import Persons from "./components/persons";
import getNames from "./services/getNames";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getNames
      .getAll()
      .then((initialNames) => {
        setPersons(initialNames);
      })
      .catch((e) => `Error: ${e}`);
  }, []);

  const addPerson = (event) => {
    const repeatName = persons.filter((person) => person.name === newName);
    if (repeatName.length > 0) {
      event.preventDefault();
      window.alert(`${newName} is already added to the phonebook`);
    } else {
      event.preventDefault();
      const personObject = {
        name: newName,
        number: newNumber,
      };

      getNames.createName(personObject).then((returnedPerson) => {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    //console.log(event.target.value);
    setSearch(event.target.value);
  };

  const removeNumber = (id) => {
    getNames.delName(id).then((removedPerson) => {
      setPersons(persons);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with a <input value={search} onChange={handleSearchChange} />
      <Filtered persons={persons} search={search} />
      <h2>Add a new</h2>
      <Personform
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} removeNumber={removeNumber} />
    </div>
  );
};

export default App;
