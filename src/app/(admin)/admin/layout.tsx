"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Helper function for Breadcrumbs
  const getBreadcrumbTitle = () => {
    switch (pathname) {
      case '/admin': return 'Visão Geral';
      case '/admin/reservas': return 'Calendário de Reservas';
      case '/admin/financeiro': return 'Relatório Financeiro';
      case '/admin/hospedes': return 'CRM de Hóspedes';
      case '/admin/acomodacoes': return 'Portfólio de Imóveis';
      case '/admin/configuracoes': return 'Configurações de Sistema';
      default: return 'Painel SaaS';
    }
  };

  return (
    <div className="bg-surface-container-low font-body text-on-surface antialiased min-h-screen">
      {/* SideNavBar */}
      <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-[#f3f4f5] dark:bg-slate-900 flex-col py-8 shadow-[32px_0_32px_-16px_rgba(25,28,29,0.06)] z-50">
        <div className="px-8 mb-8">
          <div className="flex items-center justify-center animate-slide-in-left">
            <img src="/logo.png" alt="Pousada Portugueza" className="h-20 w-auto object-contain drop-shadow-sm" />
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link href="/admin" className={`flex items-center gap-3 py-3 px-6 hover:translate-x-1 transition-transform animate-slide-in-left ${pathname === '/admin' ? 'bg-[#ffffff] dark:bg-slate-800 text-[#1D3557] dark:text-white rounded-r-full font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400'}`} style={{ animationDelay: '50ms' }}>
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-['Manrope'] text-sm uppercase tracking-wider">Visão Geral</span>
          </Link>
          <Link href="/admin/reservas" className={`flex items-center gap-3 py-3 px-6 hover:translate-x-1 transition-transform animate-slide-in-left ${pathname === '/admin/reservas' ? 'bg-[#ffffff] dark:bg-slate-800 text-[#1D3557] dark:text-white rounded-r-full font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400'}`} style={{ animationDelay: '100ms' }}>
            <span className="material-symbols-outlined">event_available</span>
            <span className="font-['Manrope'] text-sm uppercase tracking-wider">Reservas</span>
          </Link>
          <Link href="/admin/financeiro" className={`flex items-center gap-3 py-3 px-6 hover:translate-x-1 transition-transform animate-slide-in-left ${pathname === '/admin/financeiro' ? 'bg-[#ffffff] dark:bg-slate-800 text-[#1D3557] dark:text-white rounded-r-full font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400'}`} style={{ animationDelay: '150ms' }}>
            <span className="material-symbols-outlined">payments</span>
            <span className="font-['Manrope'] text-sm uppercase tracking-wider">Financeiro</span>
          </Link>
          <Link href="/admin/hospedes" className={`flex items-center gap-3 py-3 px-6 hover:translate-x-1 transition-transform animate-slide-in-left ${pathname === '/admin/hospedes' ? 'bg-[#ffffff] dark:bg-slate-800 text-[#1D3557] dark:text-white rounded-r-full font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400'}`} style={{ animationDelay: '200ms' }}>
            <span className="material-symbols-outlined">group</span>
            <span className="font-['Manrope'] text-sm uppercase tracking-wider">Hóspedes CRM</span>
          </Link>
          <Link href="/admin/acomodacoes" className={`flex items-center gap-3 py-3 px-6 hover:translate-x-1 transition-transform animate-slide-in-left ${pathname === '/admin/acomodacoes' ? 'bg-[#ffffff] dark:bg-slate-800 text-[#1D3557] dark:text-white rounded-r-full font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400'}`} style={{ animationDelay: '250ms' }}>
            <span className="material-symbols-outlined">home_work</span>
            <span className="font-['Manrope'] text-sm uppercase tracking-wider">Acomodações</span>
          </Link>
        </nav>
        <div className="px-6 mt-auto pt-8 border-t border-outline-variant/10">
          <button className="w-full py-3 px-4 bg-primary text-white rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-container transition-colors animate-slide-in-left shadow-lg" style={{ animationDelay: '300ms' }}>
            <span className="material-symbols-outlined text-sm">add</span>
            Nova Reserva
          </button>
          <div className="mt-6 space-y-1">
            <Link href="/admin/configuracoes" className={`flex items-center gap-3 py-2 px-4 text-xs uppercase tracking-wider font-bold rounded-lg animate-slide-in-left ${pathname === '/admin/configuracoes' ? 'bg-[#ffffff] shadow-sm text-primary' : 'text-slate-500 hover:text-primary transition-colors'}`} style={{ animationDelay: '350ms' }}>
              <span className="material-symbols-outlined text-sm">settings</span>
              Configurações
            </Link>
            <Link href="/" className="flex items-center gap-3 text-slate-500 py-2 px-4 text-xs font-['Manrope'] font-bold hover:text-red-600 transition-colors uppercase tracking-wider animate-slide-in-left" style={{ animationDelay: '400ms' }}>
              <span className="material-symbols-outlined text-sm">logout</span>
              Sair pro Site
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="w-full sticky top-0 z-40 bg-[#f8f9fa]/80 dark:bg-slate-950/80 backdrop-blur-md flex justify-between items-center px-8 py-4 border-b border-outline-variant/10">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-sm font-medium text-slate-500 gap-2 font-headline tracking-tight">
               <span className="material-symbols-outlined text-sm">home</span>
               Painel <span className="mx-1">/</span> <span className="text-primary font-bold">{getBreadcrumbTitle()}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <span className="material-symbols-outlined p-2 text-slate-500 hover:bg-slate-200 rounded-full cursor-pointer transition-colors">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full animate-pulse-subtle"></span>
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden ml-2 ring-2 ring-primary/10 bg-primary flex items-center justify-center text-white font-bold cursor-pointer hover:ring-primary/30 transition-all">
              PP
            </div>
          </div>
        </header>

        {children}

        {/* Footer Decoration */}
        <footer className="py-12 px-8 flex flex-col items-center gap-4 text-secondary/40 mt-auto border-t border-outline-variant/5">
          <div className="flex items-center gap-4 mb-2">
            <span className="material-symbols-outlined text-4xl">waves</span>
            <span className="material-symbols-outlined text-4xl">travel_explore</span>
            <span className="material-symbols-outlined text-4xl">waves</span>
          </div>
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase font-headline">Brasil • Rio de Janeiro • Grussaí</p>
        </footer>
      </main>

      {/* Floating Action Button (WhatsApp Concept) */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group">
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform duration-300 font-variation-settings-'FILL'-1">chat</span>
        </a>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
           Ajuda Remota
           <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-slate-900"></div>
        </div>
      </div>
    </div>
  );
}
