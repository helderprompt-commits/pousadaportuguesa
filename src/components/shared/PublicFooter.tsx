import React from 'react';
import Link from 'next/link';

export const PublicFooter: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white mt-auto">
      {/* Newsletter CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-10 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="lg:max-w-lg text-center lg:text-left">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2">Receba novidades exclusivas</h3>
            <p className="text-white/60 text-xs sm:text-sm">Ofertas de temporada, novos imóveis e insights sobre o mercado do Porto do Açu direto no seu e-mail.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-3 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 lg:w-80 bg-white/10 border border-white/20 rounded-full px-5 sm:px-6 py-3 min-h-[44px] text-sm text-white placeholder:text-white/40 outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
            />
            <button className="bg-tertiary text-white px-8 py-3 min-h-[44px] rounded-full font-bold text-sm hover:bg-tertiary/90 transition-colors shadow-lg whitespace-nowrap">
              Assinar
            </button>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40 mb-4 sm:mb-6">Navegação</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center">Acomodações</Link></li>
              <li><Link href="/experiencias" className="text-white/70 hover:text-white transition-colors py-1 inline-block">Experiências</Link></li>
              <li><Link href="/corporativo" className="text-white/70 hover:text-white transition-colors py-1 inline-block">Corporativo</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors py-1 inline-block">Blog & Notícias</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40 mb-4 sm:mb-6">Suporte</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li><span className="text-white/70 hover:text-white transition-colors cursor-pointer">Central de Ajuda</span></li>
              <li><span className="text-white/70 hover:text-white transition-colors cursor-pointer">Cancelamento</span></li>
              <li><span className="text-white/70 hover:text-white transition-colors cursor-pointer">Atendimento Premium</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40 mb-4 sm:mb-6">Empresa</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li><span className="text-white/70 hover:text-white transition-colors cursor-pointer">Sobre a Pousada Portugueza</span></li>
              <li><span className="text-white/70 hover:text-white transition-colors cursor-pointer">Localização Grussaí</span></li>
              <li><Link href="/admin" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px]">lock</span> Acesso Admin
              </Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40 mb-4 sm:mb-6">Contato</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li><a href="https://wa.me/5522999999999" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px]">chat</span> (22) 99999-9999
              </a></li>
              <li><span className="text-white/70">contato@residencialluso.com.br</span></li>
              <li className="text-white/50 text-xs leading-relaxed">Av. Principal, Grussaí<br/>São João da Barra — RJ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Pousada Portugueza" className="h-7 sm:h-8 w-auto object-contain opacity-60" />
            <span className="text-white/40 text-[10px] sm:text-xs font-medium">© 2026 Pousada Portugueza</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-white/40">
            <span className="hover:text-white/70 cursor-pointer transition-colors min-h-[32px] flex items-center">Privacidade</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors min-h-[32px] flex items-center">Termos</span>
            <span className="hover:text-white/70 cursor-pointer transition-colors min-h-[32px] flex items-center">Cookies</span>
          </div>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/60">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/60">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
