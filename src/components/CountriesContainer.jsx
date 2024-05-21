import axios from "axios";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

export default function CountriesContainer() {
  const [countries, setCountries] = useState([]);
  const API_URL = `https://restcountries.com/v3.1/all`;

  const getAllCountries = async () => {
    try {
      const response = await axios.get(API_URL);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 bg-gray-100">
      {countries.map((country, i) => (
        <CountryCard country={country} key={i} />
      ))}
    </div>
  );
}
