import { useRoute } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Database, Brain, Users, ImageIcon } from "lucide-react";

const workPackageData: Record<string, any> = {
  "wp1-data-collection": {
    title: "WP1: Data Collection & Harmonization",
    icon: Database,
    summary: "Systematic collection and standardization of multi-center EEG data, clinical parameters, and outcome measures from cardiac arrest survivors.",
    content: `This work package focuses on establishing a comprehensive, multi-center database of high-quality EEG recordings and associated clinical data from comatose cardiac arrest survivors.

Objectives:
• Develop standardized protocols for EEG data acquisition across participating centers
• Establish quality control measures to ensure data integrity and consistency
• Create a unified data format for harmonizing heterogeneous datasets
• Implement secure data storage and sharing infrastructure compliant with privacy regulations

Data Collection Strategy:
The work package employs both retrospective and prospective data collection approaches. Retrospective data includes historical EEG recordings and clinical outcomes from existing databases, while prospective collection follows patients from admission through long-term follow-up.

Key data elements include:
- Continuous EEG recordings (minimum 24-48 hours)
- Clinical parameters (age, arrest characteristics, cooling protocols)
- Medication records (sedation, anti-epileptics)
- Neurological examination findings
- Neuroimaging results when available
- Outcome assessments at discharge, 3 months, and 6 months

Quality Assurance:
All data undergoes rigorous quality checks, including artifact detection in EEG recordings, validation of clinical parameter ranges, and verification of outcome assessments. Missing data patterns are analyzed and addressed through targeted collection protocols.

Expected Outcomes:
A harmonized dataset of at least 1,000 patients with complete EEG and clinical data, forming the foundation for AI algorithm development and validation in subsequent work packages.`
  },
  "wp2-ai-development": {
    title: "WP2: AI Algorithm Development",
    icon: Brain,
    summary: "Design and implementation of machine learning models for automated EEG analysis and prognostic assessment.",
    content: `This work package is dedicated to developing sophisticated artificial intelligence algorithms capable of analyzing EEG patterns and predicting neurological outcomes in cardiac arrest survivors.

Core Objectives:
• Design deep learning architectures optimized for time-series EEG data analysis
• Develop automated feature extraction methods for identifying prognostic EEG patterns
• Create multi-modal models integrating EEG with clinical and imaging data
• Implement explainable AI techniques for clinical interpretability

Algorithm Development Approach:
The development process employs state-of-the-art machine learning techniques including convolutional neural networks (CNNs) for spatial pattern recognition, recurrent neural networks (RNNs) for temporal dynamics, and transformer architectures for long-range dependencies.

Key Technical Components:

Preprocessing Pipeline:
- Automated artifact removal and noise reduction
- Normalization across different recording devices
- Segmentation into clinically relevant epochs
- Feature engineering from raw signals

Model Architecture:
- Multi-scale temporal convolutions for pattern detection
- Attention mechanisms for highlighting critical segments
- Ensemble methods combining multiple model predictions
- Uncertainty quantification for confidence estimates

Sedation Modeling:
A critical innovation is the explicit modeling of sedation effects on EEG patterns. The algorithms learn to distinguish between reversible sedation-related changes and irreversible brain injury markers through:
- Pharmacokinetic-informed neural networks
- Time-varying covariate models
- Multi-task learning frameworks

Validation Strategy:
Models are validated using cross-validation on the harmonized dataset from WP1, with particular attention to:
- Calibration of probability estimates
- Performance across different subgroups
- Robustness to missing data and artifacts
- Generalization to new centers

The algorithms are designed to provide not just predictions, but also interpretable explanations highlighting which EEG features drive each prognostic assessment.`
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
                {wp.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-foreground leading-relaxed mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
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
