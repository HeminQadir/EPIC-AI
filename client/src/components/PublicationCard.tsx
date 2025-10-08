import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, Download } from "lucide-react";
import { useState } from "react";

interface PublicationCardProps {
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract?: string;
  doi?: string;
  pdfUrl?: string;
  tags?: string[];
}

export default function PublicationCard({ 
  title, 
  authors, 
  journal, 
  year, 
  abstract, 
  doi, 
  pdfUrl,
  tags 
}: PublicationCardProps) {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <Card className="hover-elevate" data-testid="card-publication">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg leading-tight mb-2" data-testid="text-publication-title">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-1" data-testid="text-publication-authors">
              {authors}
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-publication-journal">
              {journal}, {year}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-tag-${index}`}>
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {abstract && (
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAbstract(!showAbstract)}
              data-testid="button-toggle-abstract"
            >
              {showAbstract ? "Hide" : "Show"} Abstract
            </Button>
            {showAbstract && (
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed" data-testid="text-abstract">
                {abstract}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {doi && (
            <Button variant="outline" size="sm" asChild data-testid="button-doi">
              <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">
                DOI <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          )}
          {pdfUrl && (
            <Button variant="outline" size="sm" asChild data-testid="button-pdf">
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                PDF <Download className="ml-2 h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
