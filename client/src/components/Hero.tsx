import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
          <Brain className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight mb-6 max-w-4xl mx-auto">
          Advanced Neurological Outcome Assessment
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
          Enhancing prognosis for comatose cardiac arrest survivors through AI-powered EEG analysis and multimodal prognostication
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group" data-testid="button-learn-more">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" data-testid="button-view-publications">
            View Publications
          </Button>
        </div>
      </div>
    </section>
  );
}
