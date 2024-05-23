import React from "react";

export default function Header() {
  return (
    <div className="h-[15%] flex justify-between px-[4rem] py-[1rem] bg-white shadow-md mb-4">
      <h1 className="font-nunito-sans font-extrabold text-xl">
        Where in the world?
      </h1>
      <div>
        <p className="font-nunito-sans">Dark Mode</p>
      </div>
    </div>
  );
}
