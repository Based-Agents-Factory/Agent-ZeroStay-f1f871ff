import React from 'react';

export function Hero() {
  return (
    <div className="relative h-96 bg-gradient-to-r from-rose-500 to-pink-600 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Not sure where to go?
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90">
            Perfect.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg">
            I'm flexible
          </button>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-20 h-20 bg-white rounded-full"></div>
      </div>
    </div>
  );
}