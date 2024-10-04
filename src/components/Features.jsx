import React from 'react';
import Map from './Map'
// Import your image assets here
import mongodb from './assets/mongodb.png';
import zoho from './assets/zoho.png';
import startupindia from './assets/startupindia.png';
import startupmission from './assets/startupmission.png';
import nasscom from './assets/nasscon.png';
import microsoft from './assets/microsoft.png';

const Features = () => {
  const supportedBrands = [
    mongodb,
    zoho,
    startupindia,
    startupmission,
    nasscom,
    microsoft,
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Top Section */}
      <div className="flex flex-col w-full max-w-6xl px-6 mb-12">
        {/* Supported Brands Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Supported Brands</h2>
        </div>

        {/* Supported Brands Images Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {supportedBrands.map((brand, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg flex items-center justify-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="max-w-full h-24 object-contain p-4 group-hover:scale-105 transform transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between w-full max-w-6xl px-6">
        {/* Map Section */}
        <div className="w-1/2 pr-4">
          {/* <img
            src="/map.png"
            alt="Map"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          /> */}
          <Map />
        </div>

        {/* Paragraph Section */}
        <div className="w-1/2 pl-4">
          <h2 className="text-3xl font-bold mb-4">Our Reach</h2>
          <p className="text-lg">
            We are present in numerous locations globally, providing exceptional
            services across various regions. Our partnerships with local and
            global brands enable us to deliver the best experience to our
            customers. services across various regions. Our partnerships with local and
            global brands enable us to deliver the best experience to our
            customers. services across various regions. Our partnerships with local and
            global brands enable us to deliver the best experience to our
            customers. services across various regions. Our partnerships with local and
            global brands enable us to deliver the best experience to our
            customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
