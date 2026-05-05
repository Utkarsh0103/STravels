import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PackageCardComponent } from '../../shared/components/package-card/package-card.component';
import { PackageService } from '../../core/services/package.service';
import { TravelPackage, SearchFilters, PackageCategory } from '../../models/package.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, PackageCardComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  packages: TravelPackage[] = [];
  filteredPackages: TravelPackage[] = [];
  loading = true;

  // Filters
  filters: SearchFilters = {
    sortBy: 'popularity',
    sortOrder: 'desc'
  };

  categories = Object.values(PackageCategory);
  priceRanges = [
    { label: 'Any', min: 0, max: 10000 },
    { label: 'Under $1000', min: 0, max: 1000 },
    { label: '$1000 - $2000', min: 1000, max: 2000 },
    { label: '$2000 - $3000', min: 2000, max: 3000 },
    { label: 'Above $3000', min: 3000, max: 10000 }
  ];

  durations = [
    { label: 'Any', value: 0 },
    { label: '1-3 Days', value: 3 },
    { label: '4-7 Days', value: 7 },
    { label: '8-14 Days', value: 14 },
    { label: '15+ Days', value: 15 }
  ];

  viewMode: 'grid' | 'list' = 'grid';

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages(): void {
    this.packageService.getAllPackages().subscribe(packages => {
      this.packages = packages;
      this.applyFilters();
      this.loading = false;
    });
  }

  applyFilters(): void {
    this.packageService.searchPackages(this.filters).subscribe(results => {
      this.filteredPackages = results;
    });
  }

  onCategoryChange(category: string): void {
    this.filters.category = category as PackageCategory;
    this.applyFilters();
  }

  onPriceChange(min: number, max: number): void {
    this.filters.minPrice = min;
    this.filters.maxPrice = max;
    this.applyFilters();
  }

  onSortChange(sortBy: string): void {
    this.filters.sortBy = sortBy as any;
    this.applyFilters();
  }

  clearFilters(): void {
    this.filters = { sortBy: 'popularity', sortOrder: 'desc' };
    this.applyFilters();
  }
}
