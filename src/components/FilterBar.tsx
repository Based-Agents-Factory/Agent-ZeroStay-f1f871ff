import React, { useState } from 'react';
import { SlidersHorizontal, Wifi, Car, Waves, Mountain, Building2, Home } from 'lucide-react';

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = [
    { id: 'beachfront', name: 'Beachfront', icon: Waves },
    { id: 'mountains', name: 'Mountains', icon: Mountain },
    { id: 'city', name: 'City', icon: Building2 },
    { id: 'countryside', name: 'Countryside', icon: Home },
  ];

  const amenities = [
    { id: 'wifi', name: 'WiFi', icon: Wifi },
    { id: 'parking', name: 'Parking', icon: Car },
    { id: 'pool', name: 'Pool', icon: Waves },
    { id: 'kitchen', name: 'Kitchen', icon: Home },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center space-x-8 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className="flex flex-col items-center space-y-2 min-w-max group"
              >
                <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" />
                <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {category.name}
                </span>
              </button>
            );
          })}
          
          <div className="flex-1" />
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:border-gray-400 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>

        {/* Advanced Filters Modal */}
        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Price range</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Min price
                      </label>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Max price
                      </label>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((amenity) => {
                    const IconComponent = amenity.icon;
                    return (
                      <label key={amenity.id} className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 focus:ring-rose-500" />
                        <IconComponent className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium">{amenity.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setPriceRange([0, 1000]);
                    // Reset other filters
                  }}
                  className="text-sm font-medium text-gray-900 underline"
                >
                  Clear all
                </button>
                <button
                  onClick={() => {
                    onFilterChange({ priceRange });
                    setShowFilters(false);
                  }}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Show results
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}