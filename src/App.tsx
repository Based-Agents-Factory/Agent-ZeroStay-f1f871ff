import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { PropertyGrid } from './components/PropertyGrid';
import { Footer } from './components/Footer';
import { properties } from './data/properties';
import { Property } from './types';

function App() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setLoading(true);
    setSearchQuery(query);
    
    // Simulate API call delay
    setTimeout(() => {
      if (query.trim() === '') {
        setFilteredProperties(properties);
      } else {
        const filtered = properties.filter(property =>
          property.location.toLowerCase().includes(query.toLowerCase()) ||
          property.title.toLowerCase().includes(query.toLowerCase()) ||
          property.propertyType.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProperties(filtered);
      }
      setLoading(false);
    }, 800);
  };

  const handleFilterChange = (filters: any) => {
    setLoading(true);
    
    // Simulate filter processing
    setTimeout(() => {
      let filtered = [...properties];
      
      if (filters.priceRange) {
        filtered = filtered.filter(property => 
          property.price >= filters.priceRange[0] && 
          property.price <= filters.priceRange[1]
        );
      }
      
      // Apply search query if exists
      if (searchQuery.trim() !== '') {
        filtered = filtered.filter(property =>
          property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.propertyType.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setFilteredProperties(filtered);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={handleSearch} />
      
      {searchQuery === '' && <Hero />}
      
      <FilterBar onFilterChange={handleFilterChange} />
      
      <main>
        <PropertyGrid properties={filteredProperties} loading={loading} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;