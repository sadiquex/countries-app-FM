import CountriesContainer from "./components/CountriesContainer";
import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const API_URL = `https://restcountries.com/v3.1/all`;

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
    <div className="p-16 bg-very-dark-blue-bg">
      <Header />
      <SearchAndFilter countries={countries} />
      <CountriesContainer countries={countries} />
    </div>
  );
}
