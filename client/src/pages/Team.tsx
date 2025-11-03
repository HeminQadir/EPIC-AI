import TeamMember from "@/components/TeamMember";
import heminImage from "@assets/hEMIN_1760013406099.jpg";
import kristianImage from "@assets/Kristian-Bernhard-Nilsen_web_1762155715964.jpeg";
import kjetilImage from "@assets/kjsunde_1762155852941.png";
import naimahmedImage from "@assets/Naimahmed-Nesarag_1762156443954.jpg";

//todo: remove mock functionality
const teamMembers = [
  {
    id: "kjetil-sunde",
    name: "Prof. Kjetil Sunde",
    role: "Project Leader",
    affiliation: "Dept of Anesthesia and Intensive Care Medicine, OUS and Institute of Clinical Medicine, UiO",
    expertise: ["Cardiac Arrest", "Post-Resuscitation Care", "Neurocritical Care"],
    email: "kjetil.sunde@medisin.uio.no",
    image: kjetilImage
  },
  {
    id: "kristian-nilsen",
    name: "Prof. Kristian Bernard Nilsen",
    role: "Professor and Head of Section",
    affiliation: "Oslo University Hospital, Section of Clinical Neurophysiology, Department of Neurology",
    expertise: ["Clinical Neurophysiology", "Neurology", "Artificial Intelligence", "Clinical Studies", "Innovation"],
    email: "kristian.bernhard.nilsen@ous-hf.no",
    image: kristianImage
  },
  {
    id: "hemin-qadir",
    name: "Dr. Hemin Ali Qadir",
    role: "Senior AI Scientist",
    affiliation: "Intervention Centre, Oslo University Hospital",
    expertise: ["Machine Learning", "Deep Learning", "Multimodal AI"],
    email: "hemqad@ous-hf.no",
    image: heminImage
  },
  {
    id: "naimahmed-nesaragi",
    name: "Dr. Naimahmed Nesaragi",
    role: "AI Researcher",
    affiliation: "Intervention Centre, Oslo University Hospital",
    expertise: ["AI", "Machine Learning", "Signal Processing"],
    email: "naines@ous-hf.no",
    image: naimahmedImage
  },
  {
    id: "haukur-gudmundsson",
    name: "Dr. Haukur Tyr Gudmundsson",
    role: "PhD Student",
    affiliation: "Oslo University Hospital",
    expertise: ["Neuroscience", "Neurophysiology"],
    email: "haukur.gudmundsson@oslo-universitetssykehus.no"
  },
  {
    id: "henning-wimmer",
    name: "Dr. Henning Wimmer",
    role: "Neurologist",
    affiliation: "Oslo University Hospital Department of Neurology",
    expertise: ["Neurology", "Clinical Neurophysiology"],
    email: "henning.wimmer@oslo-universitetssykehus.no"
  },
  {
    id: "line-maria",
    name: "Line Maria",
    role: "Neurologist",
    affiliation: "Oslo University Hospital Department of Neurology",
    expertise: ["Neurology", "Clinical Neurophysiology"],
    email: "line.maria@oslo-universitetssykehus.no"
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
