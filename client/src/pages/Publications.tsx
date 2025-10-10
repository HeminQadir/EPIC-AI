import PublicationCard from "@/components/PublicationCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

//todo: remove mock functionality
const publications = [
  {
    title: "Biaxialformer: Leveraging Channel Independence and Inter-Channel Correlations in EEG Signal Decoding for Predicting Neurological Outcomes",
    authors: "Nesaragi N., Qadir H.A., Halvorsen P.S., Balasingham I.",
    journal: "arXiv preprint arXiv:2507.02879",
    year: "2025",
    abstract: "Accurate decoding of EEG signals requires comprehensive modeling of both temporal dynamics within individual channels and spatial dependencies across channels. We propose Biaxialformer, characterized by a meticulously engineered two-stage attention-based framework that independently captures both sequence-specific (temporal) and channel-specific (spatial) EEG information. Using the multicenter I-CARE data from five hospitals, we validate the robustness and generalizability with an average AUC 0.7688, AUPRC 0.8643, and F1 0.6518 in a cross-hospital scenario.",
    doi: "10.48550/arXiv.2507.02879",
    pdfUrl: "https://arxiv.org/pdf/2507.02879",
    tags: ["EEG", "Transformer", "Neurological Outcomes", "Machine Learning", "Signal Processing"]
  },
  {
    title: "A Multi-channel EEG Data Analysis for Poor Neuro-prognostication in Comatose Patients with Self and Cross-channel Attention Mechanism",
    authors: "Qadir H.A., Nesaragi N., Halvorsen P.S., Balasingham I.",
    journal: "2023 Computing in Cardiology (CinC), vol. 50, pp. 1-4. IEEE",
    year: "2023",
    abstract: "This work investigates the predictive potential of bipolar electroencephalogram (EEG) recordings towards efficient prediction of poor neurological outcomes. A retrospective design using a hybrid deep learning approach is utilized to optimize an objective function aiming for high specificity. A multi-channel EEG array of 18 bipolar channel pairs from a randomly selected 5-minute segment in an hour is kept. The feature encoder extricates local temporal and spatial features, while the following position encoding and attention mechanisms attempt to capture global temporal dependencies.",
    doi: "10.48550/arXiv.2310.03756",
    pdfUrl: "https://arxiv.org/pdf/2310.03756",
    tags: ["EEG", "Attention Mechanism", "Neuro-prognostication", "Deep Learning", "Comatose Patients"]
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
