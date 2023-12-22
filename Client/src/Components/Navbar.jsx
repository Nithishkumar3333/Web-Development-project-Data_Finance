import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex  justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Semi Colon.</h1>
      <ul className="hidden md:flex">
        <Link to="/" className="home">
          <li className="p-4">Home</li>
        </Link>

        <Link to="/Company">
          <li className="p-4">Career</li>
        </Link>

        <Link to="/Resources">
          <li className="p-4">Resources</li>
        </Link>

        <Link to="/About">
          <li className="p-4">About</li>
        </Link>

        <Link to="/Contact">
          <li className="p-4">Contact</li>
        </Link>
      </ul>
      <div onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 ease-in-out duration-500  bg-[#000300]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Semi Colon.
        </h1>

        <ul className=" p-4">
          <Link to="/" className="home">
            <li className="p-4 border-b border-gray-600">Home</li>
          </Link>

          <Link to="/Company" className="home">
            <li className="p-4 border-b border-gray-600">Company</li>
          </Link>

          <Link to="/Resources" className="home">
            <li className="p-4 border-b border-gray-600">Resources</li>
          </Link>

          <Link to="/About" className="home">
            <li className="p-4 border-b border-gray-600">About</li>
          </Link>

          <Link to="/Contact" className="home">
            <li className="p-4 border-b border-gray-600">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
