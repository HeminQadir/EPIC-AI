import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";
import ganttChart from "@assets/gantt_1762172140623.png";

const milestones = [
  {
    date: "Month 1-3",
    title: "Project Kickoff & Data Infrastructure",
    description: "Establishment of project governance, ethics approvals, and initial data collection infrastructure across participating centers.",
    completed: true
  },
  {
    date: "Month 4-8",
    title: "Dataset Harmonization Complete",
    description: "Completion of retrospective data collection and harmonization of multi-center EEG datasets with quality validation.",
    completed: true
  },
  {
    date: "Month 9-15",
    title: "AI Algorithm Development",
    description: "Development and internal validation of machine learning models for EEG analysis and outcome prediction.",
    completed: false
  },
  {
    date: "Month 16-20",
    title: "Prospective Validation Initiation",
    description: "Launch of multi-center prospective validation study with real-time algorithm deployment in ICU settings.",
    completed: false
  },
  {
    date: "Month 21-28",
    title: "Clinical Implementation & Training",
    description: "Completion of validation study, development of training materials, and initiation of clinician education programs.",
    completed: false
  },
  {
    date: "Month 29-36",
    title: "Dissemination & Publication",
    description: "Publication of results in peer-reviewed journals, conference presentations, and open-source software release.",
    completed: false
  }
];

export default function Milestones() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-4">Milestones & Timeline</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Track our progress and planned activities throughout the project lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Milestone Timeline */}
          <div>
            <h2 className="font-heading font-semibold text-2xl mb-6">Project Milestones</h2>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12" data-testid={`milestone-${index}`}>
                    {/* Milestone Point */}
                    <div className="absolute left-0 top-1">
                      {milestone.completed ? (
                        <CheckCircle2 className="w-8 h-8 text-primary bg-background" />
                      ) : (
                        <Circle className="w-8 h-8 text-muted-foreground bg-background" />
                      )}
                    </div>
                    
                    {/* Milestone Content */}
                    <Card className={milestone.completed ? "border-primary/50" : ""}>
                      <CardHeader className="pb-3">
                        <div className="text-xs text-muted-foreground mb-1">{milestone.date}</div>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Gantt Chart */}
          <div>
            <h2 className="font-heading font-semibold text-2xl mb-6">Work Package Timeline</h2>
            <Card>
              <CardHeader>
                <CardTitle>Gantt Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full" data-testid="gantt-chart">
                  <img 
                    src={ganttChart} 
                    alt="Gantt chart showing timeline of work packages WP1-WP5 across 2025-2027" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-accent/30">
              <CardHeader>
                <CardTitle className="text-lg">Timeline Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Duration:</span>
                    <span className="font-medium">36 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Work Packages:</span>
                    <span className="font-medium">4 parallel tracks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Major Milestones:</span>
                    <span className="font-medium">6 key deliverables</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Phase:</span>
                    <span className="font-medium text-primary">AI Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
