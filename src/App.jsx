import CountriesContainer from "./components/CountriesContainer";
import Header from "./components/Header";

export default function App() {
  const API_URL = `https://restcountries.com/v3.1/all`;

  return (
    <div className="h-full">
      <Header />
      <CountriesContainer />
    </div>
  );
}
