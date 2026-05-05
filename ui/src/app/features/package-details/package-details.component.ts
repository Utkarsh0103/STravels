import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PackageService } from '../../core/services/package.service';
import { TravelPackage } from '../../models/package.model';

@Component({
  selector: 'app-package-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './package-details.component.html',
  styles: [`.page-container { padding: 3rem 0; }`]
})
export class PackageDetailsComponent implements OnInit {
  travelPackage?: TravelPackage;

  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.packageService.getPackageById(id).subscribe(pkg => this.travelPackage = pkg);
    }
  }
}
