import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";

export default function Header({ darkModeHandler, darkMode }) {
  return (
    <div className="h-[15%] flex justify-between p-8 py-[1rem] md:px-[4rem] dark:bg-dark-blue-elements shadow-md mb-4">
      <h1 className="font-nunito-sans font-extrabold text-xl whitespace-nowrap dark:text-white">
        Where in the world?
      </h1>
      <div>
        <button
          className="flex items-center justify-center gap-2 font-nunito-sans whitespace-nowrap dark:text-white"
          onClick={() => darkModeHandler()}
        >
          {darkMode ? (
            <>
              <FaSun size={20} />
              Light Mode
            </>
          ) : (
            <>
              <IoMdMoon size={20} />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
}
