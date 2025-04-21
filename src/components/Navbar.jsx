import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Heart, Gamepad, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <nav className="bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Gamepad className="w-6 h-6 text-blue-500" />
            <span className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide">GameZone</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={handleSearch}
                className="w-64 px-4 py-1 pr-10 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Desktop  */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              to="/"
              className={`text-base lg:text-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 ${
                location.pathname === '/'
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
           
              <span>Home</span>
            </Link>
            
            <Link
              to="/saved-games"
              className={`text-base lg:text-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 ${
                location.pathname === '/saved-games'
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
         
              <span>Favourite</span>
            </Link>

            <Link
              to="/recommendations"
              className={`text-base lg:text-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 ${
                location.pathname === '/recommendations'
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
     
              <span>Recommendations</span>
            </Link>
          </div>







          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>









        {/* Mobile */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Search */}
            <form onSubmit={handleSubmit} className="mb-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  value={search}
                  onChange={handleSearch}
                  className="w-full px-4 py-2 pr-10 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

            <Link
              to="/"
              onClick={closeMenu}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
         
              <span>Home</span>
            </Link>

            <Link
              to="/saved-games"
              onClick={closeMenu}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                location.pathname === '/saved-games'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
     
              <span>Favourite</span>
            </Link>

            <Link
              to="/recommendations"
              onClick={closeMenu}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                location.pathname === '/recommendations'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
      
              <span>Recommendations</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
