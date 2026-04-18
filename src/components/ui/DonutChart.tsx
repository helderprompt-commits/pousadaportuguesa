"use client";

import React from 'react';

interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerValue?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({ segments, size = 180, strokeWidth = 24, centerLabel, centerValue }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, s) => sum + s.value, 0);

  let cumulativePercent = 0;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        {/* Background track */}
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e2e8f0" strokeWidth={strokeWidth} />
        {/* Segments */}
        {segments.map((seg, i) => {
          const percent = total > 0 ? seg.value / total : 0;
          const dashArray = `${circumference * percent} ${circumference * (1 - percent)}`;
          const dashOffset = -circumference * cumulativePercent;
          cumulativePercent += percent;

          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          );
        })}
      </svg>
      {/* Center Label */}
      {(centerLabel || centerValue) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {centerValue && <span className="text-2xl font-extrabold text-[#1D3557]">{centerValue}</span>}
          {centerLabel && <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{centerLabel}</span>}
        </div>
      )}
    </div>
  );
};
