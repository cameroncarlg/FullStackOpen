import React, { useEffect, useState } from "react";
import axios from "axios";
import Filtered from "./components/filtered";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    //console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      find country <input value={search} onChange={handleSearchChange} />
      <div>
        <Filtered countries={countries} search={search} />
      </div>
    </div>
  );
};

export default App;
