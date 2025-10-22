import Link from 'next/link';
import { MOCK_MOVIES } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { VideoPlayer } from '@/components/watch/VideoPlayer';
import { ChatPanel } from '@/components/watch/ChatPanel';

export default function WatchPage({ params }: { params: { id: string } }) {
  const movie = MOCK_MOVIES.find((m) => m.id === params.id);

  if (!movie) {
    notFound();
  }

  return (
    <div className="flex h-screen w-screen flex-col bg-black text-white">
      <header className="absolute top-0 left-0 z-20 p-4">
        <Button asChild variant="ghost" size="icon" className="h-10 w-10 bg-black/50 hover:bg-black/70">
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </Button>
      </header>
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <VideoPlayer movie={movie} />
        </main>
        <aside className="w-full lg:w-[350px] flex-shrink-0 border-l border-border bg-background flex flex-col h-[50vh] lg:h-full">
          <ChatPanel />
        </aside>
      </div>
    </div>
  );
}
