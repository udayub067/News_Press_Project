import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoReorderThree } from "react-icons/io5";

const navLinks = ["Home", "About", "Service", "Contact"];

const Landing = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Header */}
      <header className="h-[70px] w-full flex justify-between items-center px-4">
        {/* Logo */}
        <div className="w-[30%] flex items-center justify-start">
          <svg
            width="280"
            height="60"
            viewBox="0 0 300 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="50"
              fontFamily="Segoe UI, sans-serif"
              fontSize="48"
              fontWeight="bold"
              fill="#4F46E5"
              className="hover:scale-105 transition-transform duration-500"
            >
              Express News
            </text>
          </svg>
        </div>

        {/* Mobile Menu Icon */}
        <div className="w-[30%] flex justify-end items-center custom:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-[28px] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <IoReorderThree />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="w-[70%] hidden custom:flex items-center justify-end gap-6">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-white px-3 py-1 border border-black rounded-xl">
            <FiSearch className="text-[20px]" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-[200px]"
            />
            <button className="text-sm bg-gray-400 px-3 py-1 rounded-lg hover:scale-105 transition-transform duration-300">
              Search
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex gap-6 text-[18px] font-semibold">
            {navLinks.map((link) => (
              <li
                key={link}
                className="hover:text-indigo-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <button className="text-sm bg-gradient-to-r from-teal-200 via-emerald-300 to-green-400 px-4 py-2 rounded-xl font-bold shadow-md hover:scale-105 transition-transform duration-300">
            Log In
          </button>
        </nav>
      </header>

      {/* Mobile Nav Dropdown */}
      {open && (
        <div className="absolute top-[70px] w-full z-50 bg-white/95 backdrop-blur-md flex flex-col items-center py-4 gap-4 custom:hidden shadow-lg">
          <ul className="flex flex-col gap-4 text-[20px] font-semibold">
            {navLinks.map((link) => (
              <li
                key={link}
                className="hover:text-indigo-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
          <button className="text-sm bg-gradient-to-r from-teal-200 via-emerald-300 to-green-400 px-4 py-2 rounded-xl font-bold shadow-md hover:scale-105 transition-transform duration-300">
            Log In
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="bg-white w-full flex-grow"></main>
    </div>
  );
};

export default Landing;
