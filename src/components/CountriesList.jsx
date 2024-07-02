import CountryCard from "./CountryCard";

export default function CountriesList({ countries }) {
  return (
    <div className="container px-6 md:p-0 grid grid-cols-1 md:grid-cols-4 gap-12 bg-very-light-gray-bg dark:bg-very-dark-blue-bg h-auto">
      {countries.length === 0 ? (
        <p>No countries found</p>
      ) : (
        countries.map((country, i) => <CountryCard country={country} key={i} />)
      )}
    </div>
  );
}
