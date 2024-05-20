import CountryCard from "./CountryCard";

export default function CountriesContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <CountryCard />
    </div>
  );
}
