import React, { useState } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="group cursor-pointer">
      {/* Image Carousel */}
      <div className="relative aspect-square mb-3 rounded-xl overflow-hidden bg-gray-100">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Navigation Arrows */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >
              <ChevronLeft className="w-3 h-3 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >
              <ChevronRight className="w-3 h-3 text-gray-800" />
            </button>
          </>
        )}

        {/* Heart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-5 h-5 ${
              isWishlisted 
                ? 'fill-rose-500 text-rose-500' 
                : 'fill-black/20 text-white stroke-2'
            }`}
          />
        </button>

        {/* Image Indicators */}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
            {property.images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {property.isSuperhost && (
            <span className="bg-white text-black text-xs font-medium px-2 py-1 rounded-md shadow-sm">
              SUPERHOST
            </span>
          )}
          {property.instantBook && (
            <span className="bg-white text-black text-xs font-medium px-2 py-1 rounded-md shadow-sm">
              INSTANT BOOK
            </span>
          )}
        </div>
      </div>

      {/* Property Info */}
      <div className="space-y-1">
        {/* Location and Rating */}
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900 truncate">{property.location}</h3>
          <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
            <Star className="w-3 h-3 fill-current text-gray-900" />
            <span className="text-sm text-gray-900">{property.rating}</span>
            <span className="text-sm text-gray-500">({property.reviewCount})</span>
          </div>
        </div>

        {/* Title */}
        <p className="text-gray-500 text-sm line-clamp-2">{property.title}</p>

        {/* Property Details */}
        <p className="text-gray-500 text-sm">
          {property.maxGuests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
        </p>

        {/* Price */}
        <div className="flex items-baseline space-x-1 pt-1">
          <span className="font-semibold text-gray-900">${property.price}</span>
          <span className="text-gray-500 text-sm">night</span>
        </div>
      </div>
    </div>
  );
}