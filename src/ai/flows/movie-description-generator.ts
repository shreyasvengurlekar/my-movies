'use server';

/**
 * @fileOverview A movie description generator AI agent.
 *
 * - generateMovieDescription - A function that handles the movie description generation process.
 * - GenerateMovieDescriptionInput - The input type for the generateMovieDescription function.
 * - GenerateMovieDescriptionOutput - The return type for the generateMovieDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMovieDescriptionInputSchema = z.object({
  movieTitle: z.string().describe('The title of the movie.'),
});
export type GenerateMovieDescriptionInput = z.infer<
  typeof GenerateMovieDescriptionInputSchema
>;

const GenerateMovieDescriptionOutputSchema = z.object({
  movieDescription: z.string().describe('The generated movie description.'),
});
export type GenerateMovieDescriptionOutput = z.infer<
  typeof GenerateMovieDescriptionOutputSchema
>;

export async function generateMovieDescription(
  input: GenerateMovieDescriptionInput
): Promise<GenerateMovieDescriptionOutput> {
  return generateMovieDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMovieDescriptionPrompt',
  input: {schema: GenerateMovieDescriptionInputSchema},
  output: {schema: GenerateMovieDescriptionOutputSchema},
  prompt: `You are a movie expert. Generate a short description for the movie with the title: {{{movieTitle}}}.`,
});

const generateMovieDescriptionFlow = ai.defineFlow(
  {
    name: 'generateMovieDescriptionFlow',
    inputSchema: GenerateMovieDescriptionInputSchema,
    outputSchema: GenerateMovieDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
