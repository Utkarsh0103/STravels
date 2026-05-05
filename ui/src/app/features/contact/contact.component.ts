import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;
  loading = false;

  contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      details: ['123 Travel Avenue', 'New York, NY 10001', 'United States']
    },
    {
      icon: 'fa-phone',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Fri: 9am-6pm EST']
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      details: ['info&#64;stravels.com', 'support&#64;stravels.com', 'bookings&#64;stravels.com']
    },
    {
      icon: 'fa-clock',
      title: 'Working Hours',
      details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed']
    }
  ];

  faqs = [
    {
      question: 'How do I book a travel package?',
      answer: 'Browse our packages, select your preferred dates, fill in traveler details, and complete the payment. You\'ll receive confirmation via email.'
    },
    {
      question: 'Can I modify my booking?',
      answer: 'Yes, you can modify your booking up to 48 hours before departure. Contact our support team for assistance.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Free cancellation up to 7 days before departure. Cancellations within 7 days may incur fees. Check specific package terms.'
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we offer comprehensive travel insurance covering medical emergencies, trip cancellations, and lost baggage.'
    }
  ];

  onSubmit(): void {
    this.loading = true;

    // Simulate form submission
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };

      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    }, 1500);
  }
}
