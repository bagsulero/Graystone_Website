import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`sticky top-0 text-white py-4 px-6 flex justify-between items-center z-50 transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'bg-red-700/95 backdrop-blur-md shadow-lg' 
        : 'bg-red-600 shadow-md'
    }`}>
      {/* Left side: Logo and Name */}
      <div className="flex items-center gap-3 group">
        <div className="relative overflow-hidden rounded-full">
          <img 
            src="/GIP LOGO.jpg" 
            alt="Logo" 
            className="h-15 w-15 rounded-full transform transition-all duration-300 group-hover:scale-110" 
          />
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className='flex flex-col transform transition-all duration-300 group-hover:translate-x-1'>
          <span className="text-xl font-bold text-white">
            Graystone Institute of the Philippines
          </span>
          <span className="text-sm opacity-90 transition-opacity duration-300 group-hover:opacity-100">
            (Training and Assessment Center), INC.
          </span>
        </div>
      </div>

      {/* Right side: Navigation */}
      <nav className="hidden md:flex gap-8">
        <Link 
          to="/" 
          className="relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 group"
        >
          <span className="relative z-10">Home</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
        </Link>
        <Link 
          to="/accreditations" 
          className="relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 group"
        >
          <span className="relative z-10">Accreditations</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
        </Link>
        <Link 
          to="/announcements" 
          className="relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 group"
        >
          <span className="relative z-10">Announcements</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center p-2 rounded-lg transition-all duration-300 hover:bg-white/10 active:scale-95"
        onClick={toggleMenu}
      >
        <div className="relative w-6 h-6">
          <span 
            className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
            }`}
          />
          <span 
            className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 translate-y-2.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
              isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-5'
            }`}
          />
        </div>
      </button>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-red-700/95 backdrop-blur-md text-white overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-1 py-6">
          <Link 
            to="/" 
            className="block w-full text-center py-3 px-6 transition-all duration-300 hover:bg-white/10 transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/accreditations" 
            className="block w-full text-center py-3 px-6 transition-all duration-300 hover:bg-white/10 transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Accreditations
          </Link>
          <Link 
            to="/announcements" 
            className="block w-full text-center py-3 px-6 transition-all duration-300 hover:bg-white/10 transform hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Announcements
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;