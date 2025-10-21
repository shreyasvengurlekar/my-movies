'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MOCK_FRIENDS } from '@/lib/data';
import { Mic, MicOff, Send, Video, VideoOff } from 'lucide-react';

export function ChatPanel() {
  const participants = [
    { id: 'user-1', name: 'You', avatarUrl: 'https://picsum.photos/seed/user1/100/100' },
    ...MOCK_FRIENDS,
  ];

  return (
    <div className="flex h-full flex-col">
      <Tabs defaultValue="chat" className="flex flex-1 flex-col overflow-hidden">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="participants">Participants</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="chat" className="flex-1 flex flex-col overflow-hidden m-0 p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {/* Chat messages would go here */}
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://picsum.photos/seed/friend1/100/100" />
                  <AvatarFallback>BC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">Ben Carter</p>
                  <div className="bg-muted p-2 rounded-lg text-sm mt-1">
                    This movie is amazing!
                  </div>
                </div>
              </div>
               <div className="flex items-start gap-3 flex-row-reverse">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://picsum.photos/seed/user1/100/100" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <div className="text-right">
                  <p className="font-semibold text-sm">You</p>
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg text-sm mt-1">
                    I know right! The visuals are stunning.
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <div className="relative">
              <Input placeholder="Type a message..." className="pr-10" />
              <Button type="submit" size="icon" variant="ghost" className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="participants" className="flex-1 overflow-hidden m-0 p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {participants.map((p, index) => (
                <div key={p.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={p.avatarUrl} />
                      <AvatarFallback>{p.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">{p.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MicOff className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <VideoOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="settings" className="flex-1 overflow-hidden m-0 p-4">
          <h3 className="font-headline text-lg font-semibold">Watch Party Settings</h3>
          {/* Settings would go here */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
