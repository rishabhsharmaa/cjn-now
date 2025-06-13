
import { Download, ExternalLink, FileText, Video, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ResourceGrid = () => {
  const resources = [
    {
      title: "Course Materials",
      type: "PDF",
      description: "Complete Java programming guide with examples",
      icon: FileText,
      color: "bg-red-500"
    },
    {
      title: "Code Examples",
      type: "GitHub",
      description: "All source code from the lecture",
      icon: Code,
      color: "bg-gray-800"
    },
    {
      title: "Practice Exercises",
      type: "Interactive",
      description: "Hands-on coding challenges",
      icon: Video,
      color: "bg-green-500"
    },
    {
      title: "Video Notes",
      type: "PDF",
      description: "Timestamped notes and key points",
      icon: FileText,
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Learning Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource, index) => {
          const IconComponent = resource.icon;
          return (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${resource.color} text-white`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{resource.title}</h4>
                    <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ResourceGrid;
