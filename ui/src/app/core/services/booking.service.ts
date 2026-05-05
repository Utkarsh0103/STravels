import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Booking, BookingRequest, BookingStatus, PaymentStatus } from '../../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private mockBookings: Booking[] = [
    {
      id: 'BK001',
      userId: '1',
      packageId: '1',
      packageTitle: 'Maldives Paradise - 7 Days Beach Retreat',
      packageImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400',
      destination: 'Malé, Maldives',
      startDate: new Date('2024-06-15'),
      endDate: new Date('2024-06-22'),
      duration: 7,
      travelers: [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phone: '+1234567890',
          dateOfBirth: new Date('1990-05-15'),
          gender: 'male',
          nationality: 'USA',
          passportNumber: 'A12345678',
          type: 'adult'
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
          phone: '+1234567890',
          dateOfBirth: new Date('1992-08-20'),
          gender: 'female',
          nationality: 'USA',
          passportNumber: 'B98765432',
          type: 'adult'
        }
      ],
      totalPrice: 4998,
      status: BookingStatus.CONFIRMED,
      paymentStatus: PaymentStatus.PAID,
      bookingDate: new Date('2024-05-01'),
      bookingReference: 'ST-BK001-2024',
      specialRequests: 'Honeymoon package with room decoration'
    }
  ];

  constructor() { }

  createBooking(request: BookingRequest): Observable<Booking> {
    return new Observable(observer => {
      setTimeout(() => {
        const newBooking: Booking = {
          id: 'BK' + String(this.mockBookings.length + 1).padStart(3, '0'),
          userId: '1', // Current user
          packageId: request.packageId,
          packageTitle: 'Package Title', // Would come from package
          packageImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400',
          destination: 'Destination',
          startDate: request.startDate,
          endDate: new Date(request.startDate.getTime() + 7 * 24 * 60 * 60 * 1000),
          duration: 7,
          travelers: request.travelers,
          totalPrice: request.travelers.length * 2499,
          status: BookingStatus.PENDING,
          paymentStatus: PaymentStatus.PENDING,
          bookingDate: new Date(),
          bookingReference: 'ST-BK' + String(this.mockBookings.length + 1).padStart(3, '0') + '-2024',
          specialRequests: request.specialRequests
        };

        this.mockBookings.push(newBooking);
        observer.next(newBooking);
        observer.complete();
      }, 1000);
    });
  }

  getBookingById(id: string): Observable<Booking | undefined> {
    const booking = this.mockBookings.find(b => b.id === id);
    return of(booking).pipe(delay(300));
  }

  getUserBookings(userId: string): Observable<Booking[]> {
    const userBookings = this.mockBookings.filter(b => b.userId === userId);
    return of(userBookings).pipe(delay(500));
  }

  cancelBooking(bookingId: string): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        const booking = this.mockBookings.find(b => b.id === bookingId);
        if (booking) {
          booking.status = BookingStatus.CANCELLED;
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 800);
    });
  }

  confirmBooking(bookingId: string): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        const booking = this.mockBookings.find(b => b.id === bookingId);
        if (booking) {
          booking.status = BookingStatus.CONFIRMED;
          booking.paymentStatus = PaymentStatus.PAID;
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 800);
    });
  }
}
