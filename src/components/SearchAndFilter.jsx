import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchAndFilter() {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);

  const filterBySearch = async (userInput) => {
    // do nothing if nothing was typed
    if (input.trim() === "") {
      setCountries([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${userInput}?fullText=true`
      ); // pass the userInput
      //   setCountries(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setCountries([]);
    }
  };

  //   run the search function anytime the user input changes
  useEffect(() => {
    // pass the input to the function
    filterBySearch(input);
  }, [input]);

  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between p-4 sm:p-0 sm:py-4">
      {/* input */}
      <div className="flex gap-4 items-center bg-white py-2 px-4 w-full sm:w-1/3 shadow-sm">
        <IoSearch size={24} />
        <input
          className="flex-1 font-nunito-sans border-none outline-none"
          placeholder="Search for a country"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* dropdown filter */}
      <div className="px-4 py-2 bg-white">
        <select id="countries" name="countries" className="bg-transparent">
          <option value="Africa">Africa</option>
          <option value="Africa">America</option>
          <option value="Africa">Asia</option>
        </select>
      </div>
    </div>
  );
}
