interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

export const SkillCard = ({ icon, label }: SkillCardProps) => {
  return (
    <div className="flex flex-col cursor-pointer items-center justify-center space-y-2 border border-base-100 p-2 rounded-md hover:bg-accent-500">
      <div className="text-accent">{icon}</div>
      <span>{label}</span>
    </div>
  );
};
