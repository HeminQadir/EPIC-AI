import DataCard from "@/components/DataCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Activity, TrendingUp, CheckCircle, Brain, Database } from "lucide-react";

//todo: remove mock functionality
const statsData = [
  {
    title: "Total Patients Enrolled",
    value: "247",
    description: "Across 8 medical centers",
    icon: Users,
    trend: { value: "12% from last quarter", positive: true }
  },
  {
    title: "EEG Recordings",
    value: "10,000",
    description: "Longitudinal data points",
    icon: Activity,
    trend: { value: "8% increase", positive: true }
  },
  {
    title: "Algorithm Accuracy",
    value: "71.8%",
    description: "In outcome prediction",
    icon: TrendingUp,
    trend: { value: "5.2% improvement", positive: true }
  },
  {
    title: "Successful Predictions",
    value: "215",
    description: "Within grey areas",
    icon: CheckCircle,
    trend: { value: "92% accuracy rate", positive: true }
  }
];

const keyFindings = [
  {
    title: "Pattern Differentiation",
    description: "Successfully developed algorithms that distinguish between sedation-induced EEG changes and irreversible brain damage with 71.8% accuracy.",
    icon: Brain
  },
  {
    title: "Prognostic Grey Areas",
    description: "Reduced uncertainty in prognostic grey areas by 43%, enabling more confident clinical decision-making for patient care.",
    icon: Database
  }
];

export default function Results() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-4">Data & Results</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Key findings and outcomes from our ongoing research
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsData.map((stat, index) => (
            <DataCard key={index} {...stat} />
          ))}
        </div>

        <div className="mb-12">
          <h2 className="font-heading font-semibold text-2xl mb-6">Key Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFindings.map((finding, index) => {
              const Icon = finding.icon;
              return (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{finding.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{finding.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="bg-accent/50">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Study Methodology</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              Our research employs a prospective multicenter design, collecting longitudinal EEG data from comatose cardiac arrest survivors 
              in intensive care units. We utilize advanced machine learning algorithms to analyze heterogeneous EEG patterns and develop 
              rule-based prognostic tools.
            </p>
            <p className="text-muted-foreground">
              The study focuses on three key objectives: (1) identifying discernible patterns that distinguish highly malignant EEG patterns 
              associated with sedation from those indicative of irreversible brain damage, (2) improving the reliability of prognostic assessments 
              in grey areas, and (3) reducing uncertainty in clinical decision-making for treatment continuation or withdrawal.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
