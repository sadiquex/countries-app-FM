export default function CountryCard({ country }) {
  // desctruturing the info in each country object
  const { name, flags, population, region, capital } = country;

  // TODO: cleanup the code - use map function to display the data

  return (
    <div className="rounded-md">
      <div className="w-full">
        <img className="w-full h-[9rem]" src={flags.png} alt={flags.alt} />
      </div>
      <div className="px-4 pt-5 pb-10 flex flex-col gap-3 bg-white dark:bg-dark-blue-elements">
        <p className="font-nunito-sans font-bold text-[16px] truncate dark:text-white">
          {name.official}
        </p>
        <div className="flex flex-col gap-1">
          <p className="font-[14px] dark:text-white">
            Population:
            <span className="text-dark-gray-input dark:text-white">
              {population}
            </span>
          </p>
          <p className="font-[14px] dark:text-white">
            Region:
            <span className="text-dark-gray-input dark:text-white">
              {region}
            </span>
          </p>
          <p className="font-[14px] dark:text-white">
            Capital:
            <span className="text-dark-gray-input dark:text-white">
              {capital}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
