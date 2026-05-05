import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <div class="container">
        <h1>My Bookings</h1>
        <p>View and manage your travel bookings</p>
      </div>
    </div>
  `,
  styles: [`.page-container { padding: 3rem 0; min-height: 60vh; }`]
})
export class MyBookingsComponent { }
