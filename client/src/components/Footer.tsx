import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Project Overview", path: "/" },
    { label: "Research Team", path: "/team" },
    { label: "Work Packages", path: "/work-packages" },
    { label: "Publications", path: "/publications" },
    { label: "Data & Results", path: "/results" },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">EPIC-AI</h3>
            <p className="text-sm text-muted-foreground">
              Advancing neurological outcome assessment in cardiac arrest survivors
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-footer-email">
                  research@neuroprognosis.org
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Medical Research Center<br />123 Research Drive</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Research Partners</h4>
            <p className="text-sm text-muted-foreground">
              In collaboration with leading medical institutions and research centers
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} EPIC-AI Research Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
