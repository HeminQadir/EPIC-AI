import TeamMember from "@/components/TeamMember";

//todo: remove mock functionality
const teamMembers = [
  {
    id: "kjetil-sunde",
    name: "Dr. Kjetil Sunde",
    role: "Project Leader",
    affiliation: "Dept of Anesthesia and Intensive Care Medicine, OUS and Institute of Clinical Medicine, UiO",
    expertise: ["Cardiac Arrest", "Post-Resuscitation Care", "Neurocritical Care"],
    email: "kjetil.sunde@medisin.uio.no"
  },
  {
    id: "kristian-nilsen",
    name: "Dr. Kristian Bernard Nilsen",
    role: "Co-Investigator",
    affiliation: "Department of Neurology, OUS",
    expertise: ["Clinical Neurophysiology", "Applied Neurophysiology", "AI in Healthcare"],
    email: "kristian.nilsen@oslo-universitetssykehus.no"
  },
  {
    id: "hemin-qadir",
    name: "Dr. Hemin Qadir",
    role: "Senior AI Scientist",
    affiliation: "Intervention Centre, Oslo University Hospital",
    expertise: ["Machine Learning", "Deep Learning", "Multimodal AI"],
    email: "hemin.qadir@oslo-universitetssykehus.no"
  },
  {
    id: "naimahmed-nesaragi",
    name: "Naimahmed Nesaragi",
    role: "AI Researcher",
    affiliation: "Intervention Centre, Oslo University Hospital",
    expertise: ["Machine Learning", "Signal Processing"],
    email: "naimahmed.nesaragi@oslo-universitetssykehus.no"
  },
  {
    id: "haukur-gudmundsson",
    name: "Dr. Haukur Tyr Gudmundsson",
    role: "PhD Student",
    affiliation: "Oslo University Hospital",
    expertise: ["Neuroscience", "Neurophysiology"],
    email: "haukur.gudmundsson@oslo-universitetssykehus.no"
  }
];

export default function Team() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-4">Research Team</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our multidisciplinary team combines expertise in neurology, critical care, and artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
