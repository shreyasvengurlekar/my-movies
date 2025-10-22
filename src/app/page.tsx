'use client';

import { Clapperboard } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4 text-center overflow-hidden">
        <div className="animate-fade-in-down">
          <div className="flex justify-center items-center gap-4 mb-6 animate-bounce-in">
            <Clapperboard className="w-16 h-16 md:w-24 md:h-24 text-primary" />
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold animate-text-focus-in">
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
        @keyframes bounce-in {
            0% {
                transform: scale(0.5);
                opacity: 0;
            }
            50% {
                transform: scale(1.1);
            }
            70% {
                transform: scale(0.9);
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
        @keyframes text-focus-in {
            0% {
                filter: blur(12px);
                opacity: 0;
            }
            100% {
                filter: blur(0px);
                opacity: 1;
            }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-bounce-in {
            animation: bounce-in 1s ease-out 0.5s both;
        }
        .animate-text-focus-in {
            animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1s both;
        }
      `}</style>
    </div>
  );
}
