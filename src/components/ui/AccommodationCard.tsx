"use client";

import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  dates: string;
  price: number;
  rating: number;
  imageUrl: string;
  badge?: string;
}

export function AccommodationCard({ title, dates, price, rating, imageUrl, badge }: Props) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col gap-3 group cursor-pointer"
    >
      <div className="relative aspect-[4/3] sm:aspect-[1/1] xl:aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl">
        {badge && (
          <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-foreground shadow-sm">
            {badge}
          </div>
        )}
        <button className="absolute top-3 md:top-4 right-3 md:right-4 z-10 p-2 text-white/80 hover:text-white hover:scale-110 active:scale-95 transition-all">
          <Heart className="w-6 h-6 drop-shadow-md" />
        </button>
        <img 
          src={imageUrl} 
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      
      <div className="flex flex-col gap-1 px-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-foreground text-base truncate pr-2">{title}</h3>
          <div className="flex items-center gap-1 text-sm font-medium">
            <Star className="w-4 h-4 fill-foreground" />
            <span>{rating.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{dates}</p>
        <p className="font-medium text-foreground text-sm mt-1">
          <span className="font-semibold">R$ {price}</span> noite
        </p>
      </div>
    </motion.div>
  );
}
