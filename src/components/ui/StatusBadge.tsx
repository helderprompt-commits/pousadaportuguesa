import React from 'react';

interface StatusBadgeProps {
  status: 'active' | 'pending' | 'expired' | 'available' | 'rented';
  label?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  let baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ";
  let text = label || status;

  switch (status) {
    case 'active':
      baseClasses += "bg-green-100 text-green-800";
      if (!label) text = "Ativa";
      break;
    case 'pending':
      baseClasses += "bg-amber-100 text-amber-800";
      if (!label) text = "Pendente";
      break;
    case 'expired':
      baseClasses += "bg-red-100 text-red-800";
      if (!label) text = "Vencido";
      break;
    case 'available':
      baseClasses += "bg-white/70 text-[#1D3557] backdrop-blur-md";
      if (!label) text = "Disponível";
      break;
    case 'rented':
      baseClasses += "bg-[#8B5A2B]/80 text-white backdrop-blur-md";
      if (!label) text = "Alugado";
      break;
    default:
      baseClasses += "bg-slate-100 text-slate-800";
  }

  return (
    <span className={baseClasses}>
      {text}
    </span>
  );
};
