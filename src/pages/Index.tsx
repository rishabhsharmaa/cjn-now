
import Header from "@/components/Header";
import LiveStream from "@/components/LiveStream";
import InteractivePanel from "@/components/InteractivePanel";
import JobFeed from "@/components/JobFeed";
import StatsDashboard from "@/components/StatsDashboard";
import MobileApp from "@/components/MobileApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Stats Dashboard - Full Width at Top */}
        <div className="mb-6">
          <StatsDashboard />
        </div>
        
        {/* Main Content Layout - 3 Column Grid matching exact proportions */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          {/* Left Sidebar - Audience Interaction (narrower) */}
          <div className="col-span-3">
            <InteractivePanel />
          </div>
          
          {/* Center - Live Stream (wider) */}
          <div className="col-span-6">
            <LiveStream />
          </div>
          
          {/* Right Sidebar - Advertisement Bar (narrower) */}
          <div className="col-span-3">
            <div className="bg-white border rounded-lg p-4 h-full">
              <h3 className="font-semibold text-lg mb-4 text-center">ADVERTISEMENT BAR</h3>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
