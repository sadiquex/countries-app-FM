import CountryCard from "./CountryCard";

export default function CountriesList({ countries }) {
  return (
    <div className="px-6 md:px-[4rem] grid grid-cols-1 md:grid-cols-4 gap-12 bg-very-light-gray-bg dark:bg-very-dark-blue-bg">
      {countries.map((country, i) => (
        <CountryCard country={country} key={i} />
      ))}
    </div>
  );
}
