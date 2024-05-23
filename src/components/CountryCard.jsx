import React from "react";

export default function CountryCard({ country }) {
  // desctruturing the info in each country object
  const { name, flags, population, region, capital } = country;

  return (
    <div className="rounded-md">
      <div className="w-full">
        <img className="w-full h-[9rem]" src={flags.png} alt={flags.alt} />
      </div>
      <div className="px-4 pt-5 pb-10 flex flex-col gap-3 bg-white">
        {/* only return the first 3 words from the name */}
        <p className="font-nunito-sans font-bold text-[16px] truncate">
          {name.official}
        </p>
        <div className="flex flex-col gap-1">
          <p className="font-[14px]">
            Population:
            <span className="text-dark-gray-input">{population}</span>
          </p>
          <p className="font-[14px]">
            Region:<span className="text-dark-gray-input">{region}</span>
          </p>
          <p className="font-[14px]">
            Capital:<span className="text-dark-gray-input">{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
