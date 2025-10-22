import Image from 'next/image';
import { AppShell } from '@/components/layout/AppShell';
import { MovieCarousel } from '@/components/movies/MovieCarousel';
import { Button } from '@/components/ui/button';
import { MOCK_MOVIES } from '@/lib/data';
import { PlayCircle, Plus } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function BrowsePage() {
  const trendingMovies = MOCK_MOVIES.slice(0, 8);
  const newReleases = MOCK_MOVIES.slice(8, 16);
  const featuredMovie = MOCK_MOVIES[0];
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

  return (
    <AppShell>
      <div className="flex-1 space-y-8 lg:space-y-12">
        <section className="relative h-[70vh] w-full">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Featured movie background"
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
            <div className="max-w-2xl text-white">
              <h1 className="font-headline text-4xl font-bold md:text-5xl lg:text-7xl text-foreground">
                {featuredMovie.title}
              </h1>
              <p className="mt-4 max-w-lg text-sm text-muted-foreground">
                {featuredMovie.description}
              </p>
              <div className="mt-6 flex gap-4">
                <Button size="lg" className="font-bold">
                  <PlayCircle className="mr-2" />
                  Play
                </Button>
                <Button size="lg" variant="secondary" className="font-bold">
                  <Plus className="mr-2" />
                  My List
                </Button>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 md:px-6">
          <MovieCarousel title="Trending Now" movies={trendingMovies} />
          <MovieCarousel title="New Releases" movies={newReleases} />
          <MovieCarousel
            title="Recommended For You"
            movies={[...trendingMovies].reverse()}
          />
        </main>
      </div>
    </AppShell>
  );
}
