import TeamMember from '../TeamMember';

export default function TeamMemberExample() {
  return (
    <div className="p-6 max-w-sm">
      <TeamMember
        name="Dr. Sarah Mitchell"
        role="Principal Investigator"
        affiliation="University Medical Center"
        expertise={["EEG Analysis", "Neurocritical Care", "AI Methods"]}
        email="s.mitchell@example.edu"
      />
    </div>
  );
}
