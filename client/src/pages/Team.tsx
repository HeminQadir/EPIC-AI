import TeamMember from "@/components/TeamMember";
import heminImage from "@assets/hEMIN_1760013406099.jpg";
import kristianImage from "@assets/Kristian-Bernhard-Nilsen_web_1762155715964.jpeg";
import kjetilImage from "@assets/kjsunde_1762155852941.png";
import naimahmedImage from "@assets/Naimahmed-Nesarag_1762156443954.jpg";
import haukurImage from "@assets/haukur_1762157384201.jpeg";
import henningImage from "@assets/henning_1762157995038.jpeg";
import ilangkoImage from "@assets/ilangko_1762158323336.jpg";
import geirImage from "@assets/GO-Andersen_1762164717832.jpg";
import perImage from "@assets/Steinar_1762165340846.jpg";
import lineImage from "@assets/Line-Besos-Ulvin_web_1762165590836.jpg";
import christoferImage from "@assets/anderchr_1762169871360.jpg";

//todo: remove mock functionality
const teamMembers = [
  {
    id: "kjetil-sunde",
    name: "Prof. Kjetil Sunde",
    role: "Project Leader",
    affiliation: "Dept of Anesthesia and Intensive Care Medicine, OUS and Institute of Clinical Medicine, UiO",
    expertise: ["Cardiac Arrest", "Post-Resuscitation Care", "Neurocritical Care"],
    email: "kjetil.sunde@medisin.uio.no",
    secondaryEmail: "UXKJSU@ous-hf.no",
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
    role: "Medical Specialist, PhD Student",
    affiliation: "Oslo University Hospital",
    expertise: ["Neuroscience", "Neurophysiology"],
    email: "haugud@ous-hf.no",
    image: haukurImage
  },
  {
    id: "henning-wimmer",
    name: "Dr. Henning Wimmer",
    role: "Intensivist",
    affiliation: "Oslo University Hospital Department of Neurology",
    expertise: ["Neurology", "Clinical Neurophysiology", "Intensive Care"],
    email: "UXWIMH@ous-hf.no",
    image: henningImage
  },
  {
    id: "line-maria",
    name: "Dr. Line Bédos Ulvin",
    role: "Consultant, PhD Student, MD",
    affiliation: "Oslo University Hospital Department of Neurology",
    expertise: ["Neurology", "Clinical Neurophysiology", "Epilepsy", "Status Epilepticus"],
    email: "linbed@ous-hf.no",
    image: lineImage
  },
  {
    id: "ilangko-balasingham",
    name: "Prof. Ilangko Sellappah Balasingham",
    role: "Professor",
    affiliation: "Faculty of Information Technology and Electrical Engineering, NTNU",
    expertise: ["Medical Signal Processing", "Communications", "Biomedical Sensor Networks"],
    email: "ilangko.balasingham@ntnu.no",
    secondaryEmail: "i.s.balasingham@ous-research.no",
    image: ilangkoImage
  },
  {
    id: "geir-andersen",
    name: "Geir Øystein Andersen",
    role: "Senior Cardiologist, MD, PhD",
    affiliation: "Department of Cardiology, Oslo University Hospital",
    expertise: ["Clinical Trials", "Translational Research", "Cardiac Intensive Care"],
    email: "uxgend@ous-hf.no",
    image: geirImage
  },
  {
    id: "per-halvorsen",
    name: "Prof. Per Steinar Halvorsen",
    role: "Consultant, MD, PhD",
    affiliation: "Oslo University Hospital and University of Oslo",
    expertise: ["Cardiology", "Clinical Research"],
    email: "p.s.halvorsen@medisin.uio.no",
    secondaryEmail: "sthalvor@ous-hf.no",
    image: perImage
  },
  {
    id: "christofer-lundqvist",
    name: "Prof. Christofer Lundqvist",
    role: "Consultant Neurologist, Professor II",
    affiliation: "Akershus University Hospital (AHUS)",
    expertise: ["Neurology", "Prognostication", "Long-term Outcomes", "Neurophysiology"],
    email: "a.c.lundqvist@medisin.uio.no",
    image: christoferImage
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
