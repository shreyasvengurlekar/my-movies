import type { ReactNode } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/Sidebar';
import { AppHeader } from '@/components/layout/Header';
import { MOCK_USER } from '@/lib/data';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar user={MOCK_USER} />
        <div className="flex flex-1 flex-col">
          <AppHeader user={MOCK_USER} />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
