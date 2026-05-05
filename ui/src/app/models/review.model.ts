export interface Review {
  id: string;
  packageId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  helpful: number;
  createdAt: Date;
  verified: boolean;
}

export interface CreateReviewRequest {
  packageId: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
}
