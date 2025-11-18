export interface Reply {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhoto?: string;
  comment: string;
  createdAt: Date;
}

export interface Feedback {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhoto?: string;
  rating: number; // 1-5 (supports 0.5 increments)
  comment: string;
  likes?: string[]; // Array of user IDs who liked
  dislikes?: string[]; // Array of user IDs who disliked
  replies?: Reply[]; // Array of replies
  createdAt: Date;
  updatedAt: Date;
}
