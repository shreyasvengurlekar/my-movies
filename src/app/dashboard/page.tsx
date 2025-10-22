import { AppShell } from '@/components/layout/AppShell';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Film, Users, Download, Star } from 'lucide-react';
import { MOCK_FRIENDS, MOCK_MOVIES } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  const recentMovies = MOCK_MOVIES.slice(0, 3);
  const onlineFriends = MOCK_FRIENDS.filter((f) => f.online);

  return (
    <AppShell>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <h2 className="font-headline text-3xl font-bold tracking-tight">
          Dashboard
        </h2>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Movies</CardTitle>
              <Film className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{MOCK_MOVIES.length}</div>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Total movies in your library
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Friends</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{MOCK_FRIENDS.length}</div>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {onlineFriends.length} online now
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Movies available offline
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.3</div>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Of movies you&apos;ve watched
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 lg:grid-cols-7">
            <Card className="col-span-1 lg:col-span-4">
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>You added 3 new movies this week.</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Activity feed placeholder */}
                  <div className="space-y-4">
                    {recentMovies.map(movie => (
                      <div key={movie.id} className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={`https://picsum.photos/seed/${movie.posterId}/100/100`} alt="Avatar" />
                          <AvatarFallback>{movie.title.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">You watched <span className="font-bold">{movie.title}</span></p>
                          <p className="text-sm text-muted-foreground">2 days ago</p>
                        </div>
                        <Button variant="outline" size="sm" asChild className="ml-auto">
                           <Link href={`/watch/${movie.id}`}>Watch Again</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
            </Card>
            <Card className="col-span-1 lg:col-span-3">
                <CardHeader>
                    <CardTitle>Friends Online</CardTitle>
                    <CardDescription>Invite them to a watch party!</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                    {onlineFriends.map(friend => (
                        <div key={friend.id} className="flex items-center">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src={friend.avatarUrl} alt="Avatar" />
                            <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{friend.name}</p>
                            <p className="text-sm text-muted-foreground">Online</p>
                        </div>
                        <Button variant="default" size="sm" className="ml-auto">Invite</Button>
                        </div>
                    ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </AppShell>
  );
}
