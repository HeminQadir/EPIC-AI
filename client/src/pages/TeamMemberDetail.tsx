import { useRoute } from "wouter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";
import { SiLinkedin, SiGooglescholar, SiOrcid } from "react-icons/si";

//todo: remove mock functionality
const teamMembersData: Record<string, any> = {
  "kjetil-sunde": {
    name: "Dr. Kjetil Sunde",
    role: "Project Leader",
    affiliation: "Dept of Anesthesia and Intensive Care Medicine, OUS and Institute of Clinical Medicine, UiO",
    expertise: ["Cardiac Arrest", "Post-Resuscitation Care", "Neurocritical Care"],
    email: "kjetil.sunde@medisin.uio.no",
    bio: "Dr. Kjetil Sunde is a professor at the Department of Anesthesia and Intensive Care Medicine, OUS and the Institute of Clinical Medicine, UiO. He is heading the \"Brain-Heart\" research group and works in the surgical and neurosurgical ICU at OUS Ullevål. He has extensive research experience in experimental and clinical cardiac arrest and post-resuscitation care studies, and was the main supervisor of NORCAST. He will be the project leader and responsible for WP3.",
    links: {
      linkedin: "https://linkedin.com/in/example",
      googleScholar: "https://scholar.google.com/citations?user=example",
      institutionPage: "https://www.med.uio.no/klinmed/english/people/aca/kjetils/",
      orcid: "https://orcid.org/0000-0000-0000-0000"
    }
  },
  "robert-chen": {
    name: "Dr. Robert Chen",
    role: "Co-Investigator",
    affiliation: "Department of Critical Care Medicine",
    expertise: ["Cardiac Arrest", "Intensive Care", "Clinical Research"],
    email: "r.chen@example.edu",
    bio: "Dr. Robert Chen brings extensive clinical expertise in critical care medicine and cardiac arrest resuscitation. His work focuses on improving patient outcomes through evidence-based protocols and advanced monitoring techniques. Dr. Chen has been instrumental in establishing multicenter collaborations for this research initiative.",
    links: {
      linkedin: "https://linkedin.com/in/example",
      googleScholar: "https://scholar.google.com/citations?user=example",
      institutionPage: "https://university.edu/faculty/robert-chen"
    }
  },
  "emily-anderson": {
    name: "Dr. Emily Anderson",
    role: "Research Scientist",
    affiliation: "AI Research Lab, University Medical Center",
    expertise: ["Machine Learning", "Signal Processing", "Data Science"],
    email: "e.anderson@example.edu",
    bio: "Dr. Emily Anderson is a computational neuroscientist specializing in machine learning applications for medical diagnostics. Her expertise in signal processing and algorithm development has been crucial in creating the AI models used in this project. She has a strong track record of translating complex algorithms into clinically useful tools.",
    links: {
      linkedin: "https://linkedin.com/in/example",
      googleScholar: "https://scholar.google.com/citations?user=example",
      institutionPage: "https://university.edu/faculty/emily-anderson",
      orcid: "https://orcid.org/0000-0000-0000-0001"
    }
  },
  "michael-torres": {
    name: "Dr. Michael Torres",
    role: "Clinical Researcher",
    affiliation: "Department of Neurology",
    expertise: ["Clinical Trials", "Patient Outcomes", "Biostatistics"],
    email: "m.torres@example.edu",
    bio: "Dr. Michael Torres is an experienced clinical researcher with expertise in designing and conducting multicenter trials. His background in biostatistics ensures rigorous data analysis and interpretation. Dr. Torres oversees the clinical validation aspects of our AI algorithms.",
    links: {
      linkedin: "https://linkedin.com/in/example",
      googleScholar: "https://scholar.google.com/citations?user=example",
      institutionPage: "https://university.edu/faculty/michael-torres"
    }
  },
  "lisa-wang": {
    name: "Dr. Lisa Wang",
    role: "Postdoctoral Fellow",
    affiliation: "Neuroscience Research Institute",
    expertise: ["Neuroimaging", "EEG", "Prognostication"],
    email: "l.wang@example.edu",
    bio: "Dr. Lisa Wang completed her PhD in neuroscience with a focus on neuroimaging and EEG analysis. Her research integrates multimodal brain monitoring techniques to improve prognostic accuracy. She is developing novel biomarkers for early outcome prediction in comatose patients.",
    links: {
      linkedin: "https://linkedin.com/in/example",
      googleScholar: "https://scholar.google.com/citations?user=example",
      institutionPage: "https://university.edu/faculty/lisa-wang",
      orcid: "https://orcid.org/0000-0000-0000-0002"
    }
  },
  "james-kim": {
    name: "Dr. James Kim",
    role: "Research Associate",
    affiliation: "Department of Biomedical Engineering",
    expertise: ["Algorithm Development", "Deep Learning", "Clinical Applications"],
    email: "j.kim@example.edu",
    bio: "Dr. James Kim is a biomedical engineer specializing in deep learning applications for medical devices. His work focuses on developing robust algorithms that can operate in real-world clinical environments. He is responsible for the technical implementation and optimization of our AI systems.",
    links: {
      linkedin: "https://linkedin.com/in/example",
      googleScholar: "https://scholar.google.com/citations?user=example",
      institutionPage: "https://university.edu/faculty/james-kim"
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
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Biography</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed" data-testid="text-member-bio">
                {member.bio}
              </p>
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
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground truncate">{member.email}</p>
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
                    <p className="text-sm font-medium">Institution Page</p>
                    <p className="text-sm text-muted-foreground">Faculty profile page</p>
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
