import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        

        <Link to="/" className="flex items-center space-x-2 text-2xl">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-indigo-400">GameZone</span>
        </Link>


        <ul className="hidden md:flex space-x-6 text-2xl">
          <li>
            <Link to="/" className=" text-2xl hover:text-indigo-400">Home</Link>
          </li>
          <li>
            <Link to="/games" className="text-2xl hover:text-indigo-400">Games</Link>
          </li>
          <li>
            <Link to="/about" className="text-2xl hover:text-indigo-400">About</Link>
          </li>
        </ul>

     
        <div className="md:hidden">
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
