"use client";

import React from 'react';
import { PublicNavbar } from '@/components/shared/PublicNavbar';
import { PublicFooter } from '@/components/shared/PublicFooter';

export default function ExperienciasPage() {
  const experiences = [
    {
      title: "Rota Gastronômica Lusa",
      desc: "Prove os melhores pratos da região com influência portuguesa e brasileira no Polo Gastronômico de Grussaí.",
      longDesc: "Do bacalhau à portuguesa aos frutos do mar frescos do litoral campista. Nosso concierge organiza jantares privativos e reservas nos restaurantes mais exclusivos.",
      img: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&auto=format&fit=crop",
      icon: "restaurant",
      price: "A partir de R$ 120/pessoa",
    },
    {
      title: "Passeios de Barco",
      desc: "Explore o litoral e os canais de Grussaí em passeios privados com a família ou equipe.",
      longDesc: "Barcos de 8 a 20 lugares com skipper experiente. Roteiros de 2h a dia inteiro com parada em praias desertas e snorkeling nas águas cristalinas.",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
      icon: "sailing",
      price: "A partir de R$ 350/grupo",
    },
    {
      title: "Kitesurf & Esportes Náuticos",
      desc: "Aproveite os ventos perfeitos da nossa costa com instrutores locais certificados.",
      longDesc: "Aulas para iniciantes, aluguel de equipamento e spots secretos para os mais experientes. Stand-up paddle ao pôr do sol incluído em pacotes semanais.",
      img: "https://images.unsplash.com/photo-1526344966-89049886b28d?w=800&auto=format&fit=crop",
      icon: "surfing",
      price: "A partir de R$ 200/aula",
    },
    {
      title: "Trilhas & Ecoturismo",
      desc: "Descubra as dunas, manguezais e lagoas escondidas do litoral norte fluminense.",
      longDesc: "Guias especializados em fauna e flora local. Passeios de buggy pelas dunas com vista panorâmica e banhos em lagoas de água doce.",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop",
      icon: "forest",
      price: "A partir de R$ 150/pessoa",
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen text-zinc-900 font-body antialiased flex flex-col">
      <PublicNavbar />

      {/* Hero */}
      <header className="pt-20 relative overflow-hidden">
        <div className="relative h-[480px] md:h-[560px]">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Praia de Grussaí"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-20">
            <div className="max-w-3xl animate-fade-in-up">
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Lazer & Cultura
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-[1.1]">
                Descubra a Essência<br className="hidden md:block" /> de Grussaí
              </h1>
              <p className="text-white/70 max-w-xl text-lg leading-relaxed">
                O Residencial Luso oferece mais que hospedagem. Planejamos o seu roteiro completo de lazer e cultura no litoral fluminense.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Experiences Grid */}
      <main className="max-w-7xl w-full mx-auto px-6 md:px-16 lg:px-20 py-20 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up flex flex-col md:flex-row"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden flex-shrink-0">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">{exp.icon}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{exp.price}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-2">{exp.desc}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{exp.longDesc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <button className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Reservar experiência
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concierge CTA */}
        <div className="mt-20 bg-primary text-white rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:max-w-lg">
              <span className="material-symbols-outlined text-5xl text-secondary mb-4 block">concierge</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Monte seu pacote<br />personalizado
              </h2>
              <p className="text-white/70 leading-relaxed">
                Nossa equipe de concierge está à disposição para organizar cada detalhe da sua estadia: reservas em restaurantes, passeios de barco, aulas de esportes e roteiros sob medida.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-auto">
              <a
                href="https://wa.me/5522999999999"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-sm text-center hover:bg-zinc-100 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Falar com o Concierge
              </a>
              <a
                href="tel:+5522999999999"
                className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-sm text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                (22) 99999-9999
              </a>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -bottom-12 -right-12 text-[280px] text-white/[0.03] pointer-events-none">sailing</span>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
