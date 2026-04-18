"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PublicNavbar } from "@/components/shared/PublicNavbar";
import { PublicFooter } from "@/components/shared/PublicFooter";
import { Modal } from "@/components/ui/Modal";

export default function AcomodacaoDetails() {
  const router = useRouter();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="bg-white text-zinc-900 font-body antialiased min-h-screen flex flex-col">
      <PublicNavbar />

      <main className="max-w-7xl w-full mx-auto px-6 md:px-20 pt-28 pb-20 flex-1 animate-fade-in-up animate-delay-200">
        {/* Header */}
        <div className="mb-6">
          <button onClick={() => router.back()} className="mb-4 flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Voltar
          </button>
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-primary">Unidade Residencial Luso — Conforto & Padrão</h1>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-medium">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#800000]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span>4.98</span>
                <span className="text-zinc-500 underline cursor-pointer hover:text-zinc-900 transition-colors">124 avaliações</span>
              </div>
              <span className="text-zinc-300">•</span>
              <span className="text-zinc-500 underline cursor-pointer hover:text-zinc-900 transition-colors">Grussaí, São João da Barra, RJ</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 hover:bg-zinc-100 px-3 py-2 rounded-lg transition-colors font-semibold">
                <span className="material-symbols-outlined text-lg">share</span>
                <span className="underline">Compartilhar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section: 5-image grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[480px] rounded-2xl overflow-hidden mb-12">
          <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden" onClick={() => setIsGalleryOpen(true)}>
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="Principal" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden hidden md:block" onClick={() => setIsGalleryOpen(true)}>
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1587061949409-02df41d5e562" alt="Interiores" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden hidden md:block" onClick={() => setIsGalleryOpen(true)}>
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" alt="Piscina" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden hidden md:block" onClick={() => setIsGalleryOpen(true)}>
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2" alt="Quarto" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden hidden md:block" onClick={() => setIsGalleryOpen(true)}>
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4K_4CnNyplKLEZUPKe9pDHaX1ftkTaE7A2_mKIllWpG_gLMBN6c3SogO2ZdnAyaIIhcOLHTQMCiAS380uLCy5gpM6zHK1PyX25qYGj8kHKc3IvAYjbnjIxWq9DSJsGtLSmYLRoxT4TVuVm3gW-urxAt4eJUHM1zDK3rJpXsND1yPUZ1H-ZYTZ1zO4XByPPP11MqwzRWCE6CEiJl8nLpbDdC-rtYUVjsimjcAM_PTo1I2L9UumDp3haSbGQXkrm5oa7nclgdCtSBpx" alt="Exteriores" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg border border-zinc-900 text-sm font-semibold flex items-center gap-2 hover:bg-zinc-50 transition-transform active:scale-95 shadow-md">
              <span className="material-symbols-outlined text-lg">grid_view</span>
              Mostrar fotos
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 relative">
          {/* Left: Info Section */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center justify-between pb-8 border-b border-zinc-200">
              <div>
                <h2 className="text-2xl font-semibold mb-1 text-primary">Unidade gerenciada por Residencial Luso</h2>
                <p className="text-zinc-600">Gestão profissional para locações corporativas e lazer</p>
              </div>
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-[#1D3557] to-[#2A4B7C] flex items-center justify-center shadow-lg">
                 <span className="material-symbols-outlined text-white">home_work</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-3xl mt-1 text-zinc-900">workspace_premium</span>
                <div>
                  <p className="font-semibold text-lg text-zinc-900">Experiência VIP Corporativa</p>
                  <p className="text-zinc-600">Somos super recomendados na região e estamos habituados com locações corporativas do complexo logístico Porto do Açu.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-3xl mt-1 text-zinc-900">location_on</span>
                <div>
                  <p className="font-semibold text-lg text-zinc-900">Ótima localização na Avenida Central</p>
                  <p className="text-zinc-600">Acesso super facilitado às praias, polo gastronômico e com logística conectada.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-3xl mt-1 text-zinc-900">calendar_today</span>
                <div>
                  <p className="font-semibold text-lg text-zinc-900">Cancelamento flexível</p>
                  <p className="text-zinc-600">Cancelamento grátis até 48h antes do check-in para reagendamentos súbitos.</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-zinc-700 leading-relaxed border-t border-zinc-200 pt-12">
              <p className="mb-4 text-lg text-zinc-900 font-medium">Perfeitamente localizado no coração de Grussaí, o Residencial Luso mistura infraestrutura impecável para o público corporativo e total flexibilidade para sua família. Desfrute de amplos espaços e ventilação cruzada refrescante do mar.</p>
              <p className="mb-4">O imóvel é completamente montado com camas confortáveis, ar-condicionado em todos os cômodos, áreas privativas e espaços otimizados para trabalho ou lazer. Esta não é só uma fuga: é a sua propriedade completa na praia, pronta para conexões a trabalho ou férias.</p>
            </div>

            {/* Amenities */}
            <div className="pt-12 border-t border-zinc-200">
              <h3 className="text-2xl font-semibold mb-8 text-zinc-900">O que o lugar oferece</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-zinc-700">wifi</span>
                  <span className="text-lg">Internet de Alta Velocidade (Fibra)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-zinc-700">pool</span>
                  <span className="text-lg">Piscinas (Adulto e Infantil)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-zinc-700">ac_unit</span>
                  <span className="text-lg">Ar Condicionado Inverter SPLIT</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-zinc-700">kitchen</span>
                  <span className="text-lg">Cozinha Equipada & Utensílios</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-zinc-700">local_parking</span>
                  <span className="text-lg">Estacionamento Fechado</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-zinc-700">tv</span>
                  <span className="text-lg">Smart TV OLED</span>
                </div>
              </div>
              <button className="mt-10 px-8 py-4 border border-zinc-900 text-zinc-900 font-bold rounded-xl hover:bg-zinc-50 transition-colors uppercase tracking-widest text-sm">Mostrar 32 comodidades</button>
            </div>
            
            {/* Reviews Section */}
            <div className="pt-12 border-t border-zinc-200">
               <h3 className="text-2xl font-semibold mb-8 text-zinc-900 flex items-center gap-2">
                 <span className="material-symbols-outlined text-2xl text-[#800000]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                 4.98 (124 avaliações)
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Review 1 */}
                 <div>
                   <div className="flex items-center gap-4 mb-4">
                     <img src="https://i.pravatar.cc/150?img=32" className="w-12 h-12 rounded-full" alt="Avatar"/>
                     <div>
                       <h4 className="font-bold text-zinc-900">Marcos Eduardo</h4>
                       <p className="text-sm text-zinc-500">Engenheiro Porto do Açu</p>
                     </div>
                   </div>
                   <p className="text-zinc-700">Lugar espetacular! Fiquei 4 meses alocado para uma obra no complexo portuário e a infraestrutura foi mil vezes superior ao esperado. Internet perfeita para envio de plantas.</p>
                 </div>
                 
                 {/* Review 2 */}
                 <div>
                   <div className="flex items-center gap-4 mb-4">
                     <img src="https://i.pravatar.cc/150?img=47" className="w-12 h-12 rounded-full" alt="Avatar"/>
                     <div>
                       <h4 className="font-bold text-zinc-900">Ana Beatriz</h4>
                       <p className="text-sm text-zinc-500">Hospedou-se com a família</p>
                     </div>
                   </div>
                   <p className="text-zinc-700">A melhor estadia que já tivemos em Grussaí. As crianças amaram a piscina e a casa é super arejada e segura. Voltaremos com certeza no réveillon!</p>
                 </div>
               </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="pt-12 border-t border-zinc-200">
               <h3 className="text-2xl font-semibold mb-6 text-zinc-900">Onde você estará</h3>
               <p className="text-zinc-600 mb-6">Grussaí, Rio de Janeiro - Brasil</p>
               <div className="w-full h-[400px] bg-zinc-100 rounded-2xl overflow-hidden relative border border-zinc-200">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 grayscale" alt="Map Location" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center shadow-[0_0_0_8px_rgba(255,56,92,0.3)] animate-pulse-subtle">
                      <span className="material-symbols-outlined text-white text-3xl">home</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right: Sticky Booking Widget */}
          <div className="relative mt-8 lg:mt-0">
            <div className="sticky top-28 p-6 bg-white rounded-3xl shadow-[0_16px_48px_rgba(26,28,28,0.12)] border border-zinc-200 animate-slide-in-left lg:animate-fade-in-up">
              <div className="flex justify-between items-baseline mb-6">
                <div>
                  <span className="text-3xl font-extrabold text-zinc-900">R$ 380</span>
                  <span className="text-zinc-600 font-medium"> / noite</span>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <span className="material-symbols-outlined text-sm text-[#800000]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold underline decoration-zinc-400 decoration-1 underline-offset-2">4.98</span>
                </div>
              </div>

              {/* Date & Guest Inputs */}
              <div className="border border-zinc-400 rounded-xl mb-6 overflow-hidden">
                <div className="grid grid-cols-2 border-b border-zinc-400">
                  <div className="p-4 border-r border-zinc-400 hover:bg-zinc-50 cursor-pointer transition-colors">
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest mb-1 text-zinc-800">Check-in</label>
                    <div className="text-sm font-medium">15/11/2026</div>
                  </div>
                  <div className="p-4 hover:bg-zinc-50 cursor-pointer transition-colors">
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest mb-1 text-zinc-800">Check-out</label>
                    <div className="text-sm font-medium">22/11/2026</div>
                  </div>
                </div>
                <div className="p-4 relative group cursor-pointer hover:bg-zinc-50 transition-colors flex justify-between items-center">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest mb-1 text-zinc-800">Hóspedes</label>
                    <div className="text-sm font-medium text-zinc-900">2 hóspedes</div>
                  </div>
                  <span className="material-symbols-outlined text-zinc-500">expand_more</span>
                </div>
              </div>

              <button className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl mb-4 hover:bg-primary-container active:scale-95 transition-all shadow-lg shadow-primary/20">Reservar Agora</button>
              <p className="text-center text-sm text-zinc-500 mb-6 font-medium">Pague com Stripe de forma segura.</p>

              <div className="space-y-4 text-zinc-700 mb-6 px-1">
                <div className="flex justify-between">
                  <span className="underline cursor-pointer">R$ 380 x 7 noites</span>
                  <span>R$ 2.660</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline cursor-pointer">Taxa de Limpeza Padrão</span>
                  <span>R$ 150</span>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-200 flex justify-between font-bold text-xl text-zinc-900 px-1">
                <span>Total Estimado</span>
                <span>R$ 2.810</span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-900 cursor-pointer transition-colors">
              <span className="material-symbols-outlined">flag</span>
              <span className="text-sm font-semibold underline">Dúvidas? Fale conosco!</span>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />

      {/* Floating Action Button mobile only */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-zinc-200 p-4 lg:hidden z-50 flex items-center justify-between animate-fade-in-up">
         <div>
            <p className="font-extrabold text-zinc-900 text-lg">R$ 380 <span className="font-normal text-sm text-zinc-500">/ noite</span></p>
            <p className="text-sm text-zinc-500 underline font-medium mt-1">15/11 - 22/11</p>
         </div>
         <button className="px-8 py-3.5 bg-primary text-white font-bold rounded-xl active:scale-95 transition-transform shadow-lg">Reservar</button>
      </div>

      {/* Lightbox / Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-zinc-900/98 backdrop-blur-3xl z-[100] flex flex-col pt-6 pb-20 px-4 sm:px-12 animate-fade-in-up">
          <div className="flex justify-between items-center text-white mb-8">
            <span className="font-semibold px-4 tracking-widest uppercase text-sm">Galeria (1/5)</span>
            <button onClick={() => setIsGalleryOpen(false)} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors active:scale-95">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="flex-1 w-full max-w-6xl mx-auto relative flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" className="max-h-full max-w-full object-contain rounded-xl shadow-2xl" alt="Gallery active" />
            <div className="absolute inset-x-4 inset-y-1/2 flex items-center justify-between -mt-6">
              <button className="bg-white text-zinc-900 w-12 h-12 rounded-full flex items-center justify-center active:scale-95 hover:bg-zinc-200 transition-all font-bold">
                 <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="bg-white text-zinc-900 w-12 h-12 rounded-full flex items-center justify-center active:scale-95 hover:bg-zinc-200 transition-all font-bold">
                 <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
