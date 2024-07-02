import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";

export default function SearchAndFilter({ filterBySearch, filterByContinent }) {
  const [input, setInput] = useState("");

  const handleCountrySearch = (value) => {
    setInput(value);
    filterBySearch(value); // pass our input value to the search function
  };

  const handleContinent = (continent) => {
    filterByContinent(continent);
  };

  return (
    <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-0 py-4 px-4 md:px-0">
      {/* input */}
      <div className="flex gap-4 items-center dark:bg-dark-blue-elements dark:text-white rounded-sm py-2 px-4 w-full sm:w-1/3 shadow-md">
        <IoSearch size={24} />
        <input
          className="flex-1 py-2 font-nunito-sans border-none outline-none bg-transparent dark:bg-dark-blue-elements"
          placeholder="Search for a country"
          value={input}
          onChange={(e) => handleCountrySearch(e.target.value)}
        />
      </div>

      {/* dropdown filter */}
      <div className="px-4 py-4 w-1/2 sm:w-auto flex justify-center items-center bg-white dark:bg-dark-blue-elements dark:text-white rounded-sm shadow-md">
        <select
          id="countries"
          name="countries"
          className="bg-transparent outline-none border-none w-full"
          onChange={(e) => handleContinent(e.target.value)}
        >
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
    </div>
  );
}
