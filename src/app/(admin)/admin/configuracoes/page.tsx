"use client";

import React, { useState } from 'react';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default function ConfiguracoesPage() {
  const [darkToggle, setDarkToggle] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState(true);

  return (
    <div className="flex-1 flex flex-col p-8 sm:p-12 mb-12 max-w-4xl mx-auto w-full">
      <header className="mb-8 animate-fade-in-up">
        <h2 className="text-3xl font-extrabold text-[#1D3557] mb-2">Configurações Gerais</h2>
        <p className="text-slate-500 font-medium">Controle preferências sistêmicas de conexões e dados da infraestrutura.</p>
      </header>

      <div className="space-y-10">
        {/* Profile Card */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 animate-fade-in-up animate-delay-100">
           <div className="flex items-start justify-between border-b border-slate-100 pb-6 mb-6">
              <div className="flex items-center gap-6">
                 <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-xl relative group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=200" className="w-full h-full object-cover" alt="Profile" />
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="material-symbols-outlined text-white">photo_camera</span>
                    </div>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-[#1D3557]">Pousada Portugueza Local</h3>
                    <p className="text-slate-500 text-sm mt-1">Conta Administrativa • ID #982HD10</p>
                 </div>
              </div>
              <button className="text-sm font-bold bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg transition-colors">Editar Perfil</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Endereço Fiscal</span>
                 <p className="font-medium text-slate-800">Avenida Principal de Grussaí, São João da Barra - RJ</p>
              </div>
              <div>
                 <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Responsável Base</span>
                 <p className="font-medium text-slate-800">Admin Maycon</p>
              </div>
           </div>
        </section>

        {/* Integrations (Webhook/APIToken Concept) */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in-up animate-delay-200">
           <div className="p-6 bg-slate-50 border-b border-slate-200">
              <h3 className="font-bold text-lg text-primary">Integrações de Software</h3>
              <p className="text-xs text-slate-500">Conexão direta B2B. As integrações garantem que a agenda não de overbooking.</p>
           </div>
           
           <div className="divide-y divide-slate-100">
             {/* Integracao 1 */}
              <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#25D366]">
                       <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em" width="1.5em"><path d="M11.944 0A12 12 0 000 12a12 12 0 001.602 6.012L0 24l6.19-1.58A11.96 11.96 0 0012 24a12 12 0 0011.944-12A12 12 0 0012 0h-.056zm.056 21.967c-1.895 0-3.754-.511-5.385-1.481l-.387-.23-4 1.021 1.066-3.896-.252-.401a9.924 9.924 0 01-1.528-5.342c0-5.467 4.453-9.92 9.923-9.92 2.65 0 5.143 1.033 7.017 2.909A9.873 9.873 0 0121.867 12c0 5.468-4.454 9.921-9.923 9.921l-.044-.044z..."></path></svg>
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-800">WhatsApp Business API</h4>
                       <p className="text-xs text-slate-500">Envio de boletos automático +22 9999-9999</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <StatusBadge status="active" label="Conectado" />
                    <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined">link_off</span></button>
                 </div>
              </div>

              {/* Integracao 2 */}
              <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#635BFF]">
                      <span className="material-symbols-outlined">credit_card</span>
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-800">Base de Pagamentos (Stripe)</h4>
                       <p className="text-xs text-slate-500">Recebimentos de aluguéis e diárias do site público</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <StatusBadge status="active" label="Conectado" />
                    <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined">link_off</span></button>
                 </div>
              </div>

              {/* Integracao 3 */}
              <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#ffb59f]">
                      <span className="font-bold font-headline select-none text-tertiary">B</span>
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-800">Booking.com </h4>
                       <p className="text-xs text-slate-500">Channel Manager de iCalendar Sync</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <StatusBadge status="pending" label="Sincronizando..." />
                    <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined">refresh</span></button>
                 </div>
              </div>

              {/* Integracao 4 DB */}
              <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#3ECF8E]">
                      <span className="material-symbols-outlined">database</span>
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-800">Supabase (PostgreSQL)</h4>
                       <p className="text-xs text-slate-500">Armazenamento em nuvem nativo pendente de Init.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <button className="bg-[#1D3557] hover:bg-[#2A4B7C] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-2">
                       Acelerar Deploy
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* Toggles Preferencias */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden pt-6 animate-fade-in-up animate-delay-300">
           <h3 className="font-bold text-lg text-primary px-6 mb-2">Preferências de Interface</h3>
           
           <div className="divide-y divide-slate-100 mt-4">
              <div className="p-6 flex items-center justify-between">
                 <div>
                    <p className="font-bold text-slate-800">Notificiar Inadimplência por Email</p>
                    <p className="text-xs text-slate-500">Contratos atrasados mais que 1 dia disparam aviso de timeout.</p>
                 </div>
                 <button 
                  onClick={() => setNotifyEmail(!notifyEmail)} 
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${notifyEmail ? 'bg-[#1D3557]' : 'bg-slate-300'}`}
                 >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${notifyEmail ? 'left-7' : 'left-1'}`}></div>
                 </button>
              </div>

              <div className="p-6 flex items-center justify-between">
                 <div>
                    <p className="font-bold text-slate-800">Modo Escuro (Dark Mode)</p>
                    <p className="text-xs text-slate-500">Forçar esquema de visualização Azure Noturno.</p>
                 </div>
                 <button 
                  onClick={() => setDarkToggle(!darkToggle)} 
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${darkToggle ? 'bg-[#1D3557]' : 'bg-slate-300'}`}
                 >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${darkToggle ? 'left-7' : 'left-1'}`}></div>
                 </button>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
}
