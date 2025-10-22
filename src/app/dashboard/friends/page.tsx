import { AppShell } from '@/components/layout/AppShell';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { MOCK_FRIENDS } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, X } from 'lucide-react';

export default function FriendsPage() {
  return (
    <AppShell>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <h2 className="font-headline text-3xl font-bold tracking-tight">
          Friends
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Manage Your Friends</CardTitle>
            <CardDescription>Here you can add or remove friends.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex w-full max-w-sm items-center space-x-2 mb-6">
                <Input type="email" placeholder="friend@example.com" />
                <Button type="submit">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Friend
                </Button>
            </div>
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Friend</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_FRIENDS.map((friend) => (
                    <TableRow key={friend.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={friend.avatarUrl} />
                            <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{friend.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={friend.online ? 'default' : 'outline'} className={friend.online ? 'bg-green-500 hover:bg-green-600' : ''}>
                          {friend.online ? 'Online' : 'Offline'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove friend</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="md:hidden space-y-4">
              {MOCK_FRIENDS.map((friend) => (
                <Card key={friend.id}>
                    <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={friend.avatarUrl} />
                                <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">{friend.name}</p>
                                <Badge variant={friend.online ? 'default' : 'outline'} className={`mt-1 ${friend.online ? 'bg-green-500' : ''}`}>
                                    {friend.online ? 'Online' : 'Offline'}
                                </Badge>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove friend</span>
                        </Button>
                    </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>{MOCK_FRIENDS.length}</strong> friends.
            </div>
          </CardFooter>
        </Card>
      </div>
    </AppShell>
  );
}
