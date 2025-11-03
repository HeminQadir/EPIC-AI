import { useRoute } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Database, Brain, Users, ImageIcon } from "lucide-react";

const workPackageData: Record<string, any> = {
  "wp1-data-collection": {
    title: "WP1: Multi-grading Rule-based EEG Pattern Recognition Algorithm",
    icon: Database,
    summary: "Development of an automated multi-grading rule-based EEG assessment scheme describing and grading normal and pathological EEG patterns controlling for sedative effects.",
    leader: "Nilsen",
    contributors: "Lundqvist, Sunde, Andersen, Qadir, Balasingham",
    personnel: "Postdoc, Ph.D., Nurse",
    content: `Aims and Objectives:
Develop an automated multi-grading rule-based EEG assessment scheme for grading normal and pathological EEG patterns while controlling for sedative effects.

Task 1.1: Establish Project-Specific Database

Establish a dataset combining sedation status (yes/no) with EEG features annotated using SCORE nomenclature. The combined annotation will have four multilevel grading groups:
• Non-sedated/Non-malignant (good prognosis)
• Sedated/Non-malignant
• Non-sedated/Highly Malignant
• Sedated/Highly Malignant

Task 1.2: AI Model Development for Assessment of EEG Patterns

Develop three AI-based models using annotated EEGs from Task 1.1:
• Binary model 1: Sedation status classification
• Binary model 2: Malignancy classification (highly malignant vs. benign)
• Four-class model: Combined sedation and malignancy categorization

Transformer Networks with Attention Mechanisms:

We will employ Transformer networks (TNs) with attention mechanisms to analyze time-series EEG data. EEG recordings will be segmented into n-second windows and transformed into tokens, allowing the TN to build attention maps and identify complex correlations within signals.

The multi-head attention mechanism will analyze both local patterns (adjacent segments) and global patterns (across multiple segments), while emphasizing inter-channel relationships to prioritize the most informative channels for specific neurological conditions.

Task 1.3: Clinical Advisory and Internal Validation

The clinical Ph.D. researcher will collaborate with Postdoc(AI) to verify the developed algorithms based on American Clinical Neurophysiology Society (ACNS) grading. Internal validation will be performed on a withheld validation set using approaches from recent JAMA Neurology studies.

Visualization Tool Development:

A visualization tool will be developed with three key features:
• Attention heatmaps displaying influential time points and channels
• Interactive time-series plots for exploring predictions against raw EEG data
• Channel-wise contribution graphs identifying critical channels for specific conditions

Expected Results and Deliverables:

• Project-specific database (M6)
• Multi-grading rule-based EEG pattern recognition algorithm (M18)
• Development of three AI models (M24)

Target Publications:

• 1 Conference paper
• 3 Journal papers`
  },
  "wp2-ai-development": {
    title: "WP2: Multi-modal Assessment Scheme Extension",
    icon: Brain,
    summary: "Extending the multi-grading rule-based EEG assessment scheme for multi-modal scenarios using EEG pattern recognition combined with NSE and clinical variables.",
    leader: "Nakstad",
    contributors: "Lundqvist, Sunde, Qadir, Nesaragi",
    personnel: "Postdoc, Ph.D., Nurse",
    content: `Aims and Objectives:
Develop an automated multi-grading rule-based assessment similar to WP1, extended for multi-modal scenarios combining EEG pattern recognition, NSE at 24, 48 and 72 hrs, and clinical variables (GCS, PLR, and corneal reflexes) using the NORCAST database.

Task 2.1: Establish Project-Specific Multi-modal Database

Establish an EEG dataset by combining sedation information (yes/no) and HMEP annotated using SCORE nomenclature, adapting data from NORCAST.

Task 2.2: Develop Multi-modal AI Models for Prognostication

Develop three AI models similar to WP1, then map the multi-level graded labeling (four groups) to binary prognostication outcomes (good vs poor).

Multi-modal Framework Extension:

The EEG modality approach from WP1 will be extended to incorporate additional data sources. Each data modality will represent different aspects of neurological function in the TN architecture:
• EEG data processed and tokenized as in WP1
• Additional modalities encoded as supplementary input features
• All inputs synchronized with EEG segments based on clinical condition alignment

The attention mechanism will be extended to handle both intra-modality (e.g., EEG-specific patterns) and inter-modality interactions (e.g., relationships between EEG signals and clinical variables). Specialized heads within the multi-head attention mechanism will focus on correlations within individual modalities and cross-modality interactions, capturing complex, high-dimensional relationships across different data types.

Task 2.3: Clinical Advisory, Validation, and Model Comparison

Follow similar clinical advisory and internal validation steps as WP1. Additionally, compare single-modality (EEG-only) and multimodal model performance using accuracy, precision, recall, and F1-score metrics.

The goal is to use additional information from other modalities to validate EEG assessments, serving as a secondary voting scheme to enhance EEG reliability in neuro-prognostication.

Expected Results and Deliverables:

• Project-specific database (M18)
• Multi-grading assessment scheme for multi-modal scenarios (M30)
• Improved rule-based EEG algorithm from WP1 using additional modalities (M36)

Target Publications:

• 1 Conference paper
• 2 Journal papers`
  },
  "wp3-clinical-validation": {
    title: "WP3: Clinical Validation",
    icon: Users,
    summary: "Prospective validation of AI algorithms in real-world clinical settings across multiple intensive care units.",
    content: `This work package translates the AI algorithms developed in WP2 into clinical practice through rigorous prospective validation in real-world intensive care settings.

Primary Objectives:
• Validate algorithm performance in prospective cohorts across multiple centers
• Assess clinical utility and impact on decision-making
• Evaluate algorithm robustness across diverse patient populations
• Identify implementation barriers and facilitators

Validation Study Design:
The validation employs a multi-center prospective observational design with the following characteristics:

Participating Centers:
- Minimum 5 intensive care units from different regions
- Mix of academic and community hospitals
- Diverse patient demographics and clinical practices
- Varying levels of neurological expertise

Patient Enrollment:
Consecutive adult cardiac arrest survivors requiring ICU admission with continuous EEG monitoring. Inclusion criteria ensure representativeness while exclusion criteria maintain safety and data quality.

Validation Metrics:

Performance Metrics:
- Discrimination (AUC-ROC, precision-recall curves)
- Calibration (Brier score, calibration plots)
- Clinical utility (decision curve analysis)
- Comparative analysis vs. standard prognostic markers

Implementation Metrics:
- Time from EEG recording to prediction
- Algorithm availability and uptime
- User satisfaction and acceptance
- Integration with existing workflows

Clinical Impact Assessment:
The study prospectively tracks how algorithm predictions influence:
- Treatment decisions (continuation vs. withdrawal of life support)
- Resource allocation (ICU length of stay, rehabilitation planning)
- Family counseling and shared decision-making
- Clinician confidence in prognostication

Safety Monitoring:
A dedicated safety monitoring board reviews all cases where algorithm predictions differ significantly from clinical judgment, ensuring patient safety remains paramount.

Subgroup Analyses:
Pre-specified analyses examine algorithm performance across:
- Different arrest etiologies (cardiac vs. non-cardiac)
- Temperature management strategies
- Age groups and comorbidity profiles
- Various sedation protocols

Expected Outcomes:
Demonstration of algorithm clinical validity, identification of optimal implementation strategies, and generation of evidence supporting algorithm adoption in routine clinical practice.`
  },
  "wp4-dissemination": {
    title: "WP4: Dissemination & Implementation",
    description: "Translation of research findings into clinical practice through training programs, publications, and software deployment.",
    icon: Package,
    content: `This work package ensures that research findings reach the clinical community and are translated into improved patient care through comprehensive dissemination and implementation strategies.

Strategic Objectives:
• Publish research findings in high-impact peer-reviewed journals
• Develop educational materials and training programs for clinicians
• Create user-friendly software tools for algorithm deployment
• Establish communities of practice for knowledge exchange
• Engage stakeholders including patients, families, and healthcare providers

Publication Strategy:

Scientific Publications:
- High-impact medical and AI journals for core findings
- Specialized neurocritical care journals for clinical insights
- Open-access publications to maximize reach
- Protocol papers and data descriptors for transparency

Conference Presentations:
- International neurocritical care conferences
- Machine learning and AI in healthcare symposia
- Regional workshops and grand rounds
- Patient advocacy group meetings

Educational Initiatives:

Clinician Training Programs:
- Online modules covering algorithm interpretation
- Hands-on workshops for EEG analysis with AI tools
- Case-based learning sessions
- Certification programs for advanced users

Educational Materials:
- Quick reference guides for ICU staff
- Video tutorials and webinars
- Interactive decision support tools
- FAQ databases and support forums

Software Development and Deployment:

Clinical Software Suite:
- User-friendly interface for EEG upload and analysis
- Real-time algorithm predictions with confidence intervals
- Visualization tools for EEG patterns and trends
- Integration capabilities with hospital IT systems

Open-Source Components:
- Public GitHub repositories for algorithm code
- Documentation and API specifications
- Model cards describing algorithm characteristics
- Containerized deployment solutions

Stakeholder Engagement:

Healthcare Provider Engagement:
- Advisory boards with intensivists and neurologists
- Implementation champions at each participating center
- Regular feedback sessions and iterative improvements
- Professional society endorsements

Patient and Family Engagement:
- Plain-language summaries of research findings
- Patient information leaflets about AI-assisted prognostication
- Support materials for families facing difficult decisions
- Patient advocate involvement in research governance

Policy and Regulatory Considerations:
- Guidance documents for AI algorithm validation
- Ethical frameworks for AI use in end-of-life decisions
- Recommendations for algorithm monitoring and maintenance
- Position statements on AI in critical care

Implementation Science:

Adoption Strategies:
- Implementation toolkits for new centers
- Change management frameworks
- Quality improvement initiatives
- Ongoing performance monitoring

Sustainability Planning:
- Long-term maintenance and update protocols
- Funding models for continued development
- Succession planning for research team
- Integration into clinical guidelines

Expected Outcomes:
Widespread awareness of research findings, adoption of AI tools in clinical practice, improved outcomes for cardiac arrest survivors, and establishment of a sustainable framework for continued innovation in neurological prognostication.`
  }
};

export default function WorkPackageDetail() {
  const [, params] = useRoute("/work-packages/:id");
  const wpId = params?.id;
  
  const wp = wpId ? workPackageData[wpId] : null;

  if (!wp) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-3xl mb-4">Work Package Not Found</h1>
          <p className="text-muted-foreground">The requested work package could not be found.</p>
        </div>
      </div>
    );
  }

  const Icon = wp.icon;

  // Helper function to determine if a paragraph is a heading
  const isHeading = (text: string) => {
    const trimmed = text.trim();
    // Check if it's a Task heading or ends with a colon (subtitle pattern)
    return trimmed.startsWith('Task ') || 
           trimmed.endsWith(':') || 
           trimmed.startsWith('Aims and Objectives') ||
           trimmed.startsWith('Expected Results') ||
           trimmed.startsWith('Target Publications');
  };

  // Helper function to get heading level
  const getHeadingStyle = (text: string) => {
    const trimmed = text.trim();
    // Main section headings (Task X.X)
    if (trimmed.startsWith('Task ')) {
      return "font-heading font-bold text-2xl mt-8 mb-4 text-foreground";
    }
    // Major sections
    if (trimmed.startsWith('Aims and Objectives') || 
        trimmed.startsWith('Expected Results') || 
        trimmed.startsWith('Target Publications')) {
      return "font-heading font-bold text-xl mt-6 mb-3 text-foreground";
    }
    // Subsections (ending with colon)
    return "font-semibold text-lg mt-4 mb-2 text-foreground";
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-4" data-testid="text-wp-title">
            {wp.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {wp.summary}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {wp.content.split('\n\n').map((paragraph: string, index: number) => {
                  if (isHeading(paragraph)) {
                    return (
                      <h3 key={index} className={getHeadingStyle(paragraph)}>
                        {paragraph}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="text-foreground leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
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
              <div className="aspect-video w-full bg-muted rounded-lg flex flex-col items-center justify-center gap-4 p-8" data-testid="placeholder-figure">
                <ImageIcon className="w-16 h-16 text-muted-foreground/50" />
                <p className="text-muted-foreground text-center">
                  Figure placeholder - Illustration showing {wp.title}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
