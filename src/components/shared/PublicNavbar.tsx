"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const PublicNavbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fecha o menu ao navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Acomodações', match: (p: string) => p === '/' || p.startsWith('/acomodacao') },
    { href: '/experiencias', label: 'Experiências', match: (p: string) => p.startsWith('/experiencias') },
    { href: '/corporativo', label: 'Corporativo', match: (p: string) => p.startsWith('/corporativo') },
    { href: '/blog', label: 'Blog', match: (p: string) => p.startsWith('/blog') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-20 h-16 sm:h-20 bg-white/90 backdrop-blur-xl border-b border-zinc-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-4 sm:gap-10">
        <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
          <img src="/logo.png" alt="Pousada Portugueza" className="h-10 sm:h-14 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = link.match(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-primary bg-primary/5'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/5522999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 text-sm font-semibold px-5 py-2.5 bg-primary text-white rounded-full hover:bg-primary-container transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          Fale Conosco
        </a>
        <button className="p-2.5 hover:bg-zinc-100 rounded-full transition-colors hidden sm:flex items-center justify-center">
          <span className="material-symbols-outlined text-xl text-zinc-600">language</span>
        </button>

        {/* Dropdown Menu — controlado por click */}
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-2 border border-zinc-200 p-2 sm:p-1.5 sm:pl-3 rounded-full hover:shadow-md transition-shadow cursor-pointer bg-white min-w-[48px] min-h-[48px] sm:min-w-0 sm:min-h-0 justify-center"
          >
            <span className="material-symbols-outlined text-zinc-600 text-xl sm:text-base">menu</span>
            <div className="hidden sm:flex w-8 h-8 rounded-full overflow-hidden bg-primary/10 items-center justify-center font-bold text-primary text-xs">
              <span className="material-symbols-outlined text-sm">person</span>
            </div>
          </button>

          {/* Dropdown Panel */}
          {menuOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] w-64 bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] py-2 border border-zinc-100 animate-fade-in-up">
              {/* Mobile-only nav links */}
              <div className="md:hidden border-b border-zinc-100">
                {navLinks.map((link) => {
                  const isActive = link.match(pathname);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold hover:bg-zinc-50 ${isActive ? 'text-primary bg-primary/5' : 'text-zinc-700'}`}
                    >
                      {link.label}
                    </Link>
                  );
                })
                }
              </div>
              <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold hover:bg-zinc-50 text-zinc-900 border-b border-zinc-100">
                <span className="material-symbols-outlined text-base text-primary">admin_panel_settings</span>
                Área Administrativa
              </Link>
              <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold hover:bg-zinc-50 text-zinc-700 md:hidden">
                <span className="material-symbols-outlined text-base text-primary">chat</span>
                Fale Conosco
              </a>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-zinc-50 text-zinc-700">
                <span className="material-symbols-outlined text-base text-zinc-400">help</span>
                Central de Ajuda
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
