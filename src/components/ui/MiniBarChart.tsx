"use client";

import React from 'react';

interface BarData {
  label: string;
  value: number;
  color?: string;
}

interface MiniBarChartProps {
  data: BarData[];
  height?: number;
  title?: string;
  valuePrefix?: string;
}

export const MiniBarChart: React.FC<MiniBarChartProps> = ({ data, height = 200, title, valuePrefix = '' }) => {
  const maxVal = Math.max(...data.map(d => d.value), 1);

  return (
    <div>
      {title && <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">{title}</h4>}
      <div className="flex items-end justify-between gap-2" style={{ height }}>
        {data.map((bar, i) => {
          const barH = (bar.value / maxVal) * 100;
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
              <div className="relative w-full flex flex-col items-center">
                {/* Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-slate-600 bg-white shadow-md rounded px-2 py-1 whitespace-nowrap mb-1 pointer-events-none border border-slate-100">
                  {valuePrefix}{bar.value.toLocaleString('pt-BR')}
                </div>
                <div
                  className="w-full max-w-[40px] rounded-t-lg transition-all duration-700 ease-out group-hover:opacity-80 cursor-pointer"
                  style={{
                    height: `${barH}%`,
                    backgroundColor: bar.color || '#1D3557',
                    minHeight: '4px',
                    animationDelay: `${i * 100}ms`,
                  }}
                ></div>
              </div>
              <span className="text-[10px] font-bold text-slate-400 text-center leading-tight">{bar.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
