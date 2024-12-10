import React, { useState } from "react";
import { Link } from "react-router-dom";

// Imagesl 
import call from "../assets/fi-rr-phone-call.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-sm relative mt-5 md:mt-3 h-20 md:h-20 ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold ">
          <Link to="/" className="relative">
       
            <span className="bg-[#39DB4A] text-white p-1 px-2 rounded-md font-sans">
              H
            </span>
            exham Thyme
            <p className="font-semibold text-[#27b535] mt-1 md:mt-0 text-[16px] absolute md:top-6 top-4 right-2">The Tasty House</p>
          </Link>
        </div>

     

        {/* Navbar Links - Mobile Slide-In Menu */}
        <div
          className={`fixed top-0 left-0 h-full  bg-white  transform ${
            isOpen ? "translate-x-0 w-80" : "-translate-x-full"
          } lg:relative lg:translate-x-0 lg:flex lg:items-center transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            className="absolute top-4 right-0 text-[#39DB4A] lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-8 h-8" // Increased size
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-16 lg:mt-0 text-gray-700">
            <li className="px-4 py-2">
              <Link
                to="/"
                className="hover:text-[#39DB4A] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/menu"
                className="hover:text-[#39DB4A] transition-colors duration-300"
              >
                Menu & Pricing
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/opening"
                className="hover:text-[#39DB4A] transition-colors duration-300"
              >
                Opening hours
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/about"
                className="hover:text-[#39DB4A] transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
           
           
            <div className="border  md:hidden mt-3  flex justify-center gap-3 items-center rounded-full bg-[#39DB4A]  p-2 md:p-3 hover:bg-[#97eda0] text-white font-bold text-[20px] cursor-pointer px-4 md:px-8">
             <Link to={'/contact'} className="flex items-center gap-3">
             <img src={call} alt="call" className="h-6" />
             <h1>Contact</h1>
             </Link>
        </div>
          </ul>
        </div>

        {/* Contact Button */}
        <div >
          <Link to={'/contact' }  className="border hidden md:flex justify-center gap-3 items-center rounded-full bg-[#39DB4A]  p-2 md:p-3 hover:bg-[#97eda0] text-white font-bold text-[20px] cursor-pointer px-4 md:px-8">
          <img src={call} alt="call" className="h-6" />
          <h1>Contact</h1>
          </Link>
        </div>
           {/* Hamburger Menu Button */}
           <button
          className="text-[#39DB4A] lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8" // Increased size
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay for Closing Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
