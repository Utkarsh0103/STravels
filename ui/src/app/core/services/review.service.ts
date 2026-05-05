import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Review, CreateReviewRequest } from '../../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private mockReviews: Review[] = [
    {
      id: 'R001',
      packageId: '1',
      userId: 'U101',
      userName: 'Sarah Johnson',
      userAvatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      title: 'Best honeymoon ever!',
      comment: 'Absolutely stunning resort! The overwater villa was beyond our expectations. The staff was incredibly friendly and attentive. Highly recommend for couples!',
      helpful: 45,
      createdAt: new Date('2024-04-15'),
      verified: true
    },
    {
      id: 'R002',
      packageId: '1',
      userId: 'U102',
      userName: 'Michael Chen',
      userAvatar: 'https://i.pravatar.cc/150?img=3',
      rating: 4,
      title: 'Amazing experience',
      comment: 'Great package overall. The diving experience was unforgettable. Only minor issue was the flight schedule, but everything else was perfect.',
      helpful: 32,
      createdAt: new Date('2024-04-10'),
      verified: true
    },
    {
      id: 'R003',
      packageId: '1',
      userId: 'U103',
      userName: 'Emma Williams',
      userAvatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      title: 'Paradise on Earth',
      comment: 'This trip exceeded all our expectations! The crystal-clear waters, beautiful sunsets, and luxury accommodation made this trip unforgettable.',
      helpful: 58,
      createdAt: new Date('2024-03-25'),
      verified: true
    }
  ];

  constructor() { }

  getReviewsByPackageId(packageId: string): Observable<Review[]> {
    const reviews = this.mockReviews.filter(r => r.packageId === packageId);
    return of(reviews).pipe(delay(300));
  }

  createReview(request: CreateReviewRequest): Observable<Review> {
    return new Observable(observer => {
      setTimeout(() => {
        const newReview: Review = {
          id: 'R' + String(this.mockReviews.length + 1).padStart(3, '0'),
          packageId: request.packageId,
          userId: '1', // Current user
          userName: 'John Doe',
          rating: request.rating,
          title: request.title,
          comment: request.comment,
          images: request.images,
          helpful: 0,
          createdAt: new Date(),
          verified: true
        };

        this.mockReviews.push(newReview);
        observer.next(newReview);
        observer.complete();
      }, 1000);
    });
  }

  getAverageRating(packageId: string): Observable<number> {
    const reviews = this.mockReviews.filter(r => r.packageId === packageId);
    const avg = reviews.length > 0 
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length 
      : 0;
    return of(avg).pipe(delay(100));
  }
}
