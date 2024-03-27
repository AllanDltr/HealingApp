interface StatProps {
  label: string;
  value: string;
}

export const Stat = ({ label, value }: StatProps) => (
  <div className="text-gray-300">
    {label} <span className="text-white">{value}</span>
  </div>
);
