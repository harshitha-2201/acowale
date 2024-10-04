import React, { useState } from 'react';

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-3xl font-extrabold text-blue-600 ">acowale</a>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center font-semibold ">
            <a href="/" className="text-black-800 hover:text-blue-600 hover:font-serif">Home</a>
            <a href="/products" className="text-black-800 hover:text-blue-600 hover:font-serif ">Products</a>
            <a href="/features" className="text-black-800  hover:text-blue-600 hover:font-serif">Features</a>
            <a href="/contact" className="text-black-800 hover:text-blue-600 hover:font-serif">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden font-semibold text-center">
            <a href="/" className="block text-gray-800 hover:bg-indigo-100 px-4 py-2">Home</a>
            <a href="/products" className="block text-gray-800 hover:bg-indigo-100 px-4 py-2">Products</a>
            <a href="/features" className="block text-gray-800 hover:bg-indigo-100 px-4 py-2">Features</a>
            <a href="/footer" className="block text-gray-800 hover:bg-indigo-100 px-4 py-2">Contact Us</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
