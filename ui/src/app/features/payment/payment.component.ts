import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="container">
        <h1>Payment Page</h1>
        <p>Secure payment processing</p>
        <a routerLink="/confirmation" class="btn btn-primary">Complete Payment</a>
      </div>
    </div>
  `,
  styles: [`.page-container { padding: 3rem 0; min-height: 60vh; }`]
})
export class PaymentComponent { }
