/** @format */

import React from "react";
import {
  UserGroupIcon,
  BeakerIcon,
  ChatBubbleLeftEllipsisIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CogIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

function SideBar() {
  return (
    <div className="fixed inset-y-0 left-0 bg-white w-40">
      <h1 className="flex items-center justify-center text-xl h-12 bg-green-500 text-white font-bold">
        OS
      </h1>
      <ul className="flex flex-col text-lg h-full">
        <li className="flex justify-center items-center flex-col py-5 text-gray-400">
          <UserGroupIcon className=" w-7 h-7 " /> Teams
        </li>
        <li className="flex justify-center items-center flex-col py-5 text-gray-500">
          <ChatBubbleLeftEllipsisIcon className="w-7 h-7" />
          Chat
        </li>
        <li className="flex justify-center items-center flex-col py-5 border-l-2 border-green-400 text-green-500 text-lg font-bold">
          <CalendarDaysIcon className="w-7 h-7 text-green-500" /> Scedule
        </li>
        <li className="flex justify-center items-center flex-col py-5 text-gray-500">
          <ChartBarIcon className="w-7 h-7" /> Report
        </li>
        <li className="flex justify-center items-center flex-col py-5 text-gray-500 mt-auto mb-14">
          <Cog8ToothIcon className="w-7 h-7" /> Setting
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
