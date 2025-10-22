'use client';

import { useState } from 'react';
import { Clapperboard, Film, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function WelcomePage() {
  const [isFlipped, setIsFlipped] = useState<'login' | 'signup' | null>(null);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4 text-center overflow-hidden">
      <div className="flex items-center gap-2 mb-8">
        <Clapperboard className="w-10 h-10 text-primary" />
        <h1 className="font-headline text-4xl font-bold">My Movies</h1>
      </div>

      <div className="w-full max-w-4xl mx-auto [perspective:1000px]">
        <div className={cn(
          "relative w-full transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped && "[transform:rotateY(180deg)]"
        )}>
          {/* Front face: The choice */}
          <div className="[backface-visibility:hidden] w-full">
            <div className="grid md:grid-cols-2 gap-8">
              <ChoiceCard
                icon={Film}
                title="Welcome Back"
                description="Log in to your account and continue the movie magic."
                buttonText="Log In"
                onClick={() => setIsFlipped('login')}
              />
              <ChoiceCard
                icon={UserPlus}
                title="Join the Party"
                description="Create an account to start watching with your friends."
                buttonText="Sign Up"
                onClick={() => setIsFlipped('signup')}
              />
            </div>
          </div>

          {/* Back face: Login/Signup form */}
          <div className={cn(
            "absolute top-0 left-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
          )}>
            {isFlipped === 'login' && <AuthForm type="login" onBack={() => setIsFlipped(null)} />}
            {isFlipped === 'signup' && <AuthForm type="signup" onBack={() => setIsFlipped(null)} />}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ChoiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

function ChoiceCard({ icon: Icon, title, description, buttonText, onClick }: ChoiceCardProps) {
  // We check which side is being flipped to in the parent to apply the correct action
  // This feels a bit hacky, but it prevents the card from being clickable when it's on the "back"
  const isLoginCard = title.includes('Back');

  return (
    <div
      className="group relative flex flex-col items-center justify-center p-8 bg-card rounded-lg border-2 border-transparent hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <Icon className="w-16 h-16 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
      <h2 className="font-headline text-2xl font-bold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-6 max-w-xs">{description}</p>
      <Button size="lg" className="font-bold pointer-events-none">{buttonText}</Button>
    </div>
  );
}


interface AuthFormProps {
    type: 'login' | 'signup';
    onBack: () => void;
}

function AuthForm({ type, onBack }: AuthFormProps) {
    const isLogin = type === 'login';

    return (
        <div className="bg-card rounded-lg border p-8 shadow-2xl shadow-primary/10 w-full max-w-md mx-auto">
             <h2 className="font-headline text-3xl font-bold text-center mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-muted-foreground text-center mb-8">
                {isLogin ? 'Enter your credentials to continue.' : 'Join the community!'}
            </p>
            
            <form className="space-y-4">
                {!isLogin && (
                     <div className="space-y-2 text-left">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="Alex Ryder" required />
                    </div>
                )}
                <div className="space-y-2 text-left">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2 text-left">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>

                 {isLogin && (
                    <div className="text-right text-sm">
                        <Link href="#" className="underline hover:text-primary">
                            Forgot your password?
                        </Link>
                    </div>
                )}

                <div className="pt-4 flex flex-col gap-4">
                   <Button type="submit" size="lg" className="w-full font-bold">
                        {isLogin ? 'Log In' : 'Create Account'}
                    </Button>
                    <Button type="button" variant="link" onClick={onBack}>
                        Back to options
                    </Button>
                </div>
            </form>
        </div>
    );
}
