import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { CiHome, CiBellOn } from "react-icons/ci";
import {
  PiChartPieSlice,
  PiWalletLight,
  PiListChecks,
  PiBasket,
  PiPlusSquareLight,
  PiHandCoins,
} from "react-icons/pi";
import logo from "../assets/logo.jpg";
import profile from "../assets/Profile.jpg";

const NavHeader = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="flex items-center justify-between px-4 lg:px-10 py-4">
        {/* Left Section: Logo & Search */}
        <div className="flex items-center space-x-4 w-full lg:w-1/3">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-md" />
          {/* Search Field (Visible on Larger Screens) */}
          <div className="hidden lg:flex h-12 relative flex-1">
            <FaSearch className="text-gray-500 w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full min-w-[200px] h-full pl-10 pr-4 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Middle Section: Navigation Items */}
        <div className="hidden lg:flex items-center gap-5 w-full justify-end">
          {[
            { icon: CiHome, label: "Home" },
            { icon: PiChartPieSlice, label: "Dashboard" },
            { icon: PiWalletLight, label: "Wallet" },
            { icon: PiListChecks, label: "Plan a Trip" },
            { icon: PiHandCoins, label: "Commission for life" },
          ].map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center text-gray-600 hover:text-blue-500 group"
            >
              <item.icon
                size={24}
                className="text-iconGrey group-hover:text-blue-500 transition duration-200"
              />
              <span className="text-greyText text-sm font-[500] mt-1">
                {item.label}
              </span>
            </button>
          ))}
        </div>
        {/* Divider */}
        <div className="hidden lg:block mx-8 h-10 w-px bg-gray-300"></div>

        {/* Right Section: Subscribe, Icons, Avatar */}
        <div className="hidden lg:flex items-center gap-5 w-full lg:w-1/3 justify-end">
          {/* Subscribe Button */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Subscribe
          </button>
          {/* Icons with Text */}
          {[
            { icon: CiBellOn, label: "Notifications" },
            { icon: PiBasket, label: "Carts" },
            { icon: PiPlusSquareLight, label: "Create" },
          ].map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center text-iconGrey hover:text-blue-500 group"
            >
              <item.icon
                size={24}
                className="group-hover:text-blue-500 transition duration-200"
              />
              <span className="text-greyText text-sm font-[500] mt-1">
                {item.label}
              </span>
            </button>
          ))}
          {/* Avatar & Dropdown */}
          <div className="relative flex items-center w-[52px] space-x-2">
            <img
              src={profile}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <button className="text-gray-600 hover:text-blue-500">
              <FaChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Mobile Section: Search & Menu Icons */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            className="text-gray-600 hover:text-blue-500"
            onClick={() => setSearchOpen(true)}
          >
            <FaSearch size={20} />
          </button>
          <button
            className="text-gray-600 hover:text-blue-500"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars size={20} />
          </button>
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="w-64 bg-white h-full p-4 shadow-md">
            <button
              className="text-gray-600 hover:text-blue-500"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <div className="mt-6 flex flex-col space-y-4">
              {[
                { icon: CiHome, label: "Home" },
                { icon: PiChartPieSlice, label: "Dashboard" },
                { icon: PiWalletLight, label: "Wallet" },
                { icon: PiListChecks, label: "Plan a Trip" },
                { icon: PiHandCoins, label: "Commission for life" },
              ].map((item, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-500"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
              <hr className="my-4" />
              <button className="px-4 py-2 bg-mainBlue text-white rounded-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-3/4 max-w-md p-6 rounded-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-blue-500"
              onClick={() => setSearchOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <div className="flex items-center relative">
              <FaSearch className="text-gray-500 w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavHeader;
