import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TravelPackage, PackageCategory, PackageType, SearchFilters } from '../../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private mockPackages: TravelPackage[] = [
    {
      id: '1',
      title: 'Maldives Paradise - 7 Days Beach Retreat',
      description: 'Experience the ultimate tropical paradise with crystal-clear waters, pristine beaches, and luxury overwater villas. This all-inclusive package offers snorkeling, diving, spa treatments, and gourmet dining.',
      shortDescription: 'Luxury beach resort with water sports and spa',
      destination: 'Malé',
      country: 'Maldives',
      duration: 7,
      price: 2499,
      originalPrice: 3499,
      discount: 29,
      currency: 'USD',
      rating: 4.9,
      reviewCount: 342,
      images: [
        'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800',
        'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=800'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400',
      category: PackageCategory.BEACH,
      type: PackageType.INTERNATIONAL,
      included: [
        'Round-trip flights',
        'Luxury overwater villa accommodation',
        'All meals and drinks',
        'Water sports activities',
        'Spa treatment (2 sessions)',
        'Airport transfers',
        'Travel insurance'
      ],
      excluded: [
        'Personal expenses',
        'Additional spa treatments',
        'Scuba diving certification',
        'Tips and gratuities'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Check-in',
          description: 'Arrive at Malé International Airport and transfer to resort via speedboat',
          activities: ['Airport pickup', 'Resort check-in', 'Welcome dinner'],
          meals: ['Dinner'],
          accommodation: 'Overwater Villa'
        },
        {
          day: 2,
          title: 'Beach & Water Sports',
          description: 'Enjoy a full day of beach activities and water sports',
          activities: ['Snorkeling', 'Kayaking', 'Beach volleyball', 'Sunset cruise'],
          meals: ['Breakfast', 'Lunch', 'Dinner']
        }
      ],
      highlights: [
        'Overwater villa with glass floor',
        'Private beach access',
        'World-class diving spots',
        'Michelin-star dining',
        'Romantic sunset cruises'
      ],
      maxGroupSize: 2,
      minAge: 18,
      availableDates: [
        new Date('2024-06-15'),
        new Date('2024-07-01'),
        new Date('2024-08-10')
      ],
      featured: true,
      popular: true,
      tags: ['Luxury', 'Romantic', 'Beach', 'Honeymoon']
    }
  ];

  constructor() {
    this.initializeMorePackages();
  }

  private initializeMorePackages(): void {
    // Add more diverse packages
    this.mockPackages.push(
      {
        id: '2',
        title: 'Swiss Alps Adventure - 10 Days',
        description: 'Explore the majestic Swiss Alps with hiking, skiing, and breathtaking mountain views',
        shortDescription: 'Mountain adventure with skiing and hiking',
        destination: 'Zermatt',
        country: 'Switzerland',
        duration: 10,
        price: 3299,
        currency: 'USD',
        rating: 4.8,
        reviewCount: 218,
        images: [
          'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
        ],
        thumbnail: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400',
        category: PackageCategory.ADVENTURE,
        type: PackageType.INTERNATIONAL,
        included: ['Flights', 'Hotels', 'Ski passes', 'Guide', 'Meals'],
        excluded: ['Personal expenses', 'Extra activities'],
        itinerary: [],
        highlights: ['Matterhorn views', 'Glacier skiing', 'Mountain trails'],
        maxGroupSize: 12,
        minAge: 16,
        availableDates: [new Date('2024-12-01')],
        featured: false,
        popular: true,
        tags: ['Adventure', 'Mountain', 'Skiing']
      },
      {
        id: '3',
        title: 'Bali Cultural Experience - 6 Days',
        description: 'Immerse yourself in Balinese culture with temple visits, traditional dance, and cuisine',
        shortDescription: 'Cultural tour with temples and traditions',
        destination: 'Ubud',
        country: 'Indonesia',
        duration: 6,
        price: 1299,
        currency: 'USD',
        rating: 4.7,
        reviewCount: 456,
        images: [
          'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
          'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800'
        ],
        thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400',
        category: PackageCategory.CULTURAL,
        type: PackageType.INTERNATIONAL,
        included: ['Accommodation', 'Temple tours', 'Cooking class', 'Cultural shows'],
        excluded: ['Flights', 'Personal shopping'],
        itinerary: [],
        highlights: ['Tanah Lot Temple', 'Rice terraces', 'Traditional dance'],
        maxGroupSize: 15,
        minAge: 10,
        availableDates: [new Date('2024-06-20'), new Date('2024-07-15')],
        featured: true,
        popular: false,
        tags: ['Cultural', 'Temple', 'Traditional']
      }
    );
  }

  getAllPackages(): Observable<TravelPackage[]> {
    return of(this.mockPackages).pipe(delay(500));
  }

  getPackageById(id: string): Observable<TravelPackage | undefined> {
    const pkg = this.mockPackages.find(p => p.id === id);
    return of(pkg).pipe(delay(300));
  }

  getFeaturedPackages(): Observable<TravelPackage[]> {
    const featured = this.mockPackages.filter(p => p.featured);
    return of(featured).pipe(delay(500));
  }

  getPopularPackages(): Observable<TravelPackage[]> {
    const popular = this.mockPackages.filter(p => p.popular);
    return of(popular).pipe(delay(500));
  }

  searchPackages(filters: SearchFilters): Observable<TravelPackage[]> {
    let results = [...this.mockPackages];

    if (filters.destination) {
      results = results.filter(p =>
        p.destination.toLowerCase().includes(filters.destination!.toLowerCase()) ||
        p.country.toLowerCase().includes(filters.destination!.toLowerCase())
      );
    }

    if (filters.category) {
      results = results.filter(p => p.category === filters.category);
    }

    if (filters.minPrice !== undefined) {
      results = results.filter(p => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      results = results.filter(p => p.price <= filters.maxPrice!);
    }

    if (filters.duration) {
      results = results.filter(p => p.duration === filters.duration);
    }

    // Sorting
    if (filters.sortBy) {
      results.sort((a, b) => {
        let comparison = 0;
        switch (filters.sortBy) {
          case 'price':
            comparison = a.price - b.price;
            break;
          case 'rating':
            comparison = a.rating - b.rating;
            break;
          case 'duration':
            comparison = a.duration - b.duration;
            break;
        }
        return filters.sortOrder === 'desc' ? -comparison : comparison;
      });
    }

    return of(results).pipe(delay(500));
  }
}
