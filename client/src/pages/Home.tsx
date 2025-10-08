import Hero from "@/components/Hero";
import ProjectOverviewSection from "@/components/ProjectOverviewSection";
import epicAIFigure from "@assets/EPIC-AI_1759917976097.png";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="font-heading text-3xl font-semibold mb-6 text-center">Research Framework</h2>
            
            <div className="flex justify-center mb-8 bg-background p-6 rounded-lg">
              <img
                src={epicAIFigure}
                alt="EPIC-AI Research Framework showing EEG analysis, AI processing, and outcome prediction"
                className="w-full max-w-4xl rounded-md mix-blend-multiply dark:mix-blend-lighten"
                data-testid="img-research-framework"
              />
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-foreground leading-relaxed">
                Assessment of neurological outcomes in comatose cardiac arrest (CA) survivors due to post-anoxic coma remains a persistent challenge in clinical practice. These patients are treated with mechanical ventilation and sedation in the intensive care unit (ICU) demanding substantial additional medical resources due to their complex care requirements. Continuing or withdrawing treatment based on multimodal prognostication using clinical, neurophysiological, biochemical markers and neuroimaging is a daunting task for clinicians.
              </p>
              <p className="text-foreground leading-relaxed">
                Since the brain is the most vulnerable organ in CA, and severe brain injury remains the primary cause of death, thus monitoring of the brain function for prognostication purposes is of paramount importance. Electroencephalogram (EEG), either continuously or at specified time points, give the best direct access to the current brain function and the present sedation effects. However, the crucial differentiation between reversible sedation effects (affecting EEGs) and irreversible brain damage is a huge problem.
              </p>
              <p className="text-foreground leading-relaxed">
                In addition, the other prognostic markers also lack sensitivity and specificity, thereby leaving a significant portion of patients in uncertain prognostic grey areas. This underscores the imperative need to develop standardized rule-based assessment schemes with improved reliability to enhance prediction outcomes by mitigating uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProjectOverviewSection />
    </>
  );
}
