
import { User, MessageSquare, Calendar, BookOpen, Settings, LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  const participants = [
    { name: "Navanit Ramesh Patil", role: "candidate", status: "Interview Kab Hai" },
    { name: "Shaik", role: "viewer", status: "All the ui is make glitch some where button override to menu option and the profile option is so boring. Whenever I open the menu box all the list in blue that's mean it can't see with the white screen it effective to eyes." },
    { name: "eone", role: "employer", status: "Online" }
  ];

  return (
    <div className="w-80 bg-muted/30 border-r border-border p-4 h-screen overflow-y-auto">
      <div className="space-y-4">
        {/* Participants Section */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <User className="h-4 w-4" />
            Live Participants
          </h3>
          <div className="space-y-3">
            {participants.map((participant, index) => (
              <div key={index} className="border-b border-border last:border-b-0 pb-3 last:pb-0">
                <div className="flex items-start justify-between mb-1">
                  <span className="font-medium text-sm">{participant.name}</span>
                  <Badge variant={participant.role === 'candidate' ? 'default' : participant.role === 'viewer' ? 'secondary' : 'outline'} className="text-xs">
                    {participant.role}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-3">{participant.status}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Chat Section */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Live Chat
          </h3>
          <div className="space-y-2 mb-3">
            <div className="text-sm">
              <span className="font-medium text-blue-600">Shaik:</span>
              <span className="ml-1 text-muted-foreground">Great explanation!</span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-green-600">Navanit:</span>
              <span className="ml-1 text-muted-foreground">When is the next session?</span>
            </div>
          </div>
          <div className="flex gap-2">
            <input 
              placeholder="Type a message..." 
              className="flex-1 px-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="sm">Send</Button>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Course Materials
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Separator className="my-2" />
            <Button variant="ghost" size="sm" className="w-full justify-start text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Leave Session
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
