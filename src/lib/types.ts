export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
  role: 'user' | 'admin';
};

export type Movie = {
  id: string;
  title: string;
  description: string;
  posterId: string;
  rating: number;
  genres: string[];
  duration: number; // in minutes
  releaseYear: number;
};

export type Friend = {
  id: string;
  name:string;
  avatarUrl: string;
  online: boolean;
};
