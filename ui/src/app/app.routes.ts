import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'search',
    loadComponent: () => import('./features/search/search.component').then(m => m.SearchComponent)
  },
  {
    path: 'package/:id',
    loadComponent: () => import('./features/package-details/package-details.component').then(m => m.PackageDetailsComponent)
  },
  {
    path: 'booking/:id',
    loadComponent: () => import('./features/booking/booking.component').then(m => m.BookingComponent)
  },
  {
    path: 'payment',
    loadComponent: () => import('./features/payment/payment.component').then(m => m.PaymentComponent)
  },
  {
    path: 'confirmation',
    loadComponent: () => import('./features/confirmation/confirmation.component').then(m => m.ConfirmationComponent)
  },
  {
    path: 'my-bookings',
    loadComponent: () => import('./features/my-bookings/my-bookings.component').then(m => m.MyBookingsComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
