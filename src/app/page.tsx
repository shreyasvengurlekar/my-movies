'use client';

import { Clapperboard } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 3000); // 3-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4 text-center">
        <div className="animate-fade-in-down">
          <div className="flex justify-center items-center gap-4 mb-6 animate-pulse-slow">
            <Clapperboard className="w-16 h-16 md:w-24 md:h-24 text-primary" />
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold animate-slide-up">
            My Movies
          </h1>
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
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 5px hsl(var(--primary)));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 0 15px hsl(var(--primary)));
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
        .animate-pulse-slow {
           animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
