
import { TrendingUp, Users, Briefcase, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const StatsDashboard = () => {
  const stats = [
    { 
      icon: Users, 
      label: "OPENING", 
      value: "2000", 
      change: "Live", 
      color: "bg-orange-500",
      bgColor: "bg-orange-100"
    },
    { 
      icon: TrendingUp, 
      label: "INTERVIEWS", 
      value: "3500", 
      change: "Active", 
      color: "bg-yellow-500",
      bgColor: "bg-yellow-100"
    },
    { 
      icon: Briefcase, 
      label: "OFFERED", 
      value: "1300", 
      change: "Today", 
      color: "bg-blue-500",
      bgColor: "bg-blue-100"
    },
    { 
      icon: Clock, 
      label: "STATS DASHBOARD", 
      value: "", 
      change: "", 
      color: "bg-gray-500",
      bgColor: "bg-gray-100"
    },
  ];

  return (
    <div className="w-full">
      {/* Stats Dashboard Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-blue-600 bg-blue-50 py-2 px-4 rounded-lg inline-block">
          STATS DASHBOARD
        </h2>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className={`p-4 text-center ${stat.bgColor} border-2`}>
              <div className="flex flex-col items-center gap-2">
                <div className={`p-3 ${stat.color} rounded-lg`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div>
                  {stat.value && (
                    <div className="text-4xl font-bold text-white bg-gray-800 px-6 py-3 rounded mb-2">
                      {stat.value}
                    </div>
                  )}
                  <p className="text-sm font-bold text-gray-800">{stat.label}</p>
                  {stat.change && (
                    <span className="text-xs text-gray-600 font-medium">{stat.change}</span>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StatsDashboard;
