import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const API_URL = `https://restcountries.com/v3.1/all`;

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark"); // toggle darkMode selector in tailwind config
  };

  const getAllCountries = async () => {
    try {
      const response = await axios.get(API_URL);
      setCountries(response.data); // pass the response to our state setting function
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // execute the function once the component mounts
    getAllCountries();
  }, []);

  return (
    <div className="bg-very-light-gray-bg dark:bg-very-dark-blue-bg">
      <Header darkModeHandler={darkModeHandler} darkMode={darkMode} />
      <SearchAndFilter countries={countries} />
      <CountriesList countries={countries} />
    </div>
  );
}
