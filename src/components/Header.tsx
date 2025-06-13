import { Menu, Search, Bell, User, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3 h-20">  {/* Navbar height */}
              <div className="h-full">
                <img 
                  src="/cjn_logo.png" 
                  alt="Logo" 
                  className="h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg text-blue-600">CONTINUOUS JOB NETWORK</h1>
                <p className="text-sm text-muted-foreground">TV Channel - Bridging Employers & Job Seekers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;