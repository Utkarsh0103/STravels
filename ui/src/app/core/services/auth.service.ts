import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User, LoginRequest, RegisterRequest, AuthResponse } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Mock user data
  private mockUsers: User[] = [
    {
      id: '1',
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      phone: '+1234567890',
      avatar: 'https://i.pravatar.cc/150?img=12',
      createdAt: new Date('2023-01-15'),
      updatedAt: new Date('2024-05-01')
    }
  ];

  constructor() {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    // Simulate API call
    return new Observable(observer => {
      setTimeout(() => {
        // Mock validation
        if (credentials.email === 'john.doe@example.com' && credentials.password === 'password123') {
          const user = this.mockUsers[0];
          const response: AuthResponse = {
            user,
            token: 'mock-jwt-token-' + Date.now()
          };
          
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', response.token);
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
          
          observer.next(response);
          observer.complete();
        } else {
          observer.error({ message: 'Invalid email or password' });
        }
      }, 1000);
    });
  }

  register(request: RegisterRequest): Observable<AuthResponse> {
    // Simulate API call
    return new Observable(observer => {
      setTimeout(() => {
        const newUser: User = {
          id: String(this.mockUsers.length + 1),
          email: request.email,
          firstName: request.firstName,
          lastName: request.lastName,
          phone: request.phone,
          createdAt: new Date(),
          updatedAt: new Date()
        };

        this.mockUsers.push(newUser);
        
        const response: AuthResponse = {
          user: newUser,
          token: 'mock-jwt-token-' + Date.now()
        };

        localStorage.setItem('currentUser', JSON.stringify(newUser));
        localStorage.setItem('token', response.token);
        this.currentUserSubject.next(newUser);
        this.isAuthenticatedSubject.next(true);

        observer.next(response);
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
