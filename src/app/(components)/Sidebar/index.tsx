"use client";

import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* top logo  */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>Logo</div>
        <h3 className="font-semibold text-2xl">Distinguish</h3>
     
      <button
        className="md:hidden px-3 py-2 bg-gray-100 rounded-full hover:bg-blue-100"
        onClick={() => {}}
      >
        <Menu className="w-4 h-4" />
      </button>
      </div>
      {/* links  */}

      <div className="flex-grow mt-8">
        {/* links  */}
      </div>

      {/* footer  */}
      <div>
        <p className="text-center text-xs text-gray-500">2024 Distinguish</p>
      </div>
    </div>
  );
};

export default Sidebar;
