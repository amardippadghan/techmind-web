import React from "react";

import { navLists } from "../constants";
import { logoimg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center  bg-black ">
      <nav className="flex screen-max-width justify-between items-center w-full ">
        <img src={logoimg} alt="TechMinds" width={100} />

        <div className="flex flex-1 justify-center max-sm:hidden text-gray-300">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-purple-600 transition-all "
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="bg-purple-500 rounded-full p-2">
          <button className="p-1 ">Create Account</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
