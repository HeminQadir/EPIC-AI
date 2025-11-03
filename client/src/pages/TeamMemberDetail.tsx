import { useRoute } from "wouter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import { SiLinkedin, SiGooglescholar, SiOrcid, SiResearchgate } from "react-icons/si";
import { Globe } from "lucide-react";
import heminImage from "@assets/hEMIN_1760013406099.jpg";
import kristianImage from "@assets/Kristian-Bernhard-Nilsen_web_1762155715964.jpeg";
import kjetilImage from "@assets/kjsunde_1762155852941.png";
import naimahmedImage from "@assets/Naimahmed-Nesarag_1762156443954.jpg";
import haukurImage from "@assets/haukur_1762157384201.jpeg";
import henningImage from "@assets/henning_1762157995038.jpeg";
import ilangkoImage from "@assets/ilangko_1762158323336.jpg";
import geirImage from "@assets/GO-Andersen_1762164717832.jpg";
import perImage from "@assets/Steinar_1762165340846.jpg";

//todo: remove mock functionality
const teamMembersData: Record<string, any> = {
  "kjetil-sunde": {
    name: "Prof. Kjetil Sunde",
    role: "Project Leader",
    affiliation: "Dept of Anesthesia and Intensive Care Medicine, OUS and Institute of Clinical Medicine, UiO",
    expertise: ["Cardiac Arrest", "Post-Resuscitation Care", "Neurocritical Care"],
    email: "kjetil.sunde@medisin.uio.no",
    secondaryEmail: "UXKJSU@ous-hf.no",
    image: kjetilImage,
    bio: "Prof. Kjetil Sunde is a professor at the Department of Anesthesia and Intensive Care Medicine, OUS and the Institute of Clinical Medicine, UiO. He is heading the \"Brain-Heart\" research group and works in the surgical and neurosurgical ICU at OUS Ullevål. He has extensive research experience in experimental and clinical cardiac arrest and post-resuscitation care studies, and was the main supervisor of NORCAST. He will be the project leader and responsible for WP3.",
    links: {
      institutionPage: "https://www.med.uio.no/klinmed/english/people/aca/kjetilsu/index.html",
      ousPage: "https://ous-research.no/home/oscar/Group+members/11245",
      researchGate: "https://www.researchgate.net/profile/Kjetil-Sunde"
    }
  },
  "kristian-nilsen": {
    name: "Prof. Kristian Bernard Nilsen",
    role: "Professor and Head of Section. Senior Clinical Neurophysiologist (Medical Doctor)",
    affiliation: "Oslo University Hospital, Section of Clinical Neurophysiology, Department of Neurology",
    secondaryAffiliation: "Faculty of Medicine, Institute of Clinical Medicine, University of Oslo",
    expertise: ["Clinical Neurophysiology", "Neurology", "Artificial Intelligence", "Clinical Studies", "Innovation"],
    researchProfile: ["Applied Neurophysiology", "Big Data in Clinical Neurophysiology", "Validation of Clinical Neurophysiological Methods", "Neuropathic Pain", "Peripheral Neuropathies"],
    email: "kristian.bernhard.nilsen@ous-hf.no",
    image: kristianImage,
    bio: "Senior Clinical Neurophysiologist with a background from both technical and medical studies. Head of Section Senior and Professor, leading the research group for Applied Neurophysiology and Innovation at Oslo University Hospital. The group consists of 1 senior researcher, 3 PhD students, 2 post docs, 2 research assistants/coordinators, and 3 senior clinical neurophysiologists with Ph.D.\n\nI have experience as principal investigator for a wide range of projects, including clinical drug studies (5), administrative projects (2), innovation projects (3) and basic research projects (>10). I have 97 peer-reviewed publications, H-index of 32 and more than 4000 citations.",
    links: {
      linkedin: "https://www.linkedin.com/in/kristian-bernhard-nilsen-0b1b322/",
      googleScholar: "https://scholar.google.com/citations?user=wSJeOnsAAAAJ&hl=no&oi=ao",
      institutionPage: "https://www.ous-research.no/no/nevroglimt/CV/19511",
      orcid: "https://orcid.org/0000-0002-4492-2387"
    }
  },
  "hemin-qadir": {
    name: "Dr. Hemin Ali Qadir",
    role: "Senior AI Scientist",
    affiliation: "Intervention Centre, Oslo University Hospital",
    expertise: ["Machine Learning", "Deep Learning", "Multimodal AI"],
    email: "hemqad@ous-hf.no",
    image: heminImage,
    bio: "Dr. Hemin Ali Qadir is a Senior AI Scientist at the Intervention Centre, Oslo University Hospital. He is an expert in machine learning, deep learning, and multimodal AI, bringing advanced computational techniques to medical applications.",
    links: {
      linkedin: "https://www.linkedin.com/in/hemin-qadir-1008ab153/",
      googleScholar: "https://scholar.google.com/citations?user=6TUI_VQAAAAJ&hl=en",
      institutionPage: "https://ous-research.no/home/balasingham/Group-members/24986",
      orcid: "https://orcid.org/0000-0002-9271-5040"
    }
  },
  "naimahmed-nesaragi": {
    name: "Dr. Naimahmed Nesaragi",
    role: "AI Researcher",
    affiliation: "Intervention Centre, Oslo University Hospital",
    expertise: ["AI", "Machine Learning", "Signal Processing"],
    email: "naines@ous-hf.no",
    image: naimahmedImage,
    bio: "Dr. Naimahmed Nesaragi is an AI Researcher at the Intervention Centre, Oslo University Hospital. His expertise in machine learning and signal processing contributes to the development of advanced analytical methods for medical data.",
    links: {
      linkedin: "https://www.linkedin.com/in/naimahmed-nesaragi/",
      googleScholar: "https://scholar.google.com/citations?user=R89OvzEAAAAJ&hl=en",
      institutionPage: "https://ous-research.no/home/balasingham/Group-members/24988"
    }
  },
  "haukur-gudmundsson": {
    name: "Dr. Haukur Tyr Gudmundsson",
    role: "Medical Specialist, PhD Student",
    affiliation: "Oslo University Hospital",
    expertise: ["Neuroscience", "Neurophysiology"],
    email: "haugud@ous-hf.no",
    image: haukurImage,
    bio: "Dr. Haukur Tyr Gudmundsson is a Medical Specialist and PhD student at Oslo University Hospital. He is a PhD student in the EPIC-AI project. His expertise in neuroscience and neurophysiology contributes to advancing our understanding of brain function and neurological outcomes.",
    links: {
      linkedin: "https://linkedin.com/in/example",
      googleScholar: "https://scholar.google.com/citations?user=example",
      institutionPage: "https://oslo-universitetssykehus.no",
      orcid: "https://orcid.org/0000-0000-0000-0002"
    }
  },
  "henning-wimmer": {
    name: "Dr. Henning Wimmer",
    role: "Intensivist",
    affiliation: "Oslo University Hospital Department of Neurology",
    expertise: ["Neurology", "Clinical Neurophysiology", "Intensive Care"],
    email: "UXWIMH@ous-hf.no",
    image: henningImage,
    bio: "Dr. Henning Wimmer is an Intensivist at Oslo University Hospital Department of Neurology. His expertise in neurology, clinical neurophysiology, and intensive care contributes to the critical care management of patients with neurological conditions.",
    links: {
      researchGate: "https://www.researchgate.net/profile/Henning-Wimmer",
      linkedin: "https://www.linkedin.com/in/henning-wimmer-457209128/",
      institutionPage: "https://ous-research.no/home/dam/Group-members/20735"
    }
  },
  "ilangko-balasingham": {
    name: "Prof. Ilangko Sellappah Balasingham",
    role: "Professor",
    affiliation: "Faculty of Information Technology and Electrical Engineering, NTNU",
    secondaryAffiliation: "Head of Information and Communication Technology (ICT) Section, Intervention Centre, Oslo University Hospital",
    expertise: ["Medical Signal Processing", "Communications", "Biomedical Sensor Networks"],
    email: "ilangko.balasingham@ntnu.no",
    secondaryEmail: "i.s.balasingham@ous-research.no",
    image: ilangkoImage,
    bio: "Ilangko Balasingham received the Siv.Ing.(MSc) and Dr.Ing.(PhD) degrees both in signal processing from the Signal Processing Group, Department of Electronic Systems, Norwegian University of Science and Technology (NTNU), Trondheim, Norway in 1993 and 1998, respectively. He did his Master thesis at the University of California in Santa Barbara, USA under the supervision of Prof. Sanjit K. Mitra. His PhD supervisor was Prof. Tor A. Ramstad at NTNU in Trondheim, Norway.\n\nFrom 1998 to 2002, he was employed as a Research Engineer developing video streaming solutions to mobile handheld devices at Fast Search & Transfer ASA, Oslo, Norway. Fast, which was a startup company in 1998, was acquired by Microsoft Inc. in 2008. Since 2002, he has been with the Intervention Centre, Oslo University Hospital - Rikshospitalet, Oslo, Norway as a Senior Research Scientist and Founder and Head of the Biomedical Sensor Network Research Group. He was appointed as a Professor of Medical Signal Processing and Communications at NTNU in 2006. In 2017, he was promoted Head of Section for Medical ICT R&D at the Intervention Center.\n\nHe was Professor by courtesy at the Frontier Institute, Nagoya Institute of Technology, Nagoya, Japan during the academic year 2016-2017.",
    links: {
      googleScholar: "https://scholar.google.com/citations?user=CynghwgAAAAJ&hl=en",
      personalWebsite: "https://www.balasingham.com/",
      institutionPage: "https://www.ntnu.edu/employees/ilangko.balasingham",
      ousPage: "https://ous-research.no/home/balasingham/Group-members/8089"
    }
  },
  "geir-andersen": {
    name: "Geir Øystein Andersen",
    role: "Senior Cardiologist, MD, PhD",
    affiliation: "Department of Cardiology, Oslo University Hospital",
    secondaryAffiliation: "Head of Cardiac Intensive Care Unit and Cardiac Intensive Care Research Unit",
    expertise: ["Clinical Trials", "Translational Research", "Cardiac Intensive Care"],
    email: "uxgend@ous-hf.no",
    image: geirImage,
    bio: "Senior cardiologist Geir Øystein Andersen is a full-time clinician, Head of Cardiac intensive care unit and leader of the Cardiac intensive care research unit. PhD on cardiac alpha-adrenergic receptors. Broad expertise in clinical trials including patients with acute myocardial infarction, acute heart failure and cardiac arrest. Supervised 7 PhD students, around 115 publications.",
    researchProfile: ["Clinical Trials in Intensive Cardiac Care", "Cardiogenic Shock", "Acute Myocardial Infarction", "Cardiac Arrest"],
    links: {
      ousPage: "https://www.ous-research.no/home/cic/Group-members/11491"
    }
  },
  "per-halvorsen": {
    name: "Prof. Per Steinar Halvorsen",
    role: "Consultant, MD, PhD",
    affiliation: "Oslo University Hospital and University of Oslo",
    expertise: ["Cardiology", "Clinical Research"],
    email: "p.s.halvorsen@medisin.uio.no",
    secondaryEmail: "sthalvor@ous-hf.no",
    image: perImage,
    bio: "Prof. Per Steinar Halvorsen is a Consultant with expertise in cardiology and clinical research at Oslo University Hospital and University of Oslo.",
    links: {
      googleScholar: "https://scholar.google.com/citations?user=2ansca4AAAAJ&hl=en",
      institutionPage: "https://www.med.uio.no/klinmed/personer/vit/pershal/index.html",
      ousPage: "https://www.ous-research.no/home/pshalvorsen/Group+members/13705"
    }
  },
  "line-maria": {
    name: "Dr. Line Bédos Ulvin",
    role: "Consultant, PhD Student, MD",
    affiliation: "Oslo University Hospital Department of Neurology",
    expertise: ["Neurology", "Clinical Neurophysiology", "Epilepsy", "Status Epilepticus"],
    email: "linbed@ous-hf.no",
    bio: "Dr. Line Bédos Ulvin is a Consultant and PhD student at Oslo University Hospital Department of Neurology. Her research focuses on epilepsy and status epilepticus, with extensive publications on the predictive performances of scoring systems, treatment approaches, and clinical outcomes in status epilepticus patients. Her work includes validation of EEG criteria for nonconvulsive status epilepticus and evaluation of modern treatment strategies in adult patients.",
    links: {
      ousPage: "https://www.ous-research.no/home/anephys/Group-members/22790"
    }
  }
};

export default function TeamMemberDetail() {
  const [, params] = useRoute("/team/:id");
  const memberId = params?.id;
  
  const member = memberId ? teamMembersData[memberId] : null;

  if (!member) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-3xl mb-4">Team Member Not Found</h1>
          <p className="text-muted-foreground">The requested team member profile could not be found.</p>
        </div>
      </div>
    );
  }

  const initials = member.name.split(' ').map((n: string) => n[0]).join('');

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6" data-testid="text-member-name">
            {member.name}
          </h1>
          
          <div className="flex justify-center mb-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback className="text-3xl font-semibold bg-primary/10 text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          <p className="text-xl text-foreground mb-2" data-testid="text-member-role">{member.role}</p>
          <p className="text-muted-foreground" data-testid="text-member-affiliation">{member.affiliation}</p>
          {member.secondaryAffiliation && (
            <p className="text-muted-foreground mt-1" data-testid="text-member-secondary-affiliation">{member.secondaryAffiliation}</p>
          )}
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Biography</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-foreground leading-relaxed whitespace-pre-line" data-testid="text-member-bio">
                {member.bio}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Research Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium"
                    data-testid={`badge-expertise-${index}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {member.researchProfile && member.researchProfile.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Research Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {member.researchProfile.map((area: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm font-medium"
                      data-testid={`badge-research-profile-${index}`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Professional Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-email"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">
                      Email {member.email.includes('@medisin.uio.no') ? '(UiO)' : member.email.includes('@ous-hf.no') ? '(OUS)' : ''}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">{member.email}</p>
                  </div>
                </a>
              )}

              {member.secondaryEmail && (
                <a
                  href={`mailto:${member.secondaryEmail}`}
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-secondary-email"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Email (OUS-HF)</p>
                    <p className="text-sm text-muted-foreground truncate">{member.secondaryEmail}</p>
                  </div>
                </a>
              )}

              {member.links.linkedin && (
                <a
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-linkedin"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <SiLinkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">LinkedIn Profile</p>
                    <p className="text-sm text-muted-foreground">View professional profile</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              )}

              {member.links.googleScholar && (
                <a
                  href={member.links.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-google-scholar"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <SiGooglescholar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Google Scholar</p>
                    <p className="text-sm text-muted-foreground">View publications and citations</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              )}

              {member.links.personalWebsite && (
                <a
                  href={member.links.personalWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-personal-website"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Personal Website</p>
                    <p className="text-sm text-muted-foreground">Visit personal website</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              )}

              {member.links.institutionPage && (
                <a
                  href={member.links.institutionPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-institution"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">
                      Institution Page {member.links.institutionPage.includes('uio.no') ? '(UiO)' : member.links.institutionPage.includes('ntnu.no') ? '(NTNU)' : ''}
                    </p>
                    <p className="text-sm text-muted-foreground">Faculty profile page</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              )}

              {member.links.ousPage && (
                <a
                  href={member.links.ousPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-ous"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Oslo University Hospital</p>
                    <p className="text-sm text-muted-foreground">Research profile page</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              )}

              {member.links.researchGate && (
                <a
                  href={member.links.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-researchgate"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <SiResearchgate className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">ResearchGate</p>
                    <p className="text-sm text-muted-foreground">View research profile</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              )}

              {member.links.orcid && (
                <a
                  href={member.links.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid="link-orcid"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <SiOrcid className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">ORCID</p>
                    <p className="text-sm text-muted-foreground">Research identifier</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
