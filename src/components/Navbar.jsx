import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [search,Setsearch] = useState('')
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const ChangeHandler = (e) => (
    Setsearch(e.target.value)
  );

  return (
    <nav className="bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide">GameZone</span>
          </Link>
          <div className='border-solid border-white'>
          <input type='text'placeholder="Search here" value={search} className='w-[100px] p-2 ' onChange={ChangeHandler}/>
        </div> 
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              to="/"
              className={`text-base lg:text-lg transition-all duration-200 hover:scale-105 ${
                location.pathname === '/'
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/saved-games"
              className={`text-base lg:text-lg transition-all duration-200 hover:scale-105 ${
                location.pathname === '/saved-games'
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Favourite
            </Link>

            <Link
              to="/recommendations"
              className={`text-base lg:text-lg transition-all duration-200 hover:scale-105 ${
                location.pathname === '/recommendations'
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Recommendations
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Home
            </Link>

            <Link
              to="/saved-games"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                location.pathname === '/saved-games'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Favourite
            </Link>

            <Link
              to="/recommendations"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                location.pathname === '/recommendations'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Recommendations
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
