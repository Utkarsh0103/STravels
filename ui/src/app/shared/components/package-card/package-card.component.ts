import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TravelPackage } from '../../../models/package.model';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent {
  @Input() package!: TravelPackage;
  @Input() layout: 'grid' | 'list' = 'grid';
}
