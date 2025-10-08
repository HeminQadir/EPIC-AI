import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, LineChart, Shield, ArrowRight, Brain } from "lucide-react";

const features = [
  {
    id: "research-framework",
    icon: Brain,
    title: "Research Framework",
    description: "Comprehensive overview of our AI-powered approach to neurological outcome assessment and prognostication."
  },
  {
    id: "research-objective",
    icon: Target,
    title: "Research Objective",
    description: "Enhance neurological prognosis and reduce uncertainty in treating comatose cardiac arrest survivors through improved EEG assessment reliability."
  },
  {
    id: "ai-powered-analysis",
    icon: Lightbulb,
    title: "AI-Powered Analysis",
    description: "Develop multi-grading rule-based AI algorithms to predict neurophysiological outcomes from heterogeneous longitudinal EEG data."
  },
  {
    id: "pattern-recognition",
    icon: LineChart,
    title: "Pattern Recognition",
    description: "Identify discernible patterns that distinguish malignant EEG patterns from sedation effects and irreversible brain damage."
  },
  {
    id: "clinical-impact",
    icon: Shield,
    title: "Clinical Impact",
    description: "Reduce ethical dilemmas and improve treatment decisions by mitigating uncertainty in prognostic grey areas."
  }
];

export default function ProjectOverviewSection() {
  return (
    <section id="project-overview" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl lg:text-5xl mb-4">Project Overview</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advancing the assessment of neurological outcomes in comatose cardiac arrest survivors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={index} href={`/overview/${feature.id}`}>
                <Card className="hover-elevate cursor-pointer group h-full" data-testid={`card-feature-${index}`}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                    <div className="flex items-center gap-2 text-sm text-primary pt-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <Card className="bg-accent/50 mb-6">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">The Challenge</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Assessment of neurological outcomes in comatose cardiac arrest survivors remains a persistent challenge in clinical practice. 
              These patients require mechanical ventilation and sedation in the ICU, demanding substantial medical resources.
            </p>
            <p className="text-muted-foreground">
              The brain is the most vulnerable organ in cardiac arrest, and severe brain injury remains the primary cause of death. 
              EEG monitoring provides the best direct access to brain function, but differentiating between reversible sedation effects 
              and irreversible brain damage is a significant problem. Current prognostic markers lack sensitivity and specificity, 
              leaving many patients in uncertain prognostic grey areas.
            </p>
          </CardContent>
        </Card>

        <Card id="collaboration-opportunities" className="bg-accent/50">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Collaboration Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              We welcome collaborations with other research institutions, clinical centers, and industry partners. 
              If you're interested in contributing to our research or exploring partnership opportunities, 
              please reach out to us using the contact form.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
