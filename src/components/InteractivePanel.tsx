
import { MessageSquare, ThumbsUp, Share2, Star, Send, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const InteractivePanel = () => {
  const feedbackItems = [
    { name: "jignesh", message: "Great tips on resume writing!", rating: 5, time: "2 min ago", avatar: "🔴", platform: "live" },
    { name: "swastik", message: "When will you cover salary negotiation?", rating: 4, time: "5 min ago", avatar: "🔵", platform: "fb" },
    { name: "john", message: "This is exactly what I needed!", rating: 5, time: "8 min ago", avatar: "💜", platform: "messenger" },
    { name: "Mohan", message: "Very informative session!", rating: 4, time: "10 min ago", avatar: "🟢", platform: "telegram" },
    { name: "Sarah", message: "Looking forward to more!", rating: 5, time: "12 min ago", avatar: "🟠", platform: "whatsapp" },
    { name: "Trilok", message: "Excellent presentation!", rating: 5, time: "15 min ago", avatar: "📷", platform: "instagram" },
  ];

  return (
    <div className="space-y-4">
      {/* Audience Interaction Header */}
      <Card className="p-4 bg-orange-50 border-orange-200 border-2">
        <div className="text-center mb-4">
          <h3 className="font-bold text-lg text-gray-800">AUDIENCE INTERACTION</h3>
        </div>
        
        {/* Live Feedback List */}
        <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
          {feedbackItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white border-2 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-lg border-2">
                {item.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">{item.name}</span>
                  <div className="w-6 h-6 rounded border-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-1">{item.message}</p>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Feedback Section */}
        <div className="text-center mb-4">
          <h4 className="font-bold text-lg text-blue-600 bg-blue-100 py-2 px-4 rounded">FEEDBACK</h4>
        </div>
        
        {/* Send Message */}
        <div className="flex gap-2">
          <Input placeholder="Share feedback..." className="flex-1 text-sm h-10 border-2" />
          <Button size="sm" className="h-10 bg-blue-600 hover:bg-blue-700">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      
    </div>
  );
};

export default InteractivePanel;
