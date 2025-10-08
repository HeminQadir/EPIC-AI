import TeamMember from '../TeamMember';
import { Router } from 'wouter';

export default function TeamMemberExample() {
  return (
    <Router>
      <div className="p-6 max-w-sm">
        <TeamMember
          id="sarah-mitchell"
          name="Dr. Sarah Mitchell"
          role="Principal Investigator"
          affiliation="University Medical Center"
          expertise={["EEG Analysis", "Neurocritical Care", "AI Methods"]}
          email="s.mitchell@example.edu"
        />
      </div>
    </Router>
  );
}
