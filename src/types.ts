export type UserRole = 'student' | 'staff' | 'alumni' | 'admin';
export type GradeLevel = 'Grade 10' | 'IBDP 1' | 'IBDP 2' | 'Staff' | 'Alumni';

export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  role: UserRole;
  grade: GradeLevel;
  house?: string;
  friends: string[];
  createdAt: string;
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  image?: string;
  likes: string[];
  comments: Comment[];
  shares: number;
  createdAt: string;
  type: 'post' | 'announcement';
}

export interface Comment {
  id: string;
  authorId: string;
  text: string;
  createdAt: string;
}

export interface Story {
  id: string;
  authorId: string;
  media: string;
  type: 'image' | 'video';
  createdAt: string;
  expiresAt: string;
  views: string[];
}

export interface Reel {
  id: string;
  title: string;
  description: string;
  source: 'youtube' | 'curated' | 'user';
  thumbnail: string;
  videoUrl: string;
  subject?: string;
  level?: GradeLevel;
  likes: number;
  views: number;
  duration: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  createdAt: string;
  read: boolean;
}

export interface MarketplaceItem {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  createdAt: string;
  sold: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  hostId: string;
  attendees: string[];
  cover?: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  cover?: string;
  privacy: 'public' | 'private';
  createdAt: string;
}

export interface DailyTest {
  id: string;
  date: string; // YYYY-MM-DD
  level: GradeLevel;
  subject: string;
  questions: TestQuestion[];
  generatedAt: string;
}

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type Tab =
  | 'feed'
  | 'reels'
  | 'watch'
  | 'marketplace'
  | 'groups'
  | 'events'
  | 'arena'
  | 'profile'
  | 'messenger'
  | 'notifications'
  | 'search'
  | 'saved'
  | 'memories'
  | 'houses'
  | 'lostfound';
