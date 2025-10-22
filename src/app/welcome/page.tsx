'use client';

import { Clapperboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4 text-center">
      <div className="animate-fade-in-down">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Clapperboard className="w-16 h-16 md:w-24 md:h-24 text-primary" />
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold animate-slide-up">
          Welcome to My Movies
        </h1>
        <p className="mt-4 max-w-md mx-auto text-muted-foreground animate-slide-up animation-delay-200">
          Your personal cinema, shared with friends. Discover, watch, and discuss your favorite films together.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-400">
          <Button asChild size="lg" className="font-bold">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-bold">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
