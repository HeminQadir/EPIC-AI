import DataCard from '../DataCard';
import { Users } from 'lucide-react';

export default function DataCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <DataCard
        title="Total Patients"
        value="247"
        description="Enrolled in current study"
        icon={Users}
        trend={{ value: "12% from last quarter", positive: true }}
      />
    </div>
  );
}
