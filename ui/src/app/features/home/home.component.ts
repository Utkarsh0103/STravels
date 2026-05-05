import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PackageCardComponent } from '../../shared/components/package-card/package-card.component';
import { PackageService } from '../../core/services/package.service';
import { TravelPackage } from '../../models/package.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PackageCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredPackages: TravelPackage[] = [];
  popularPackages: TravelPackage[] = [];
  loading = true;

  // Search form data
  searchQuery = {
    destination: '',
    date: '',
    travelers: '1'
  };

  destinations = [
    { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400', count: 25 },
    { name: 'Switzerland', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400', count: 18 },
    { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400', count: 32 },
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400', count: 28 }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      comment: 'Amazing experience! The team at STravels made our honeymoon unforgettable.',
      location: 'New York, USA'
    },
    {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
      comment: 'Professional service and great attention to detail. Highly recommended!',
      location: 'Singapore'
    },
    {
      name: 'Emma Williams',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      comment: 'Best travel agency I have ever worked with. Will definitely book again!',
      location: 'London, UK'
    }
  ];

  constructor(
    private packageService: PackageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages(): void {
    this.packageService.getFeaturedPackages().subscribe(packages => {
      this.featuredPackages = packages;
      this.loading = false;
    });

    this.packageService.getPopularPackages().subscribe(packages => {
      this.popularPackages = packages;
    });
  }

  onSearch(): void {
    console.log('Search triggered with:', this.searchQuery);

    // Navigate to search page with query parameters
    this.router.navigate(['/search'], {
      queryParams: {
        destination: this.searchQuery.destination || undefined,
        date: this.searchQuery.date || undefined,
        travelers: this.searchQuery.travelers
      }
    }).then(() => {
      console.log('Navigated to search page');
    });
  }

  searchDestination(destinationName: string): void {
    // Quick search by destination
    this.router.navigate(['/search'], {
      queryParams: {
        destination: destinationName
      }
    });
  }
}
