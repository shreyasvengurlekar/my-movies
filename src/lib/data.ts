import type { User, Movie, Friend } from './types';

export const MOCK_USER: User = {
  id: 'user-1',
  name: 'Alex Ryder',
  email: 'alex.ryder@example.com',
  avatarUrl: 'https://picsum.photos/seed/user1/100/100',
  role: 'admin',
};

export const MOCK_MOVIES: Movie[] = [
  { id: '1', title: 'Cosmic Odyssey', description: 'A breathtaking journey across galaxies to find humanity\'s new home.', posterId: 'movie-1', rating: 4.5, genres: ['Sci-Fi', 'Adventure'], duration: 148, releaseYear: 2023 },
  { id: '2', title: 'Cybernetic Revolt', description: 'In a neon-lit future, a rogue android fights for its freedom.', posterId: 'movie-2', rating: 4.2, genres: ['Sci-Fi', 'Action'], duration: 130, releaseYear: 2022 },
  { id: '3', title: 'The Last Stand', description: 'A retired gunslinger must protect his town from a ruthless gang.', posterId: 'movie-3', rating: 4.8, genres: ['Action', 'Western'], duration: 125, releaseYear: 2021 },
  { id: '4', title: 'Whispers of the Enchanted', description: 'Two siblings discover a hidden world of magic and danger.', posterId: 'movie-4', rating: 4.6, genres: ['Fantasy', 'Family'], duration: 118, releaseYear: 2023 },
  { id: '5', title: 'City of Shadows', description: 'A hardboiled detective uncovers a conspiracy that goes to the top.', posterId: 'movie-5', rating: 4.3, genres: ['Thriller', 'Noir'], duration: 135, releaseYear: 2020 },
  { id: '6', title: 'The Laugh Riot', description: 'A group of friends embark on a disastrous road trip.', posterId: 'movie-6', rating: 3.9, genres: ['Comedy'], duration: 95, releaseYear: 2024 },
  { id: '7', title: 'Sunset Serenade', description: 'Two musicians fall in love during a summer festival.', posterId: 'movie-7', rating: 4.7, genres: ['Romance', 'Drama'], duration: 122, releaseYear: 2022 },
  { id: '8', title: 'The Silent Creek', description: 'A family\'s new home holds a terrifying secret.', posterId: 'movie-8', rating: 4.1, genres: ['Horror', 'Mystery'], duration: 105, releaseYear: 2023 },
  { id: '9', title: 'Planet Earth III', description: 'Exploring the last untouched wildernesses of our world.', posterId: 'movie-9', rating: 4.9, genres: ['Documentary'], duration: 180, releaseYear: 2023 },
  { id: '10', title: 'Quantum Echo', description: 'A physicist accidentally creates a portal to parallel universes.', posterId: 'movie-10', rating: 4.4, genres: ['Sci-Fi', 'Thriller'], duration: 140, releaseYear: 2024 },
  { id: '11', title: 'Paws & Whiskers', description: 'An adventurous cat and a loyal dog team up to find their way home.', posterId: 'movie-11', rating: 4.0, genres: ['Animation', 'Family'], duration: 92, releaseYear: 2021 },
  { id: '12', title: 'The Gilded Crown', description: 'A story of betrayal and ambition in the court of a powerful king.', posterId: 'movie-12', rating: 4.6, genres: ['Historical', 'Drama'], duration: 155, releaseYear: 2019 },
  { id: '13', title: 'Galaxy Runners', description: 'A rag-tag crew of smugglers take on an evil galactic empire.', posterId: 'movie-13', rating: 4.5, genres: ['Sci-Fi', 'Action'], duration: 133, releaseYear: 2018 },
  { id: '14', title: 'The Long Goodbye', description: 'A classic tale of a detective in over his head in 1940s Los Angeles.', posterId: 'movie-14', rating: 4.7, genres: ['Noir', 'Mystery'], duration: 112, releaseYear: 1973 },
  { id: '15', title: 'Summer Haze', description: 'A coming-of-age story about a teenager\'s last summer before college.', posterId: 'movie-15', rating: 4.2, genres: ['Indie', 'Drama'], duration: 101, releaseYear: 2023 },
  { id: '16', title: 'Dust Devil', description: 'A stranger arrives in a desolate town, bringing with him a storm of violence.', posterId: 'movie-16', rating: 4.3, genres: ['Western', 'Thriller'], duration: 128, releaseYear: 2020 },
];

export const MOCK_FRIENDS: Friend[] = [
  { id: 'friend-1', name: 'Ben Carter', avatarUrl: 'https://picsum.photos/seed/friend1/100/100', online: true },
  { id: 'friend-2', name: 'Chloe Davis', avatarUrl: 'https://picsum.photos/seed/friend2/100/100', online: false },
  { id: 'friend-3', name: 'Ethan Hunt', avatarUrl: 'https://picsum.photos/seed/friend3/100/100', online: true },
  { id: 'friend-4', name: 'Fiona Glenanne', avatarUrl: 'https://picsum.photos/seed/friend4/100/100', online: true },
  { id: 'friend-5', name: 'Gus Fring', avatarUrl: 'https://picsum.photos/seed/friend5/100/100', online: false },
];
