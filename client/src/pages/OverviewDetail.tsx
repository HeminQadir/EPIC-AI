import { useRoute } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, LineChart, Shield, ImageIcon, Brain } from "lucide-react";
import epicAIFigure from "@assets/EPIC-AI_1759917976097.png";

//todo: remove mock functionality
const sectionData: Record<string, any> = {
  "research-framework": {
    title: "Research Framework",
    icon: Brain,
    summary: "Comprehensive overview of our AI-powered approach to neurological outcome assessment and prognostication.",
    content: `Assessment of neurological outcomes in comatose cardiac arrest (CA) survivors due to post-anoxic coma remains a persistent challenge in clinical practice. These patients are treated with mechanical ventilation and sedation in the intensive care unit (ICU) demanding substantial additional medical resources due to their complex care requirements. Continuing or withdrawing treatment based on multimodal prognostication using clinical, neurophysiological, biochemical markers and neuroimaging is a daunting task for clinicians.

Since the brain is the most vulnerable organ in CA, and severe brain injury remains the primary cause of death, thus monitoring of the brain function for prognostication purposes is of paramount importance. Electroencephalogram (EEG), either continuously or at specified time points, give the best direct access to the current brain function and the present sedation effects. However, the crucial differentiation between reversible sedation effects (affecting EEGs) and irreversible brain damage is a huge problem.

In addition, the other prognostic markers also lack sensitivity and specificity, thereby leaving a significant portion of patients in uncertain prognostic grey areas. This underscores the imperative need to develop standardized rule-based assessment schemes with improved reliability to enhance prediction outcomes by mitigating uncertainty.`,
    hasCustomFigure: true
  },
  "research-objective": {
    title: "Research Objective",
    icon: Target,
    summary: "Enhance neurological prognosis and reduce uncertainty in treating comatose cardiac arrest survivors through improved EEG assessment reliability.",
    content: `Our primary research objective is to fundamentally transform the approach to neurological outcome assessment in comatose cardiac arrest survivors. Current clinical practice faces significant challenges in differentiating between reversible sedation effects and irreversible brain damage, leaving many patients in uncertain prognostic grey areas.

This project aims to address these critical gaps by developing and validating standardized, rule-based assessment schemes that leverage artificial intelligence and advanced EEG analysis. By improving the reliability of prognostic assessments, we seek to:

• Reduce uncertainty in clinical decision-making regarding treatment continuation or withdrawal
• Minimize ethical dilemmas faced by clinicians and families
• Optimize resource allocation in intensive care units
• Improve patient outcomes through more accurate and timely prognostication

The research builds upon decades of neurocritical care expertise, combining clinical insights with cutting-edge computational methods to create tools that can be readily integrated into real-world ICU settings.`
  },
  "ai-powered-analysis": {
    title: "AI-Powered Analysis",
    icon: Lightbulb,
    summary: "Develop multi-grading rule-based AI algorithms to predict neurophysiological outcomes from heterogeneous longitudinal EEG data.",
    content: `Our AI-powered analysis framework represents a paradigm shift in how EEG data is interpreted for prognostic purposes. Traditional EEG interpretation relies heavily on expert visual assessment, which can be subjective and time-consuming, particularly in the context of sedation interference.

We are developing sophisticated machine learning algorithms that can:

• Automatically process and analyze large volumes of longitudinal EEG recordings
• Identify subtle patterns that may escape human observation
• Integrate multiple data modalities including clinical, neurophysiological, and biochemical markers
• Provide probabilistic outcome predictions with quantified uncertainty measures

The algorithms employ a multi-grading approach, classifying EEG patterns into distinct categories based on their prognostic significance. This hierarchical classification system allows for nuanced interpretation that accounts for the complex interplay between sedation effects, underlying brain injury, and recovery potential.

Key technical innovations include advanced signal processing techniques, deep learning architectures specifically designed for time-series medical data, and robust validation frameworks that ensure clinical reliability and generalizability across diverse patient populations.`
  },
  "pattern-recognition": {
    title: "Pattern Recognition",
    icon: LineChart,
    summary: "Identify discernible patterns that distinguish malignant EEG patterns from sedation effects and irreversible brain damage.",
    content: `Pattern recognition is at the heart of our diagnostic innovation. The crucial challenge in post-cardiac arrest care is differentiating between highly malignant EEG patterns (HMEP) that indicate poor prognosis and similar-appearing patterns that result from sedation and are potentially reversible.

Our pattern recognition system addresses this challenge through:

Temporal Pattern Analysis:
• Tracking EEG evolution over hours and days
• Identifying characteristic trajectories associated with recovery vs. deterioration
• Detecting early warning signs of irreversible injury

Sedation Effect Modeling:
• Creating comprehensive models of how different sedative agents affect EEG patterns
• Accounting for pharmacokinetic and pharmacodynamic variability
• Predicting expected EEG changes during sedation weaning

Multi-modal Integration:
• Combining EEG features with clinical context
• Incorporating drug levels, vital signs, and laboratory values
• Leveraging neuroimaging data when available

The system has been trained on extensive datasets from multiple medical centers, ensuring it can recognize patterns across diverse patient populations and clinical settings. This robust pattern recognition capability provides clinicians with unprecedented insight into the underlying state of brain function.`
  },
  "clinical-impact": {
    title: "Clinical Impact",
    icon: Shield,
    summary: "Reduce ethical dilemmas and improve treatment decisions by mitigating uncertainty in prognostic grey areas.",
    content: `The clinical impact of this research extends far beyond technical innovation—it addresses fundamental challenges in critical care medicine that affect patients, families, and healthcare systems daily.

**1. Improved Patient Care:**
• More accurate prognostication enables personalized treatment planning
• Earlier identification of recovery potential allows for optimized rehabilitation timing
• Reduction in unnecessary prolongation of futile care
• Better allocation of ICU resources to patients most likely to benefit

**2. Support for Clinical Decision-Making:**
• Provides evidence-based tools to supplement clinical judgment
• Reduces the cognitive burden on intensivists during complex decision-making
• Facilitates more confident discussions with families about prognosis
• Helps navigate the ethical complexities of life-sustaining treatment decisions

**3. Reducing Prognostic Uncertainty:**
Current prognostic markers leave approximately 30-40% of patients in grey areas where outcome prediction is highly uncertain. Our algorithms aim to reduce this proportion by more than half, providing clearer guidance for the majority of cases while appropriately flagging those requiring additional evaluation.

**4. Healthcare System Benefits:**
• Optimized ICU bed utilization
• Reduced overall healthcare costs through more efficient resource allocation
• Standardized assessment protocols that can be implemented across institutions
• Framework for ongoing quality improvement and outcome tracking

The ultimate goal is to ensure that every patient receives care aligned with their true prognosis and values, while supporting families and clinicians through what is often the most challenging phase of critical illness.`
  }
};

export default function OverviewDetail() {
  const [, params] = useRoute("/overview/:id");
  const sectionId = params?.id;
  
  const section = sectionId ? sectionData[sectionId] : null;

  if (!section) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-3xl mb-4">Section Not Found</h1>
          <p className="text-muted-foreground">The requested overview section could not be found.</p>
        </div>
      </div>
    );
  }

  const Icon = section.icon;

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-4" data-testid="text-section-title">
            {section.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {section.summary}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {section.content.split('\n\n').map((paragraph: string, index: number) => {
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={index} className="text-foreground leading-relaxed mb-4 whitespace-pre-line">
                      {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent/30">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Visual Representation</CardTitle>
            </CardHeader>
            <CardContent>
              {section.hasCustomFigure ? (
                <div className="flex justify-center bg-background p-6 rounded-lg">
                  <img
                    src={epicAIFigure}
                    alt="EPIC-AI Research Framework showing EEG analysis, AI processing, and outcome prediction"
                    className="w-full max-w-4xl rounded-md mix-blend-multiply dark:mix-blend-lighten"
                    data-testid="img-research-framework"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-muted rounded-lg flex flex-col items-center justify-center gap-4 p-8" data-testid="placeholder-figure">
                  <ImageIcon className="w-16 h-16 text-muted-foreground/50" />
                  <p className="text-muted-foreground text-center">
                    Figure placeholder - Illustration showing {section.title.toLowerCase()}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
