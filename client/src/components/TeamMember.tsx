import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  expertise: string[];
  email?: string;
  image?: string;
}

export default function TeamMember({ id, name, role, affiliation, expertise, image }: TeamMemberProps) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Link href={`/team/${id}`}>
      <Card className="hover-elevate h-full cursor-pointer group" data-testid="card-team-member">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <h3 className="font-heading font-semibold text-xl" data-testid="text-member-name">{name}</h3>
          <p className="text-sm text-muted-foreground" data-testid="text-member-role">{role}</p>
          <p className="text-xs text-muted-foreground mt-1" data-testid="text-member-affiliation">{affiliation}</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-expertise-${index}`}>
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-primary pt-2">
            <span>View Profile</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
