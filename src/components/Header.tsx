import React, { useState } from 'react';
import { Search, Menu, User, Globe } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-rose-500">airbnb</h1>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <div className="flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-6 py-3 rounded-l-full focus:outline-none text-sm"
                  />
                  <div className="px-4 py-3 border-l border-gray-300">
                    <input
                      type="text"
                      placeholder="Check in"
                      className="w-24 focus:outline-none text-sm text-gray-600"
                    />
                  </div>
                  <div className="px-4 py-3 border-l border-gray-300">
                    <input
                      type="text"
                      placeholder="Check out"
                      className="w-24 focus:outline-none text-sm text-gray-600"
                    />
                  </div>
                  <div className="px-4 py-3 border-l border-gray-300">
                    <input
                      type="text"
                      placeholder="Guests"
                      className="w-20 focus:outline-none text-sm text-gray-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-rose-500 text-white p-2 rounded-full mr-2 hover:bg-rose-600 transition-colors"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Search Icon - Mobile */}
          <div className="md:hidden">
            <button className="p-2">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
              Airbnb your home
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Globe className="w-4 h-4 text-gray-600" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-md transition-shadow relative"
            >
              <Menu className="w-4 h-4 text-gray-600" />
              <User className="w-6 h-6 text-gray-600" />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-16 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  Sign up
                </a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  Log in
                </a>
                <hr className="my-2" />
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  Airbnb your home
                </a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  Help Center
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}