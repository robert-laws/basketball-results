import Card from './Card';

interface StatBoxProps {
  label: string;
  value: string | number;
  bgColor?: string;
  borderColor?: string;
  className?: string;
}

export default function StatBox({
  label,
  value,
  bgColor = 'bg-gray-50',
  borderColor = 'border-gray-200',
  className = ''
}: StatBoxProps) {
  return (
    <Card variant="elevated" className={`${bgColor} border ${borderColor} p-6 ${className}`}>
      <div className="text-sm font-medium text-gray-600 mb-2">{label}</div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
    </Card>
  );
}
