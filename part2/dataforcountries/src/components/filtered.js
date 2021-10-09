import React from "react";

const Filtered = ({ countries, search }) => {
  const countryFiltered = countries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });

  const printCountries = () => {
    if (countryFiltered.length > 10 && search) {
      return <div>Too many results</div>;
    } else if (countryFiltered.length === 1) {
      return countryFiltered.map((country, i) => (
        <div key={i}>
          <h2>{country.name}</h2>
          <h4>Capital: {country.capital}</h4>
          <h4>Population: {country.population}</h4>
          <h4>
            Languages:
            <ul>
              {country.languages.map((lang, langIdx) => (
                <li key={langIdx}>{lang.name}</li>
              ))}
            </ul>
          </h4>
          <img src={country.flag} alt={""}></img>
        </div>
      ));
    } else {
      return countryFiltered.map((country, i) => (
        <li key={i}>{country.name}</li>
      ));
    }
  };

  return <ul>{printCountries()}</ul>;
};

export default Filtered;
