import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'era' | 'series' | 'default';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = 'inline-block px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap';

  const variantStyles = {
    era: 'bg-blue-100 text-blue-800',
    series: 'bg-yellow-100 text-yellow-800',
    default: 'bg-gray-200 text-gray-800',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
