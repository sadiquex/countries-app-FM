import React from "react";

export default function CountryCard({ country }) {
  console.log(country);

  // desctruturing the info in each country object
  const { name } = country;

  return <div className="bg-red-300">{name.official}</div>;
}
