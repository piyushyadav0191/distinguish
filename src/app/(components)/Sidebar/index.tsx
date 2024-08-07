"use client";

import { useAppDispatch, useAppSelector } from "@/redux/redux";
import { setIsSidebarCollapsed } from "@/redux/state";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  }

  const sidebarClassnames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16": "w-72 md:w-64"} bg-white transition-all duration-300 ease-in-out overflow-hidden shadow-md z-40 h-full border-r border-gray-200`;


  return (
    <div className={sidebarClassnames}>
      {/* top logo  */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>Logo</div>
        <h3 className="font-semibold text-2xl">Distinguish</h3>

        <button
          className="md:hidden px-3 py-2 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* links  */}

      <div className="flex-grow mt-8">{/* links  */}</div>

      {/* footer  */}
      <div>
        <p className="text-center text-xs text-gray-500">2024 Distinguish</p>
      </div>
    </div>
  );
};

export default Sidebar;
