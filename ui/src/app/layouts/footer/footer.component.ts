import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'fab fa-facebook', url: '#', label: 'Facebook' },
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
    { icon: 'fab fa-youtube', url: '#', label: 'YouTube' }
  ];

  quickLinks = [
    { label: 'About Us', route: '/about' },
    { label: 'Contact Us', route: '/contact' },
    { label: 'FAQs', route: '#' },
    { label: 'Terms & Conditions', route: '#' },
    { label: 'Privacy Policy', route: '#' }
  ];

  categories = [
    'Adventure Tours',
    'Beach Holidays',
    'Cultural Tours',
    'Family Packages',
    'Honeymoon Specials',
    'Wildlife Safaris'
  ];
}
