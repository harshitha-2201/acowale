import React from 'react';
import dash from './assets/dash.png'; // Ensure the path is correct
import web from './assets/web.jpg';
import zap from './assets/zap.png';
import cloud from './assets/cloud.jpeg';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Products = () => {
  const navigate = useNavigate();

  const handleLearnMore = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 max-w-7xl w-full">
        
        {/* Left-side large card (Zap) */}
        <div className="lg:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
          <img src={zap} alt="Zap Ad" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Zap</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

            </p>
            <button 
              onClick={() => handleLearnMore('/zap-details')} 
              className="text-blue-500 hover:text-blue-700 mt-2 underline"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:col-span-2 space-y-8">
          {/* Right-side large horizontal card (Dash) */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <img src={dash} alt="Dash App" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">Dash</h2>
              <p className="text-gray-600">
                Discover new mobile applications for productivity and entertainment.
                It was popularised in the 1960s with the release of Letraset sheets.
              </p>
              <button 
                onClick={() => handleLearnMore('/dash-details')} 
                className="text-blue-500 hover:text-blue-700 mt-2 underline"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Bottom two cards in a 2x1 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Web Dev card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
              <img src={web} alt="Web Development" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">Web Dev</h2>
                <p className="text-gray-600">
                  Explore web development technologies and build responsive websites.
                  It was popularised in the 1960s with the release of Letraset sheets.
                </p>
                <button 
                  onClick={() => handleLearnMore('/webdev-details')} 
                  className="text-blue-500 hover:text-blue-700 mt-2 underline"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Cloud card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
              <img src={cloud} alt="Cloud Computing" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">Cloud</h2>
                <p className="text-gray-600">
                  Dive into cloud computing solutions for scalable and flexible applications.
                  It was popularised in the 1960s with the release of Letraset sheets.
                </p>
                <button 
                  onClick={() => handleLearnMore('/cloud-details')} 
                  className="text-blue-500 hover:text-blue-700 mt-2 underline"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
