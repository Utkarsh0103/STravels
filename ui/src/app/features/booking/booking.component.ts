import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container">
        <h1>Booking Page</h1>
        <p>Complete your booking details here</p>
        <a routerLink="/payment" class="btn btn-primary">Proceed to Payment</a>
      </div>
    </div>
  `,
  styles: [`.page-container { padding: 3rem 0; min-height: 60vh; }`]
})
export class BookingComponent { }
