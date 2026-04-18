import React from 'react';
import Link from 'next/link';

interface PropertyCardProps {
  id: string | number;
  image: string;
  title: string;
  location: string;
  price: string;
  period: string;
  rating?: string;
  status?: string;
  variant?: 'public' | 'admin';
  onClick?: () => void;
  animationDelay?: number;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ 
  id, image, title, location, price, period, rating, status, variant = 'public', onClick, animationDelay = 0 
}) => {
  
  const publicCard = (
    <div className="group cursor-pointer opacity-0 animate-fade-in-up" style={{ animationDelay: `${animationDelay}ms` }} onClick={onClick}>
      <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-xl mb-3 card-hover-lift">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={image} alt={title} />
        <button className="absolute top-2 right-2 sm:top-3 sm:right-3 w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-white/90 hover:text-[#800000] drop-shadow-md transition-colors z-10" onClick={(e) => e.stopPropagation()}>
          <span className="material-symbols-outlined text-xl sm:text-base">favorite</span>
        </button>
      </div>
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <h3 className="font-bold text-zinc-900 line-clamp-1 text-sm sm:text-base">{title}</h3>
          <p className="text-xs sm:text-sm text-zinc-500 line-clamp-1">{location}</p>
          {status && <p className="text-xs sm:text-sm text-zinc-500 line-clamp-1">{status}</p>}
          <div className="mt-1">
            <span className="font-bold text-sm sm:text-base">{price}</span> <span className="text-zinc-500 text-xs sm:text-sm">{period}</span>
          </div>
        </div>
        {rating && (
          <div className="flex items-center space-x-1 shrink-0">
            <span className="material-symbols-outlined text-xs sm:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-xs sm:text-sm">{rating}</span>
          </div>
        )}
      </div>
    </div>
  );

  const adminCard = (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm card-hover-lift flex-1 opacity-0 animate-fade-in-up" style={{ animationDelay: `${animationDelay}ms` }}>
      <div className="h-56 overflow-hidden relative">
        <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={image} />
        {status && (
          <div className={`absolute top-4 ${status?.toLowerCase() === 'alugado' ? 'right-4 bg-[#8B5A2B]/80 text-white' : 'left-4 bg-white/70 text-[#1D3557]'} backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest`}>
            {status}
          </div>
        )}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-[#1D3557] mb-2">{title}</h4>
        <p className="text-sm text-[#1D3557]/70 mb-4 flex items-center gap-1">
          <span className="material-symbols-outlined text-xs">location_on</span> {location}
        </p>
        <div className="flex justify-between items-end border-t border-slate-100 pt-4 mt-2">
          <span className="text-lg font-bold text-[#1D3557]">{price} <span className="text-sm font-normal text-slate-500">{period}</span></span>
          <button className="text-[#2A4B7C] hover:translate-x-1 transition-transform p-1" onClick={onClick}>
             <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );

  return variant === 'public' ? publicCard : adminCard;
};
