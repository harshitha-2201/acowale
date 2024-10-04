import React, { useState } from 'react';
import people from './assets/people.png';
import business from './assets/business.png';
import shop from './assets/shop.png';
import delivering from './assets/delivering.png';
import orderingwithphone from './assets/orderwithphone.png';
import Products from './Products';
import Features from './Features';

const Home = () => {
  const [hoveredImage, setHoveredImage] = useState('');

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Tagline */}
        <h1 className="text-4xl font-bold text-center m-12">World's #1 Super Platform</h1>

        {/* Image Gallery */}
        <div className="flex flex-wrap justify-center space-x-4 ">
          {/* Individual Images with Hover Effects */}
          <div
            className="relative w-28 h-20 border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            onMouseEnter={() => setHoveredImage('People')}
            onMouseLeave={() => setHoveredImage('')}
          >
            <img src={people} alt="People" className="w-full h-full object-cover" />
            {hoveredImage === 'People' && (
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-60">
                <span>People</span>
              </div>
            )}
          </div>

          <div
            className="relative w-28 h-20 border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            onMouseEnter={() => setHoveredImage('Business')}
            onMouseLeave={() => setHoveredImage('')}
          >
            <img src={business} alt="Business" className="w-full h-full object-cover" />
            {hoveredImage === 'Business' && (
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-60">
                <span>Business</span>
              </div>
            )}
          </div>

          <div
            className="relative w-28 h-20 border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            onMouseEnter={() => setHoveredImage('Shop')}
            onMouseLeave={() => setHoveredImage('')}
          >
            <img src={shop} alt="Shop" className="w-full h-full object-cover" />
            {hoveredImage === 'Shop' && (
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-60">
                <span>Venders</span>
              </div>
            )}
          </div>
        </div>

        {/* Image Section with Enlarged Hover Effect */}
        <div className="flex items-center justify-center relative space-x-12 mb-16">
          {/* Left Image - Ordering */}
          <div className="relative group">
            <img
              src={orderingwithphone}
              alt="Ordering"
              className="w-[30rem] h-[30rem] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            {/* Left Arrow Indicator */}
            <span className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 text-2xl text-gray-600">&#8594;</span>
          </div>

          {/* Center Text */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-2xl font-semibold">Order with Ease</p>
            <p className="text-2xl font-semibold">For Everything </p>
            <p className="text-2xl font-semibold">For Everywhere</p>
            <p className="text-2xl font-semibold">For Everyone</p>
          </div>

          {/* Right Image - Delivering */}
          <div className="relative group">
            <img
              src={delivering}
              alt="Delivering"
              className="w-[30rem] h-[30rem] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            {/* Right Arrow Indicator */}
            <span className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 text-2xl text-gray-600">&#8592;</span>
          </div>
        </div>

        <Products />
        <Features />
      </div>
    </>
  );
};

export default Home;
