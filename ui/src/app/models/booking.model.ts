export interface Booking {
  id: string;
  userId: string;
  packageId: string;
  packageTitle: string;
  packageImage: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  travelers: TravelerInfo[];
  totalPrice: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  bookingDate: Date;
  bookingReference: string;
  specialRequests?: string;
}

export interface TravelerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  nationality: string;
  passportNumber?: string;
  type: 'adult' | 'child' | 'infant';
}

export enum BookingStatus {
  PENDING = 'Pending',
  CONFIRMED = 'Confirmed',
  CANCELLED = 'Cancelled',
  COMPLETED = 'Completed'
}

export enum PaymentStatus {
  PENDING = 'Pending',
  PAID = 'Paid',
  FAILED = 'Failed',
  REFUNDED = 'Refunded'
}

export interface BookingRequest {
  packageId: string;
  startDate: Date;
  travelers: TravelerInfo[];
  specialRequests?: string;
}
