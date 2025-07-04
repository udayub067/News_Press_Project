import React from 'react'
import { FiSearch } from 'react-icons/fi';

const Landing = () => {
  return (
    <div className=" h-[100vh] w-full flex flex-col">
      <div className=" h-[70px] w-full flex justify-between ">
        <div className=" w-[30%] h-full flex items-center justify-center">
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
        <div className=" w-[30%] h-full flex items-center justify-center ">
          <div className="w-[90%] h-[60%]  rounded-2xl flex items-center justify-start ps-3 gap-2 ">
            <div className='text-[23px]'>
              <FiSearch />
            </div>
            <input
              type="text"
              className="w-[300px] h-[70%] rounded-xl  border-solid border-2 border-black "
            />
            <button className="text-[18px] bg-gray-400 w-[80px] h-[30px] hover:scale-105 transition-transform duration-300 rounded-xl text-black font-bold">
              Search
            </button>
          </div>
        </div>
        <div className=" w-[40%] h-full flex items-center justify-center">
          <ul className="h-full w-[80%] flex items-center justify-around text-[22px] font-semibold">
            <li className="hover:text-indigo-600 hover:scale-105 transition-transform duration-300">
              Home
            </li>
            <li className="hover:text-indigo-600 hover:scale-105 transition-transform duration-300">
              About
            </li>
            <li className="hover:text-indigo-600 hover:scale-105 transition-transform duration-300">
              Service
            </li>
            <li className="hover:text-indigo-600 hover:scale-105 transition-transform duration-300">
              Contact
            </li>
          </ul>
          <button className="text-[18px] bg-gradient-to-r from-teal-200 via-emerald-300 to-green-400 w-[90px] h-[40px] rounded-xl text-black font-bold shadow-md hover:scale-105 transition-transform duration-300">
            Log In
          </button>
        </div>
      </div>

      <div className="bg-slate-900 w-full h-[90.8%]"></div>
    </div>
  );
}

export default Landing