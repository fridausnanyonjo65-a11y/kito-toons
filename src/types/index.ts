export type MovieCategory =
  | 'Adventure'
  | 'Comedy'
  | 'Fantasy'
  | 'Action'
  | 'Family'
  | 'Educational Cartoons'
  | 'Kids Animation';

export interface Movie {
  id: string;
  title: string;
  description: string;
  synopsis: string;
  category: MovieCategory;
  duration: string;
  releaseYear: number;
  rating: string;
  posterUrl: string;
  videoUrl: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  isRecentlyAdded?: boolean;
  director: string;
  funFact?: string;
  characters?: { name: string; role: string }[];
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  favoriteCategory?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface FavoriteItem {
  id: string;
  userId: string;
  movieId: string;
  movieTitle: string;
  moviePoster: string;
  movieCategory: string;
  addedAt: string;
}

export interface WatchHistoryItem {
  id: string;
  userId: string;
  movieId: string;
  movieTitle: string;
  moviePoster: string;
  movieCategory: string;
  watchedAt: string;
  progressPercentage: number;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export type ActiveTab = 'home' | 'movies' | 'categories' | 'about' | 'contact' | 'dashboard' | 'watch';
