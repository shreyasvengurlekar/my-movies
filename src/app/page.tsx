'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Clapperboard } from 'lucide-react';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-24 animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <Clapperboard className="h-24 w-24 text-primary animate-pulse-slow" />
        <h1 className="text-5xl font-bold font-headline text-foreground animate-slide-up">
          My Movies
        </h1>
      </div>
    </main>
  );
}
