/** @format */

import React from "react";
import {
  EyeDropperIcon,
  EyeIcon,
  AtSymbolIcon,
  BellIcon,
} from "@heroicons/react/24/solid";

function TopBar() {
  return (
    <div className="h-12 pl-40 fixed bg-gradient-to-r from-green-300 to-yellow-400 w-full flex items-center justify-between pr-5">
      <div className="flex text-white px-5 items-center">
        <EyeIcon className="h-5 w-5 " />
        <input
          type="text"
          placeholder="Seacrh for task..."
          className="bg-transparent border-0 placeholder-gray-50 outline-none focus:ring-0 text-lg "
        />
      </div>
      <div className="flex space-x-5">
        <AtSymbolIcon className="h-7 w-7 text-white" />
        <BellIcon className="h-7 w-7 text-white" />
      </div>
      <div>
        <h3>H.Lambang</h3>
      </div>
    </div>
  );
}

export default TopBar;
