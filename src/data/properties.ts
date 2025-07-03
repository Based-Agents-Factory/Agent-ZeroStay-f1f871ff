import { Property } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Stunning Oceanfront Villa with Private Beach',
    location: 'Malibu, California',
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 450,
    rating: 4.9,
    reviewCount: 127,
    hostName: 'Sarah',
    hostImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Parking', 'Beach access'],
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: 'Villa',
    isSuperhost: true,
    instantBook: true
  },
  {
    id: '2',
    title: 'Modern Downtown Loft with City Views',
    location: 'New York, New York',
    images: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 275,
    rating: 4.8,
    reviewCount: 89,
    hostName: 'Michael',
    hostImage: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
    amenities: ['WiFi', 'Kitchen', 'Gym', 'Elevator'],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'Loft',
    isSuperhost: false,
    instantBook: true
  },
  {
    id: '3',
    title: 'Cozy Mountain Cabin Retreat',
    location: 'Aspen, Colorado',
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 320,
    rating: 4.7,
    reviewCount: 156,
    hostName: 'Emily',
    hostImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Hot tub', 'Ski access'],
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'Cabin',
    isSuperhost: true,
    instantBook: false
  },
  {
    id: '4',
    title: 'Luxury Desert Resort with Pool',
    location: 'Scottsdale, Arizona',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 380,
    rating: 4.9,
    reviewCount: 203,
    hostName: 'David',
    hostImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Parking', 'Golf course'],
    maxGuests: 10,
    bedrooms: 5,
    bathrooms: 4,
    propertyType: 'Resort',
    isSuperhost: true,
    instantBook: true
  },
  {
    id: '5',
    title: 'Historic Brownstone in Heart of City',
    location: 'Boston, Massachusetts',
    images: [
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 195,
    rating: 4.6,
    reviewCount: 78,
    hostName: 'Jessica',
    hostImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
    amenities: ['WiFi', 'Kitchen', 'Parking', 'Historic charm'],
    maxGuests: 5,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'Townhouse',
    isSuperhost: false,
    instantBook: false
  },
  {
    id: '6',
    title: 'Waterfront Cottage with Kayaks',
    location: 'Lake Tahoe, California',
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    price: 290,
    rating: 4.8,
    reviewCount: 134,
    hostName: 'Robert',
    hostImage: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=100',
    amenities: ['WiFi', 'Kitchen', 'Kayaks', 'Deck', 'Lake access'],
    maxGuests: 6,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: 'Cottage',
    isSuperhost: true,
    instantBook: true
  }
];