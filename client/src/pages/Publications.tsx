import PublicationCard from "@/components/PublicationCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

//todo: remove mock functionality
const publications = [
  {
    title: "AI-Enhanced EEG Analysis for Neurological Outcome Prediction in Cardiac Arrest Survivors",
    authors: "Mitchell S., Chen R., Anderson E., Torres M.",
    journal: "Journal of Neurocritical Care",
    year: "2024",
    abstract: "This study presents a novel AI-powered approach for distinguishing between reversible sedation effects and irreversible brain damage in comatose cardiac arrest patients using longitudinal EEG data analysis.",
    doi: "10.1234/jnc.2024.001",
    pdfUrl: "#",
    tags: ["EEG", "Cardiac Arrest", "AI", "Prognosis"]
  },
  {
    title: "Multimodal Prognostication in Post-Anoxic Coma: A Systematic Review",
    authors: "Wang L., Mitchell S., Kim J.",
    journal: "Critical Care Medicine",
    year: "2024",
    abstract: "A comprehensive review of current prognostic markers in post-anoxic coma, highlighting the challenges of sedation interference and the need for improved assessment tools.",
    doi: "10.1234/ccm.2024.015",
    pdfUrl: "#",
    tags: ["Review", "Prognostication", "Post-Anoxic Coma"]
  },
  {
    title: "Rule-Based Algorithm Development for EEG Pattern Recognition in ICU Settings",
    authors: "Anderson E., Kim J., Chen R.",
    journal: "IEEE Transactions on Biomedical Engineering",
    year: "2023",
    abstract: "Development of standardized rule-based algorithms for automated EEG pattern recognition, focusing on differentiation between malignant patterns and sedation effects.",
    doi: "10.1234/tbme.2023.089",
    pdfUrl: "#",
    tags: ["Algorithm", "EEG", "Pattern Recognition"]
  },
  {
    title: "Clinical Validation of AI-Based Prognostic Tools in Cardiac Arrest Outcomes",
    authors: "Torres M., Mitchell S., Wang L., Chen R.",
    journal: "Neurocritical Care",
    year: "2023",
    abstract: "A prospective validation study of AI-based prognostic tools in a multicenter cohort of cardiac arrest survivors, demonstrating improved accuracy over traditional methods.",
    doi: "10.1234/ncc.2023.042",
    pdfUrl: "#",
    tags: ["Clinical Trial", "Validation", "AI"]
  }
];

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = publications.filter(pub =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-4">Publications</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Peer-reviewed research and findings from our team
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search publications..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-testid="input-search-publications"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {filteredPublications.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
          
          {filteredPublications.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No publications found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
