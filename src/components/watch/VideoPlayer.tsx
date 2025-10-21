import type { Movie } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
} from 'lucide-react';
import { Slider } from '../ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface VideoPlayerProps {
  movie: Movie;
}

export function VideoPlayer({ movie }: VideoPlayerProps) {
  const image = PlaceHolderImages.find((img) => img.id === movie.posterId);

  return (
    <div className="relative w-full aspect-video bg-black group">
      {image && (
        <Image
          src={image.imageUrl.replace('400/600', '1920/1080')} // Get a widescreen version
          alt={`Poster for ${movie.title}`}
          fill
          className="object-contain"
        />
      )}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Button variant="ghost" size="icon" className="w-24 h-24">
            <Play className="w-20 h-20" />
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-full h-1 bg-gray-600 rounded">
          <div className="w-1/3 h-full bg-primary rounded"></div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Play className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-2 w-32">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Volume2 className="h-5 w-5" />
              </Button>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <span className="text-xs">15:32 / 45:10</span>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{movie.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-6 w-6" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-60">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Quality</h4>
                    <p className="text-sm text-muted-foreground">
                      Adjust video quality for all viewers.
                    </p>
                  </div>
                  <RadioGroup defaultValue="auto">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="auto" id="q-auto" />
                        <Label htmlFor="q-auto">Auto</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1080p" id="q-1080" />
                        <Label htmlFor="q-1080">1080p</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="720p" id="q-720" />
                        <Label htmlFor="q-720">720p</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="480p" id="q-480" />
                        <Label htmlFor="q-480">480p</Label>
                    </div>
                  </RadioGroup>
                </div>
              </PopoverContent>
            </Popover>
            <Button variant="ghost" size="icon">
              <Maximize className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
