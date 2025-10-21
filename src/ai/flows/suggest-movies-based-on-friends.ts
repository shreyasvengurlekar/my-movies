'use server';
/**
 * @fileOverview Suggests movies for a user to watch with their friends, based on the movies their friends have watched or liked.
 *
 * - suggestMoviesBasedOnFriends - A function that handles the movie suggestion process.
 * - SuggestMoviesBasedOnFriendsInput - The input type for the suggestMoviesBasedOnFriends function.
 * - SuggestMoviesBasedOnFriendsOutput - The return type for the suggestMoviesBasedOnFriends function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestMoviesBasedOnFriendsInputSchema = z.object({
  friendMoviePreferences: z.array(
    z.object({
      friendId: z.string().describe('The ID of the friend.'),
      movieTitles: z.array(z.string()).describe('The list of movie titles the friend has watched or liked.'),
    })
  ).describe('An array of friends and their movie preferences.'),
  userPreferences: z.array(z.string()).describe('The list of movie titles that the user likes'),
});
export type SuggestMoviesBasedOnFriendsInput = z.infer<typeof SuggestMoviesBasedOnFriendsInputSchema>;

const SuggestMoviesBasedOnFriendsOutputSchema = z.object({
  suggestedMovies: z.array(z.string()).describe('A list of movie titles suggested for the user to watch with their friends.'),
});
export type SuggestMoviesBasedOnFriendsOutput = z.infer<typeof SuggestMoviesBasedOnFriendsOutputSchema>;

export async function suggestMoviesBasedOnFriends(input: SuggestMoviesBasedOnFriendsInput): Promise<SuggestMoviesBasedOnFriendsOutput> {
  return suggestMoviesBasedOnFriendsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestMoviesBasedOnFriendsPrompt',
  input: {schema: SuggestMoviesBasedOnFriendsInputSchema},
  output: {schema: SuggestMoviesBasedOnFriendsOutputSchema},
  prompt: `You are a movie recommendation expert. Based on the movie preferences of the user's friends and the user, suggest a list of movies that the user can watch with their friends.

  User likes: {{userPreferences}}

  Here are the movie preferences of the user's friends:
  {{#each friendMoviePreferences}}
  Friend ID: {{friendId}}
  Movies: {{movieTitles}}
  {{/each}}

  Suggest a list of movies that the user can watch with their friends. Do not include movies that the user already likes.
  Format your response as a list of movie titles.
  `,
});

const suggestMoviesBasedOnFriendsFlow = ai.defineFlow(
  {
    name: 'suggestMoviesBasedOnFriendsFlow',
    inputSchema: SuggestMoviesBasedOnFriendsInputSchema,
    outputSchema: SuggestMoviesBasedOnFriendsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
