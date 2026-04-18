import React, { useEffect, useState } from 'react';

interface KpiCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendLabel?: string;
  variant?: 'default' | 'primary' | 'warning';
  icon: string;
  animationDelay?: number;
}

export const KpiCard: React.FC<KpiCardProps> = ({ label, value, trend, trendLabel, variant = 'default', icon, animationDelay = 0 }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), animationDelay);
    return () => clearTimeout(timer);
  }, [animationDelay]);

  // Determine styling based on variant
  let containerClasses = "p-8 rounded-xl relative overflow-hidden group card-hover-lift opacity-0 ";
  let labelClasses = "font-bold text-xs uppercase tracking-widest mb-2 ";
  let valueClasses = "text-4xl font-headline font-extrabold ";
  let trendClasses = "mt-4 flex items-center gap-2 text-xs font-bold ";
  let iconClasses = "material-symbols-outlined absolute -bottom-4 -right-4 text-9xl transition-transform group-hover:scale-110 duration-500 ";

  switch (variant) {
    case 'primary':
      containerClasses += "bg-primary text-white shadow-xl";
      labelClasses += "text-primary-fixed-dim";
      trendClasses += "text-on-primary-container";
      iconClasses += "text-white/10";
      break;
    case 'warning':
      containerClasses += "bg-secondary-container";
      labelClasses += "text-on-secondary-container";
      valueClasses += "text-primary";
      trendClasses += "text-on-secondary-container";
      iconClasses += "text-primary/5";
      break;
    default:
      containerClasses += "bg-surface-container-lowest shadow-sm border border-outline-variant/10";
      labelClasses += "text-secondary";
      valueClasses += "text-primary";
      trendClasses += trend?.includes('-') ? "text-red-500" : "text-emerald-600";
      iconClasses += "text-secondary/5";
  }

  if (isMounted) {
    containerClasses = containerClasses.replace("opacity-0", "animate-fade-in-up");
  }

  return (
    <div className={containerClasses}>
      <div className="relative z-10">
        <p className={labelClasses}>{label}</p>
        <h3 className={valueClasses}>{value}</h3>
        {(trend || trendLabel) && (
          <div className={trendClasses}>
            {trend && <span className="material-symbols-outlined text-sm">{trend.includes('-') ? 'trending_down' : 'trending_up'}</span>}
            {trend} {trendLabel}
          </div>
        )}
      </div>
      <span className={iconClasses}>{icon}</span>
      {variant === 'primary' && <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>}
    </div>
  );
};
