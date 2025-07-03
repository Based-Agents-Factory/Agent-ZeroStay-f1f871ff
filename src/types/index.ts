export interface Property {
  id: string;
  title: string;
  location: string;
  images: string[];
  price: number;
  rating: number;
  reviewCount: number;
  hostName: string;
  hostImage: string;
  amenities: string[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  isSuperhost: boolean;
  instantBook: boolean;
}

export interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  priceRange: [number, number];
  propertyTypes: string[];
  amenities: string[];
}