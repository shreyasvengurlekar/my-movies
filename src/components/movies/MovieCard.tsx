import Image from 'next/image';
import Link from 'next/link';
import type { Movie } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === movie.posterId);

  return (
    <Link href={`/watch/${movie.id}`} className="block group">
      <Card className="overflow-hidden border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="relative aspect-[2/3] w-full">
            {image && (
              <Image
                src={image.imageUrl}
                alt={movie.title}
                width={400}
                height={600}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white/80" />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-2">
        <h3 className="font-semibold text-sm truncate group-hover:text-primary transition-colors">{movie.title}</h3>
        <p className="text-xs text-muted-foreground">{movie.releaseYear}</p>
      </div>
    </Link>
  );
}
