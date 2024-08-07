"use client";

import { useAppDispatch, useAppSelector } from "@/redux/redux";
import { setIsSidebarCollapsed } from "@/redux/state";
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, Settings, Settings2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinksProps {
  href: string;
  icon: LucideIcon
  label: string;
  isCollapsed: boolean;
}

const SidebarLinks = ({
  href,
  icon: Icon,
  label,
  isCollapsed
}: SidebarLinksProps) => {
  const pathname = usePathname()
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard")

  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4": "justify-start px-8 py-4  "} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white": ""}`}>
      <Icon className="w-6 h-6 !text-gray-700" />
      <span className={`${isCollapsed ? "hidden": "block"} font-medium text-gray-700`}>
        {label}
      </span>
      </div>
    </Link>
  )
}


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
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5": "px-8"} `}>
        <div>
          <img  src="/logo.png" className="w-38 h-18" alt="logo" />
        </div>
        <h3 className={`font-semibold text-2xl ${isSidebarCollapsed ? "hidden": "block"}`}>Distinguish</h3>

        <button
          className="md:hidden px-3 py-2 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* links  */}

      <div className="flex-grow mt-8">

      <SidebarLinks href="/dashboard" icon={Layout} label="Dashboard" isCollapsed={isSidebarCollapsed} />
      <SidebarLinks href="/inventory" icon={Archive} label="Inventory" isCollapsed={isSidebarCollapsed} />
      <SidebarLinks href="/products" icon={Clipboard} label="Products" isCollapsed={isSidebarCollapsed} />
      <SidebarLinks href="/users" icon={User} label="Users" isCollapsed={isSidebarCollapsed} />
      <SidebarLinks href="/settings" icon={Settings2} label="Settings" isCollapsed={isSidebarCollapsed} />
      <SidebarLinks href="/expenses" icon={CircleDollarSign} label="Expenses" isCollapsed={isSidebarCollapsed} />
      </div>

      {/* footer  */}
      <div className={`${isSidebarCollapsed ? "hidden": "block"}`}>
        <p className="text-center text-base text-gray-500 mb-8">&copy; 2024 Distinguish</p>
      </div>
    </div>
  );
};

export default Sidebar;
