import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Database, Brain, Users, ArrowRight } from "lucide-react";
import wpsFigure from "@assets/WPS_1759919566154.png";

const workPackages = [
  {
    id: "wp1-data-collection",
    icon: Database,
    title: "WP1: Multi-grading Rule-based EEG Pattern Recognition Algorithm",
    description: "Development of an automated multi-grading rule-based EEG assessment scheme describing and grading normal and pathological EEG patterns controlling for sedative effects."
  },
  {
    id: "wp2-ai-development",
    icon: Brain,
    title: "WP2: AI Algorithm Development",
    description: "Design and implementation of machine learning models for automated EEG analysis and prognostic assessment."
  },
  {
    id: "wp3-clinical-validation",
    icon: Users,
    title: "WP3: Clinical Validation",
    description: "Prospective validation of AI algorithms in real-world clinical settings across multiple intensive care units."
  },
  {
    id: "wp4-dissemination",
    icon: Package,
    title: "WP4: Dissemination & Implementation",
    description: "Translation of research findings into clinical practice through training programs, publications, and software deployment."
  }
];

export default function WorkPackages() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-4">Work Packages</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our research is organized into four interconnected work packages, each addressing critical aspects of the project
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-foreground leading-relaxed">
                  The proposed work is divided into five work packages (WPs). WP1 outlines studies for the development of a multi-grading rule-based EEG pattern-recognition algorithm adjusting for sedation effects to reduce uncertainty in neurophysiological interpretation leading to reduce both FPR and FNR for the considered type of neuro prognostication. WP2 details extension of the proposed multi-graded rule-based EEG assessment algorithm (WP1) for multi-modal scenarios, using a model combining EEG pattern recognition, NSE and standardized neurological scoring (GCS and brain stem reflexes). WP3 is a prospective feasibility study where early WLST is avoided while time-series assessment of EEG patterns after sedation-stop are added, while predictions are kept blinded to the treatment team. Further, design an AI framework that makes predictions over time, which are phrased in terms of either time-to-event outcomes (time-to-awakening or non-awakening). WP4 is for dissemination, communication, and exploitation. WP5 is for project management.
                </p>
              </div>
              <div className="flex justify-center bg-background p-6 rounded-lg">
                <img
                  src={wpsFigure}
                  alt="Work Packages Overview - WP1 through WP5 showing project structure and relationships"
                  className="w-full rounded-md mix-blend-multiply dark:mix-blend-lighten"
                  data-testid="img-work-packages-overview"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workPackages.map((wp, index) => {
            const Icon = wp.icon;
            return (
              <Link key={index} href={`/work-packages/${wp.id}`}>
                <Card className="hover-elevate cursor-pointer group h-full" data-testid={`card-work-package-${index}`}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{wp.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-base">{wp.description}</CardDescription>
                    <div className="flex items-center gap-2 text-sm text-primary pt-2">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
