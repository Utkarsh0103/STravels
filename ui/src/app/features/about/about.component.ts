import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { number: '50K+', label: 'Happy Travelers', icon: 'fa-users' },
    { number: '150+', label: 'Destinations', icon: 'fa-globe-americas' },
    { number: '10K+', label: 'Tours Completed', icon: 'fa-route' },
    { number: '4.9', label: 'Average Rating', icon: 'fa-star' }
  ];

  values = [
    {
      icon: 'fa-shield-alt',
      title: 'Safety First',
      description: 'Your safety is our top priority. We partner with certified providers and ensure all safety standards are met.'
    },
    {
      icon: 'fa-hand-holding-heart',
      title: 'Customer Centric',
      description: 'We put our customers at the heart of everything we do, providing personalized service and support.'
    },
    {
      icon: 'fa-leaf',
      title: 'Sustainable Travel',
      description: 'We promote responsible tourism and work with eco-friendly partners to protect our planet.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Innovation',
      description: 'We continuously innovate to provide the best booking experience and travel solutions.'
    }
  ];

  team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://i.pravatar.cc/300?img=1',
      bio: '15+ years in travel industry'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://i.pravatar.cc/300?img=3',
      bio: 'Expert in logistics & planning'
    },
    {
      name: 'Emma Williams',
      role: 'Customer Success',
      image: 'https://i.pravatar.cc/300?img=5',
      bio: 'Passionate about customer care'
    },
    {
      name: 'David Brown',
      role: 'Travel Expert',
      image: 'https://i.pravatar.cc/300?img=12',
      bio: 'Visited 80+ countries'
    }
  ];

  milestones = [
    { year: '2018', event: 'STravels Founded', description: 'Started with a vision to transform travel booking' },
    { year: '2019', event: 'Reached 10K Customers', description: 'Achieved our first major milestone' },
    { year: '2021', event: 'Global Expansion', description: 'Expanded to 100+ destinations worldwide' },
    { year: '2024', event: '50K+ Happy Travelers', description: 'Became a trusted name in travel industry' }
  ];
}
