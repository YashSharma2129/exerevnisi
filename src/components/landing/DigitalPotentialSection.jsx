import React from 'react';

const DigitalPotentialSection = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute left-0 right-0 top-0 border-t border-gray-200"></div>
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="text-center w-full md:w-1/3 mb-6 md:mb-0 px-4 md:px-0 ">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 w-full md:p-0">Elevate Your Digital Potential</h2>
          <p className="text-sm md:text-base text-gray-600">Experience top-tier solutions for your  success</p>
        </div>
        <div className="text-center w-full md:w-1/3 mb-6 md:mb-0 px-4">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Unmatched Speed</h2>
          <p className="text-sm md:text-base text-gray-600">Harness the fastest solutions in the industry</p>
        </div>
        <div className="text-center w-full md:w-1/3 px-4">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Customer Favorites</h2>
          <p className="text-sm md:text-base text-gray-600">Cherished by users everywhere</p>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 border-b border-gray-200"></div>
    </div>
  );
};

export default DigitalPotentialSection;