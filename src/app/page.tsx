"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { PublicNavbar } from '@/components/shared/PublicNavbar';
import { PublicFooter } from '@/components/shared/PublicFooter';
import { BlogSection } from '@/components/shared/BlogSection';

export default function LandingPage() {
  const router = useRouter();

  const handlePropertyClick = () => {
    router.push('/acomodacao/1');
  };

  const properties = [
    { id: 1, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", title: "Apartamento 01 — Bloco A", location: "Centro Grussaí", status: "Disponível", price: "R$ 1.200", period: "mês", rating: "4.92" },
    { id: 2, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", title: "Apartamento 02 — Bloco A", location: "Próximo à Orla", status: "Premium Check-in", price: "R$ 180", period: "dia", rating: "4.98" },
    { id: 21, image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2", title: "Casa 01 — Central (3Q)", location: "Avenida Principal", status: "Ideal p/ Corporativo", price: "R$ 3.500", period: "mês", rating: "5.00" },
    { id: 26, image: "https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e", title: "Casa 06 — Premium (5Q)", location: "Frente Mar", status: "Disponível p/ Lazer", price: "R$ 4.500", period: "mês", rating: "4.95" },
    { id: 6, image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562", title: "Apartamento 06 — Bloco B", location: "Polo Logístico", status: "Focado em Empresas", price: "R$ 1.400", period: "mês", rating: "4.88" },
    { id: 12, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", title: "Apartamento 12 — Bloco C", location: "Grussaí Norte", status: "Disponível", price: "R$ 1.300", period: "mês", rating: "4.90" },
    { id: 25, image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2", title: "Casa 05 — Esquina", location: "Perto do Porto", status: "Check-in Imediato", price: "R$ 3.000", period: "mês", rating: "4.85" },
    { id: 3, image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562", title: "Apartamento 03 — Bloco A", location: "Centro", status: "Disponível", price: "R$ 1.800", period: "mês", rating: "4.97" },
    { id: 10, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", title: "Apartamento 10 — Bloco B", location: "Próximo ao Polo G.", status: "Disponível", price: "R$ 1.100", period: "mês", rating: "4.80" },
    { id: 4, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", title: "Apartamento 04 — Bloco A", location: "Centro", status: "Alugado Corporativo", price: "R$ 1.500", period: "mês", rating: "4.92" },
    { id: 13, image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562", title: "Apartamento 13 — Bloco C", location: "Grussaí Centro", status: "Porto do Açu (RSLog)", price: "R$ 1.700", period: "mês", rating: "4.91" },
    { id: 22, image: "https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e", title: "Casa 02 — Fundos (2Q)", location: "Região Central", status: "Contrato Mensal", price: "R$ 2.200", period: "mês", rating: "4.87" },
    { id: 8, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", title: "Apartamento 08 — Bloco B", location: "Centro", status: "Disponível", price: "R$ 1.800", period: "mês", rating: "4.89" },
    { id: 23, image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2", title: "Casa 03 — Praia (4Q)", location: "Frente Mar", status: "Turismo 12d", price: "R$ 450", period: "dia", rating: "4.99" },
    { id: 15, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", title: "Apartamento 15 — Bloco C", location: "Praia de Grussaí", status: "Turismo 20d", price: "R$ 160", period: "dia", rating: "4.82" },
    { id: 24, image: "https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e", title: "Casa 04 — Lateral (2Q)", location: "Esquina", status: "Porto do Açu", price: "R$ 2.800", period: "mês", rating: "4.90" },
    { id: 7, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", title: "Apartamento 07 — Bloco B", location: "Setor Norte", status: "Locado Mensal", price: "R$ 1.200", period: "mês", rating: "4.78" },
    { id: 11, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", title: "Apartamento 11 — Bloco C", location: "Centro", status: "Disponível", price: "R$ 1.500", period: "mês", rating: "4.94" },
    { id: 20, image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562", title: "Apartamento 20 — Bloco D", location: "Grussaí", status: "Turismo Confirmado", price: "R$ 190", period: "dia", rating: "4.86" },
    { id: 14, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", title: "Apartamento 14 — Bloco C", location: "Setor Sul", status: "Ocupado", price: "R$ 1.200", period: "mês", rating: "4.83" }
  ];

  return (
    <div className="bg-[#f9f9f9] min-h-screen text-[#1a1c1c] font-body antialiased flex flex-col">
      <PublicNavbar />

      {/* Hero Search Section */}
      <header className="pt-20 bg-white relative min-h-[500px] flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img src="https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Grussaí" />
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-wide drop-shadow-lg font-[family-name:var(--font-cinzel-decorative)]">
            <span className="text-primary">Pousada</span> <span className="text-tertiary">Portugueza</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 font-body tracking-wide">Hospedagem premium em Grussaí — o charme luso no coração do Porto do Açu</p>
          
          <div className="flex flex-col md:flex-row items-center justify-between bg-white/90 backdrop-blur-xl border border-white/20 rounded-full py-2 px-4 shadow-[0_32px_64px_rgba(0,0,0,0.2)] md:hover:scale-[1.02] transition-transform cursor-pointer mx-auto max-w-3xl">
            <div className="flex-1 w-full md:w-auto px-6 py-2 md:border-r border-zinc-200">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1a1c1c]">Onde</div>
              <div className="text-sm text-zinc-500">Grussaí, RJ</div>
            </div>
            <div className="flex-1 w-full md:w-auto px-6 py-2 md:border-r border-zinc-200 border-t md:border-t-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1a1c1c]">Quando</div>
              <div className="text-sm text-zinc-500">Insira as datas</div>
            </div>
            <div className="flex-1 w-full md:w-auto px-6 py-2 border-t md:border-t-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1a1c1c]">Quem</div>
              <div className="text-sm text-zinc-500">Hóspedes</div>
            </div>
            <button className="bg-tertiary p-4 rounded-full text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg w-full md:w-auto mt-2 md:mt-0">
              <span className="material-symbols-outlined text-xl">search</span>
              <span className="md:hidden ml-2 font-bold">Buscar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Categories Sub-header */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md pt-4 pb-2 shadow-sm border-t border-zinc-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-20">
          <div className="flex items-center space-x-10 overflow-x-auto no-scrollbar py-2">
            <div className="flex flex-col items-center space-y-2 cursor-pointer group min-w-max pb-2 border-b-2 border-zinc-900">
              <span className="material-symbols-outlined text-zinc-900 group-hover:text-secondary transition-colors">landscape</span>
              <span className="text-xs font-semibold text-zinc-900">Todas</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group min-w-max pb-2 border-b-2 border-transparent hover:border-zinc-300">
              <span className="material-symbols-outlined text-zinc-500 group-hover:text-zinc-900 transition-colors">diamond</span>
              <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900">Luxo</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group min-w-max pb-2 border-b-2 border-transparent hover:border-zinc-300">
              <span className="material-symbols-outlined text-zinc-500 group-hover:text-zinc-900 transition-colors">trending_up</span>
              <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900">Em Alta</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group min-w-max pb-2 border-b-2 border-transparent hover:border-zinc-300">
              <span className="material-symbols-outlined text-zinc-500 group-hover:text-zinc-900 transition-colors">pool</span>
              <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900">Piscina</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group min-w-max pb-2 border-b-2 border-transparent hover:border-zinc-300">
              <span className="material-symbols-outlined text-zinc-500 group-hover:text-zinc-900 transition-colors">beach_access</span>
              <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900">Frente Mar</span>
            </div>
            <div className="flex flex-col items-center space-y-2 cursor-pointer group min-w-max pb-2 border-b-2 border-transparent hover:border-zinc-300">
              <span className="material-symbols-outlined text-zinc-500 group-hover:text-zinc-900 transition-colors">business_center</span>
              <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900">Corporativo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="max-w-[1600px] w-full mx-auto px-6 md:px-20 py-12 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {properties.map((prop, index) => (
             <PropertyCard 
               key={prop.id} 
               {...prop} 
               onClick={handlePropertyClick}
               animationDelay={index * 100}
             />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl font-semibold">Continue explorando as opções</h2>
          <button className="bg-zinc-900 text-white px-8 py-3 rounded-full font-bold hover:bg-zinc-800 transition-all hover:shadow-lg card-hover-lift">Ver Mais</button>
        </div>

        {/* Why Choose Us Section */}
        <section className="mt-24 bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-zinc-100 flex flex-col lg:flex-row gap-12 animate-fade-in-up">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4 tracking-tight">O Destino Ideal no <span className="text-primary">Porto do Açu</span></h2>
            <p className="text-zinc-600 leading-relaxed">Infraestrutura preparada para receber gestores de logística, engenheiros e familiares buscando tranquilidade em São João da Barra.</p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <h3 className="font-bold text-zinc-900">10 Min do Porto</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Acesso facilitado para o complexo portuário sem o trânsito do centro da cidade.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">wifi</span>
              </div>
              <h3 className="font-bold text-zinc-900">Conectividade</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Internet de alta velocidade dedicada, ideal para home office e reuniões corporativas.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">security</span>
              </div>
              <h3 className="font-bold text-zinc-900">Comunidade Segura</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Ambiente familiar com monitoramento na principal avenida de Grussaí.</p>
            </div>
          </div>
        </section>
      </main>

      <BlogSection />

      <PublicFooter />
    </div>
  );
}
