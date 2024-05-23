import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchedCountries, setSearchedCountries] = useState([]);

  const API_URL = `https://restcountries.com/v3.1/all`;

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark"); // toggle darkMode selector in tailwind config
  };

  const getAllCountries = async () => {
    try {
      const response = await axios.get(API_URL);
      setCountries(response.data);
      setSearchedCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // execute the function once the component mounts
    getAllCountries();
  }, []);

  const filterBySearch = (userInput) => {
    // return if nothing was typed
    if (userInput.trim() === "") {
      setSearchedCountries(countries); // reset to full list if input is empty
    } else {
      setSearchedCountries(
        countries.filter((country) =>
          country.name.official.toLowerCase().includes(userInput.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="bg-very-light-gray-bg dark:bg-very-dark-blue-bg">
      <Header darkModeHandler={darkModeHandler} darkMode={darkMode} />
      <SearchAndFilter countries={countries} filterBySearch={filterBySearch} />
      <CountriesList countries={searchedCountries} />
    </div>
  );
}
