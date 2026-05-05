import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <div class="container">
        <h1>My Profile</h1>
        <p>Manage your account settings and preferences</p>
      </div>
    </div>
  `,
  styles: [`.page-container { padding: 3rem 0; min-height: 60vh; }`]
})
export class ProfileComponent { }
