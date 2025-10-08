import PublicationCard from '../PublicationCard';

export default function PublicationCardExample() {
  return (
    <div className="p-6 max-w-3xl">
      <PublicationCard
        title="AI-Enhanced EEG Analysis for Neurological Outcome Prediction in Cardiac Arrest Survivors"
        authors="Mitchell S., Johnson R., Chen L., Anderson K."
        journal="Journal of Neurocritical Care"
        year="2024"
        abstract="This study presents a novel AI-powered approach for distinguishing between reversible sedation effects and irreversible brain damage in comatose cardiac arrest patients using longitudinal EEG data analysis."
        doi="10.1234/jnc.2024.001"
        pdfUrl="#"
        tags={["EEG", "Cardiac Arrest", "AI", "Prognosis"]}
      />
    </div>
  );
}
