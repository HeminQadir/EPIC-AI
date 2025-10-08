import Hero from "@/components/Hero";
import ProjectOverviewSection from "@/components/ProjectOverviewSection";
import proposalFigure from "@assets/ProposalIDEA-1_1759917497023.pdf";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-12 bg-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold mb-6 text-center">Research Framework</h2>
            <div className="flex justify-center">
              <object
                data={proposalFigure}
                type="application/pdf"
                className="w-full max-w-4xl h-[500px] border border-border rounded-md"
                aria-label="Time to Awakening Prediction and Neurological Outcome Prediction Framework"
              >
                <p className="text-center text-muted-foreground p-8">
                  Your browser does not support PDF viewing. 
                  <a href={proposalFigure} download className="text-primary hover:underline ml-1">
                    Download the figure instead.
                  </a>
                </p>
              </object>
            </div>
          </div>
        </div>
      </section>
      <ProjectOverviewSection />
    </>
  );
}
