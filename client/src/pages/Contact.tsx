import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "research@neuroprognosis.org"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Rikshospitalet, Oslo University Hospital\nSognsvannsveien 20\n0372 Oslo, Norway"
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday\n9:00 AM - 5:00 PM EST"
  }
];

export default function Contact() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our research team for collaborations, inquiries, or more information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-contact-info-${index}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-pre-line"
                          data-testid={`link-contact-${index}`}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[400px] rounded-b-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.1234567890!2d10.7186!3d59.9464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10!3m3!1m2!1s0x46416e61f267f039%3A0x7e4e70d8b1a1f1a1!2sRikshospitalet!5e0!3m2!1sen!2sno!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rikshospitalet Location Map"
                  data-testid="map-location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
