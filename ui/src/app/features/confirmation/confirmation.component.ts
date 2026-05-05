import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container" style="text-align: center; padding: 4rem 0;">
        <i class="fas fa-check-circle" style="font-size: 5rem; color: var(--success); margin-bottom: 2rem;"></i>
        <h1>Booking Confirmed!</h1>
        <p>Your booking has been successfully confirmed. Check your email for details.</p>
        <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
          <a routerLink="/my-bookings" class="btn btn-primary">View My Bookings</a>
          <a routerLink="/home" class="btn btn-outline">Back to Home</a>
        </div>
      </div>
    </div>
  `,
  styles: [`.page-container { padding: 3rem 0; min-height: 60vh; }`]
})
export class ConfirmationComponent { }
