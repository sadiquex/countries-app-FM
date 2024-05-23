import CountryCard from "./CountryCard";

export default function CountriesContainer({ countries }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 bg-gray-100">
      {countries.map((country, i) => (
        <CountryCard country={country} key={i} />
      ))}
    </div>
  );
}
