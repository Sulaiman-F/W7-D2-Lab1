import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="flex justify-between items-center bg-sky-600 text-gray-200 p-2 px-5">
        <div className="flex items-center gap-3">
          <p>
            Welcome, <br /> {localStorage.getItem("user")}
          </p>
        </div>
        <ul className="hidden lg:flex  justify-between gap-4">
          <li className="hover:text-white">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/bmi">BMI Calculator</Link>
          </li>
        </ul>
        <div className="text-2xl hidden text-sky-700 lg:block">.</div>
        <div className="hamburger text-3xl lg:hidden" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <FaBars />}
        </div>
        {isOpen && (
          <ul className="absolute top-13 left-0 w-full bg-sky-600 text-gray-200 p-4 gap-4 flex flex-col items-center ">
            <li className="hover:text-white">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/bmi">BMI Calculator</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Nav;
