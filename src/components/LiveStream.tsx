
import { Play, Volume2, Maximize, Settings, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LiveStream = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-purple-900">
        
            <div className="w-full aspect-video">
  <iframe
    className="w-full h-full rounded-lg"
    src="https://www.youtube.com/embed/LusTv0RlnSU"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>
        
        {/* Video Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Play className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Volume2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* QR Code Action Bar */}
      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <h4 className="font-semibold text-center mb-3">ACTION BAR - SCAN QR FOR ACTION</h4>
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-red-400 to-pink-400 rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded grid grid-cols-3 gap-px p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-red-500 rounded-sm"></div>
                ))}
              </div>
            </div>
            <p className="text-xs font-medium">TRAINING</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded grid grid-cols-3 gap-px p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-blue-500 rounded-sm"></div>
                ))}
              </div>
            </div>
            <p className="text-xs font-medium">ASSESSMENT</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded grid grid-cols-3 gap-px p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-purple-500 rounded-sm"></div>
                ))}
              </div>
            </div>
            <p className="text-xs font-medium">INTERVIEW</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded grid grid-cols-3 gap-px p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-cyan-500 rounded-sm"></div>
                ))}
              </div>
            </div>
            <p className="text-xs font-medium">JOB OFFER</p>
          </div>
        </div>
      </div>
      
     
    </Card>
  );
};

export default LiveStream;
