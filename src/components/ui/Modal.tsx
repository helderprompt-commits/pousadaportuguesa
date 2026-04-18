import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footerActions?: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, onClose, title, subtitle, children, footerActions, maxWidth = 'max-w-2xl' 
}) => {
  const [render, setRender] = useState(isOpen);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      // Small delay to ensure render has happened before animating in
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      document.body.style.overflow = 'hidden';
    } else {
      setAnimate(false);
      const timer = setTimeout(() => setRender(false), 300); // match transition duration
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!render) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-[#1D3557]/60 backdrop-blur-sm transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div 
        className={`relative bg-white w-full ${maxWidth} rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 transform ${animate ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
      >
        {/* Header */}
        <div className="px-10 py-8 bg-gradient-to-br from-[#1D3557] to-[#2A4B7C] text-white shrink-0">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
              {subtitle && <p className="text-white/80 text-sm mt-1">{subtitle}</p>}
            </div>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors bg-white/10 rounded-full p-1 hover:bg-white/20">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-10 overflow-y-auto no-scrollbar relative flex-1">
          {children}
        </div>

        {/* Footer */}
        {footerActions && (
          <div className="px-10 py-6 bg-slate-50 shrink-0 flex items-center justify-end gap-6 border-t border-slate-200">
            {footerActions}
          </div>
        )}
      </div>
    </div>
  );
};
