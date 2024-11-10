"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-wrap justify-between items-center w-full py-4 px-6 bg-gray-900">
      <h1 className="text-xl sm:text-2xl mt-1 ml-4 sm:ml-16 text-indigo-500 font-bold">
        Umama Rajpoot
      </h1>
      <nav className="hidden sm:flex mr-4 sm:mr-16 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
        <a href="/" className="text-white text-base sm:text-lg font-bold hover:text-indigo-500">
          Home
        </a>
        <a href="/about" className="text-white text-base sm:text-lg font-bold hover:text-indigo-500">
          About me
        </a>
        <a href="/projects" className="text-white text-base sm:text-lg font-bold hover:text-indigo-500">
          Projects
        </a>
        <a href="/contact" className="text-white text-base sm:text-lg font-bold hover:text-indigo-500">
          Contact
        </a>
      </nav>
      <button
        onClick={toggleMenu}
        className="block sm:hidden text-white text-lg font-bold focus:outline-none"
        aria-label="Toggle Navigation"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full bg-gray-800 text-white flex flex-col items-center py-4 sm:hidden">
          <a href="/" className="text-white text-base font-bold hover:text-indigo-500 mb-2">
            Home
          </a>
          <a href="/about" className="text-white text-base font-bold hover:text-indigo-500 mb-2">
            About me
          </a>
          <a href="/projects" className="text-white text-base font-bold hover:text-indigo-500 mb-2">
            Projects
          </a>
          <a href="/contact" className="text-white text-base font-bold hover:text-indigo-500 mb-2">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
