import CountriesContainer from "./components/CountriesContainer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="h-screen p-16 bg-very-dark-blue-bg">
      <Header />
      <CountriesContainer />
    </div>
  );
}
