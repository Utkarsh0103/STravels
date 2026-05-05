export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  destination: string;
  country: string;
  duration: number; // in days
  price: number;
  originalPrice?: number;
  discount?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  images: string[];
  thumbnail: string;
  category: PackageCategory;
  type: PackageType;
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  highlights: string[];
  maxGroupSize: number;
  minAge: number;
  availableDates: Date[];
  featured: boolean;
  popular: boolean;
  tags: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation?: string;
}

export enum PackageCategory {
  ADVENTURE = 'Adventure',
  BEACH = 'Beach',
  CULTURAL = 'Cultural',
  FAMILY = 'Family',
  HONEYMOON = 'Honeymoon',
  LUXURY = 'Luxury',
  NATURE = 'Nature',
  RELIGIOUS = 'Religious',
  WILDLIFE = 'Wildlife'
}

export enum PackageType {
  DOMESTIC = 'Domestic',
  INTERNATIONAL = 'International'
}

export interface SearchFilters {
  destination?: string;
  category?: PackageCategory;
  type?: PackageType;
  minPrice?: number;
  maxPrice?: number;
  duration?: number;
  startDate?: Date;
  endDate?: Date;
  rating?: number;
  sortBy?: 'price' | 'rating' | 'duration' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}
