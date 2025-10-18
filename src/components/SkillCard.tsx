import { useTilt } from '../hooks/useTilt';

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

export const SkillCard = ({ icon, label }: SkillCardProps) => {
  const { ref, style } = useTilt({ maxTilt: 12, scale: 1.05 });

  return (
    <div
      ref={ref}
      style={style}
      className="card card-compact bg-base-200 border border-base-100 cursor-pointer hover:bg-accent hover:text-accent-content transition-colors"
    >
      <div className="card-body items-center justify-center">
        <div className="text-4xl">{icon}</div>
        <span className="card-title text-sm">{label}</span>
      </div>
    </div>
  );
};
