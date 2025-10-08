import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DataCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export default function DataCard({ title, value, description, icon: Icon, trend }: DataCardProps) {
  return (
    <Card data-testid="card-data">
      <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold font-mono" data-testid="text-data-value">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1" data-testid="text-data-description">
            {description}
          </p>
        )}
        {trend && (
          <div className={`text-xs mt-2 ${trend.positive ? 'text-chart-2' : 'text-destructive'}`} data-testid="text-data-trend">
            {trend.positive ? '↑' : '↓'} {trend.value}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
