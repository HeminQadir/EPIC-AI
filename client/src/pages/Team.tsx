import TeamMember from "@/components/TeamMember";

//todo: remove mock functionality
const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Principal Investigator",
    affiliation: "Department of Neurology, University Medical Center",
    expertise: ["EEG Analysis", "Neurocritical Care", "AI Methods"],
    email: "s.mitchell@example.edu"
  },
  {
    name: "Dr. Robert Chen",
    role: "Co-Investigator",
    affiliation: "Department of Critical Care Medicine",
    expertise: ["Cardiac Arrest", "Intensive Care", "Clinical Research"],
    email: "r.chen@example.edu"
  },
  {
    name: "Dr. Emily Anderson",
    role: "Research Scientist",
    affiliation: "AI Research Lab, University Medical Center",
    expertise: ["Machine Learning", "Signal Processing", "Data Science"],
    email: "e.anderson@example.edu"
  },
  {
    name: "Dr. Michael Torres",
    role: "Clinical Researcher",
    affiliation: "Department of Neurology",
    expertise: ["Clinical Trials", "Patient Outcomes", "Biostatistics"],
    email: "m.torres@example.edu"
  },
  {
    name: "Dr. Lisa Wang",
    role: "Postdoctoral Fellow",
    affiliation: "Neuroscience Research Institute",
    expertise: ["Neuroimaging", "EEG", "Prognostication"],
    email: "l.wang@example.edu"
  },
  {
    name: "Dr. James Kim",
    role: "Research Associate",
    affiliation: "Department of Biomedical Engineering",
    expertise: ["Algorithm Development", "Deep Learning", "Clinical Applications"],
    email: "j.kim@example.edu"
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
