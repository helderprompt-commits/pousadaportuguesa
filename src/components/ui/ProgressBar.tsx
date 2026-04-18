"use client";

import React from 'react';

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color?: string;
  suffix?: string;
  showFraction?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, max, color = '#1D3557', suffix = '', showFraction = true }) => {
  const percent = max > 0 ? Math.min((value / max) * 100, 100) : 0;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-bold text-slate-700">{label}</span>
        <span className="text-xs font-bold text-slate-500">
          {showFraction ? `${value}/${max}` : `${Math.round(percent)}%`} {suffix}
        </span>
      </div>
      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percent}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};
