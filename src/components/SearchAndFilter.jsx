import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";

export default function SearchAndFilter() {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([]);

  const filterBySearch = async (userInput) => {
    // return if nothing was typed
    if (input.trim() === "") {
      setCountries([]);
      return;
    } else {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${userInput}`
        ); // pass the userInput
        // filter by our search
        console.log(
          response.data.filter(
            (country) =>
              userInput &&
              country.name.official.toLowerCase().includes(userInput)
          )
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        setSearchedCountries([]);
      }
    }
  };

  const handleChange = (value) => {
    setInput(value);
    filterBySearch(value); // pass our input value to the search function
  };

  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-0 py-4 px-6 md:px-[4rem]">
      {/* input */}
      <div className="flex gap-4 items-center dark:bg-dark-blue-elements dark:text-white rounded-sm py-2 px-4 w-full sm:w-1/3 shadow-md">
        <IoSearch size={24} />
        <input
          className="flex-1 py-2 font-nunito-sans border-none outline-none bg-transparent dark:bg-dark-blue-elements"
          placeholder="Search for a country"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      {/* dropdown filter */}
      <div className="px-4 py-4 w-1/2 sm:w-auto flex justify-center items-center bg-white dark:bg-dark-blue-elements dark:text-white rounded-sm shadow-md">
        <select
          id="countries"
          name="countries"
          className="bg-transparent outline-none border-none w-full"
        >
          <option value="Africa">Africa</option>
          <option value="Africa">America</option>
          <option value="Africa">Asia</option>
        </select>
      </div>
    </div>
  );
}
