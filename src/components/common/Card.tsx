import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'hero';
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
  style
}: CardProps) {
  const baseStyles = 'rounded-lg transition-all duration-300';

  const variantStyles = {
    default: 'bg-white shadow-card hover:shadow-card-hover hover:scale-105',
    elevated: 'bg-white shadow-card-lg',
    hero: 'bg-gradient-to-br shadow-card-lg',
  };

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${clickableStyles} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}
