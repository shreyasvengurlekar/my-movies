'use client';

import { Search, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import type { User } from '@/lib/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { UserNav } from './UserNav';
import { Clapperboard } from 'lucide-react';

interface AppHeaderProps {
  user: User;
}

export function AppHeader({ user }: AppHeaderProps) {
  const { isMobile } = useSidebar();
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
       <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <Clapperboard className="h-7 w-7 text-primary md:hidden" />
      </div>

      <div className="relative flex-1 hidden md:flex">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search movies..."
          className="w-full max-w-sm pl-10"
        />
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle className='font-headline'>Search</SheetTitle>
            </SheetHeader>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search movies..."
                className="w-full pl-10"
              />
            </div>
          </SheetContent>
        </Sheet>

        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>

        <div className="hidden md:block">
          <UserNav user={user} />
        </div>
      </div>
    </header>
  );
}
