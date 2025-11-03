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

Since the brain is the most vulnerable organ in CA, and severe brain injury remains the primary cause of death, monitoring of the brain function for prognostication purposes is of paramount importance. Electroencephalogram (EEG), either continuously or at specified time points, gives the best direct access to the current brain function and the present sedation effects. However, the crucial differentiation between reversible sedation effects (affecting EEGs) and irreversible brain damage is a huge problem.

In addition, the other prognostic markers also lack sensitivity and specificity, thereby leaving a significant portion of patients in uncertain prognostic grey areas. This underscores the imperative need to develop standardized rule-based assessment schemes with improved reliability to enhance prediction outcomes by mitigating uncertainty.

This project aims to enhance neurological prognosis, and reduce uncertainty and ethical dilemmas in treating comatose survivors of CA by improving reliability of EEG assessments. To achieve this, we will develop multi-grading rule-based AI algorithms that predict neurophysiological outcomes from heterogeneous longitudinal EEG data. These algorithms will: 1) identify discernible patterns that can distinguish highly malignant EEG patterns (HMEP) associated with sedation from those indicative of irreversible post-anoxic brain damage; 2) incorporate clinical and biochemical prognostic indicators to assess whether they further improve EEG-based outcome prediction; and 3) differentiate EEG patterns between likely awakeners and non-awakeners.

Better prognostication holds the potential to markedly improve care and ethical decision-making among comatose CA survivors. Enabling tailored treatments can optimize resource allocation, curtails healthcare expenses, and mitigate premature withdrawal of life-sustaining therapy (WLST) by reducing the impact of the game of chance through self-fulfilling prophecies.`,
    hasCustomFigure: true
  },
  "research-objective": {
    title: "Research Objective",
    icon: Target,
    summary: "Enhance neurological prognosis and reduce uncertainty in treating comatose cardiac arrest survivors through improved EEG assessment reliability.",
    content: `Our research objectives are strategically designed to address critical gaps in neurological outcome assessment for comatose cardiac arrest survivors. This project pursues three interconnected objectives:

**Objective 1: Multi-grading Rule-based EEG Assessment Scheme**
Design a multi-grading rule-based EEG assessment scheme to identify markers of highly malignant EEG patterns (HMEP), controlling for sedative effects. This foundational objective establishes the framework for reliable EEG interpretation that accounts for the confounding effects of sedation.

**Objective 2: Multimodal Integration**
Extend the multi-grading rule-based EEG assessment scheme for multi-modal scenarios using a model combining clinical variables like GCS (Glasgow Coma Scale), brain stem reflexes, EEG pattern recognition, and NSE (Neuron-Specific Enolase) levels. The reliability of EEG assessments for neuro prognostication is investigated with AI-based multimodal approaches, creating a comprehensive prognostic framework.

**Objective 3: Prospective Study and Time-Series Predictions**
Test feasibility of prospective study where early withdrawal of life-sustaining treatment (WLST) is avoided while time-series assessment of EEG patterns after sedation-withdrawal are added, and predictions are kept blinded to the treatment team. Design an AI framework that makes predictions over time, phrased in terms of either time-to-event outcomes (time-to-awakening/non-awakening) across multiple time horizons (e.g., within the next 24, 48, or 72 hours).

The research builds upon decades of neurocritical care expertise, combining clinical insights with cutting-edge computational methods to create tools that can be readily integrated into real-world ICU settings.`
  },
  "ai-powered-analysis": {
    title: "AI-Powered Analysis & Pattern Recognition",
    icon: Lightbulb,
    summary: "Develop multi-grading rule-based AI algorithms using transformer networks with attention mechanisms to identify discernible patterns that distinguish malignant EEG patterns from sedation effects.",
    content: `Our AI-powered analysis framework leverages cutting-edge transformer networks with attention mechanisms to revolutionize EEG interpretation for prognostic purposes. The annotated EEGs are used to develop three AI-based models: two for binary classification and one for four-class categorization.

**AI Model Architecture:**

The first binary classification model determines whether the patient is sedated or not, while the second distinguishes between highly malignant and benign conditions. The third model is a four-class categorization system that classifies EEG data into one of four categories: non-sedated/non-malignant, sedated/non-malignant, non-sedated/highly malignant, and sedated/highly malignant.

**Transformer Networks with Attention Mechanisms:**

Transformer networks (TNs) with attention mechanisms (AMs) have recently become prominent in natural language processing, largely due to their scalability and their ability to build attention maps that identify correlations between tokens. Their versatility and robustness have led to their adaptation in various advanced applications, including ChatGPT. Given these strengths, TNs present an intriguing avenue for further exploration of time-series EEG data, as they can be leveraged to uncover complex patterns and relationships both within individual EEG channels (intra-channel) and between different channels (inter-channel).

**EEG Tokenization and Pattern Recognition:**

In our approach, we segment EEG recordings into n-second windows, transforming these segments into tokens. This allows our customized TN to process the data and build attention maps. Tokenization of segments facilitates TN to identify complex correlations within the EEG signals.

**Multi-Head Attention for Local and Global Patterns:**

To capture the complex relationships within EEG data, the AM can be customized to focus on both local and global interactions. This involves creating a multi-head AM of TN where different heads are designed to analyze localized patterns within adjacent segments as well as broader patterns across multiple segments. Additionally, considering that EEG data are collected from multiple channels (electrodes), the AM can be tailored to emphasize inter-channel relationships, allowing the model to prioritize and learn from the most informative channels for specific prognostic tasks.

This sophisticated pattern recognition capability provides clinicians with unprecedented insight into differentiating between highly malignant EEG patterns (HMEP) that indicate poor prognosis and similar-appearing patterns that result from sedation and are potentially reversible.`
  },
  "clinical-impact": {
    title: "Clinical Impact",
    icon: Shield,
    summary: "Reduce ethical dilemmas and improve treatment decisions by mitigating uncertainty in prognostic grey areas.",
    content: `This research project aligns with Goal 1 of the research strategy of Oslo University Hospital (OUS) for 2021-2025: "Implement new models for clinical trials that take developments in personalised medicine into account, and include more interdisciplinary aspects in clinical trials." Furthermore, it aligns with Goal 3: "Facilitate the development and use of high-performance computing, including artificial intelligence, in both clinical research and translational research and also as a treatment tool," emphasizing multi-disciplinary research for comprehensive data analysis that can contribute to the quality enhancement of public health.

Early prognosis through reliable prediction of EEG assessments and time-to-awakening in comatose patients after cardiac arrest carries significant clinical and scientific impacts:

**1. Clinical Perspective - Improved Patient Care:**

An accurate early prognosis can enhance patient care by guiding clinicians in tailoring treatments to individual needs. This can:
• Optimize resource allocation and minimize harm by preventing premature withdrawal of life-sustaining treatment (WLST)
• Reduce healthcare costs through more efficient ICU bed utilization
• Ensure ethical decision-making aligned with patient prognosis and values
• Improve crucial discussions with close relatives by providing evidence-based prognostic information
• Enable personalized treatment planning based on reliable outcome predictions
• Support better timing for rehabilitation interventions

**2. Scientific Advancement:**

This project holds significant potential to advance traditional machine learning and deep learning analysis to create a robust prognostic estimation tool with increased certainty towards neurological outcomes among comatose cardiac arrest survivors. Developing sophisticated algorithms for interpreting EEG data can transform clinical decision-making, offering new insights into the intricate dynamics of post-anoxic coma.

**3. Reducing Prognostic Uncertainty:**

Current prognostic markers leave approximately 30-40% of patients in grey areas where outcome prediction is highly uncertain. Our algorithms aim to reduce this proportion significantly, providing clearer guidance for the majority of cases while appropriately flagging those requiring additional evaluation.

**4. Healthcare System Benefits:**

• Standardized assessment protocols that can be implemented across institutions
• Framework for ongoing quality improvement and outcome tracking
• Contribution to the development of high-performance computing applications in healthcare
• Support for interdisciplinary clinical research methodologies

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
