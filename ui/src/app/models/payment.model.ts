export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  status: string;
  transactionId?: string;
  createdAt: Date;
}

export enum PaymentMethod {
  CREDIT_CARD = 'Credit Card',
  DEBIT_CARD = 'Debit Card',
  PAYPAL = 'PayPal',
  BANK_TRANSFER = 'Bank Transfer',
  UPI = 'UPI'
}

export interface PaymentRequest {
  bookingId: string;
  method: PaymentMethod;
  cardDetails?: CardDetails;
}

export interface CardDetails {
  cardNumber: string;
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}
