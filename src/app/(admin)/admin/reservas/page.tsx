"use client";

import React, { useState } from 'react';
import { KpiCard } from '@/components/ui/KpiCard';
import { Modal } from '@/components/ui/Modal';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default function ReservasPage() {
  const [showModal, setShowModal] = useState(false);

  // Mock days of the month for visual calendar
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="flex-1 flex flex-col pb-8 bg-surface-container-low min-h-full">
      {/* Top Header */}
      <header className="w-full bg-white/50 backdrop-blur-md p-8 flex justify-between items-center border-b border-slate-100 z-10 sticky top-0">
        <h2 className="text-2xl font-extrabold text-[#1D3557] tracking-tight animate-fade-in-up">Visão Geral do Calendário</h2>
        <div className="flex items-center gap-6 animate-fade-in-up animate-delay-100">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">filter_alt</span>
            <select className="bg-white border border-slate-200 rounded-full pl-10 pr-8 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none shadow-sm transition-all font-bold text-[#1D3557] cursor-pointer">
               <option>Todas as Acomodações</option>
               <option>Casa Principal (Centro)</option>
               <option>Suítes Luxo</option>
            </select>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-primary text-white rounded-full py-2.5 px-6 font-bold text-sm flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-md">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Manual
          </button>
        </div>
      </header>

      <div className="px-8 py-8 flex-1 flex flex-col xl:flex-row gap-8">
        
        {/* Left Column: Calendar Main View */}
        <div className="flex-[3] space-y-8 animate-fade-in-up animate-delay-200">
          {/* Timeline KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KpiCard label="Check-ins Hoje" value="03" trend="2 Pendentes" icon="login" animationDelay={100} />
            <KpiCard label="Check-outs Hoje" value="01" trend="Liberado às 11h" variant="warning" icon="logout" animationDelay={200} />
            <KpiCard label="Receita Estimada Mês" value="R$ 18.2K" trend="Garantida" variant="primary" icon="price_check" animationDelay={300} />
          </div>

          {/* Calendar Grid Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
             <div className="bg-slate-50 border-b border-slate-200 p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                   <button className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
                   <h3 className="text-xl font-bold text-[#1D3557]">Novembro 2026</h3>
                   <button className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
                <div className="flex bg-slate-200 rounded-lg p-1">
                   <button className="px-4 py-1.5 rounded bg-white text-[#1D3557] font-bold text-sm shadow-sm transition-all">Mês</button>
                   <button className="px-4 py-1.5 rounded text-slate-500 hover:text-[#1D3557] font-bold text-sm transition-all">Semana</button>
                </div>
             </div>

             {/* Days of Week Header */}
             <div className="grid grid-cols-7 border-b border-slate-200 bg-white">
                {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'].map(d => (
                   <div key={d} className="p-3 text-center text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">{d}</div>
                ))}
             </div>

             {/* 7x5 Calendar Grid */}
             <div className="grid grid-cols-7 bg-slate-100 gap-px border-b border-slate-200">
                {/* Mocking the first few empty days padding for Nov 1st starting on a Tuesday */}
                <div className="bg-slate-50 h-32 p-2"></div>
                <div className="bg-slate-50 h-32 p-2"></div>

                {days.map(d => {
                   let isToday = d === 15;
                   // Simulating a long corporativo block starting day 5 to 20
                   let hasCorpBlock = d >= 5 && d <= 20;
                   // Simulating a swift booking airbnb
                   let hasTurismoBlock = d >= 22 && d <= 25;

                   return (
                     <div key={d} className={`bg-white h-32 p-2 relative hover:bg-slate-50 transition-colors border-t-2 ${isToday ? 'border-t-primary bg-primary/5' : 'border-t-transparent'}`}>
                        <span className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ${isToday ? 'bg-primary text-white' : 'text-slate-500'}`}>{d}</span>
                        
                        <div className="mt-2 space-y-1">
                           {hasCorpBlock && (
                             <div className={`bg-[#1D3557] text-white text-[10px] p-1 font-bold rounded truncate shadow-sm relative group cursor-pointer ${d === 5 ? 'rounded-l-full pl-3' : ''} ${d === 20 ? 'rounded-r-full pr-3' : ''}`}>
                                {d === 5 && 'Corp. Logística S/A '}
                                {d > 5 && <span className="opacity-0">Corpo</span>}
                             </div>
                           )}
                           {hasTurismoBlock && (
                             <div className={`bg-[#800000] text-white text-[10px] p-1 font-bold rounded truncate shadow-sm cursor-pointer ${d === 22 ? 'rounded-l-full pl-3' : ''} ${d === 25 ? 'rounded-r-full pr-3' : ''}`}>
                                {d === 22 && 'Booking.com '}
                                {d > 22 && <span className="opacity-0">Book</span>}
                             </div>
                           )}
                        </div>
                     </div>
                   );
                })}
                {/* Padding out the rest of the grid */}
                <div className="bg-slate-50 h-32 p-2"></div>
                <div className="bg-slate-50 h-32 p-2"></div>
                <div className="bg-slate-50 h-32 p-2"></div>
             </div>
          </div>
        </div>

        {/* Right Column: Upcoming Sidebar */}
        <div className="flex-1 space-y-6 animate-fade-in-up animate-delay-400">
           <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-full min-h-[500px]">
              <h3 className="font-bold text-lg text-[#1D3557] mb-6 border-b border-slate-100 pb-4">Próximos Checks</h3>
              
              <div className="space-y-4 flex-1">
                 {/* Card 1 */}
                 <div className="p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
                    <div className="flex justify-between items-start mb-2 pl-2">
                       <StatusBadge status="active" label="Check-in Hoje" />
                       <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Booking</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm pl-2">Família Albuquerque</h4>
                    <p className="text-xs text-slate-500 pl-2">Suíte Luxo 01 • 3 Noites</p>
                 </div>

                 {/* Card 2 */}
                 <div className="p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1D3557]"></div>
                    <div className="flex justify-between items-start mb-2 pl-2">
                       <StatusBadge status="active" label="Check-out 20/11" />
                       <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Porto</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm pl-2">Equipe Logística S/A</h4>
                    <p className="text-xs text-slate-500 pl-2">Casa Central • Renova em 15d</p>
                 </div>

                 {/* Card 3 */}
                 <div className="p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500"></div>
                    <div className="flex justify-between items-start mb-2 pl-2">
                       <StatusBadge status="pending" label="Pendente Conf." />
                       <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Airbnb</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm pl-2">Mariana S.</h4>
                    <p className="text-xs text-slate-500 pl-2">Casa Fundos • Aguardando Pg</p>
                 </div>
              </div>
           </div>
        </div>

      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Agendamento Manual"
        subtitle="Bloqueie o calendário de uma unidade para manutenções ou reservas diretas (ex: WhatsApp)."
        footerActions={
           <>
             <button onClick={() => setShowModal(false)} className="text-[#1D3557] font-bold text-sm hover:text-slate-600 transition-colors uppercase tracking-widest">
                Cancelar
             </button>
             <button onClick={() => setShowModal(false)} className="bg-gradient-to-br from-[#1D3557] to-[#2A4B7C] text-white rounded-full px-8 py-3 font-bold shadow-lg flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
                <span>Criar Bloqueio</span>
                <span className="material-symbols-outlined">event_available</span>
             </button>
           </>
        }
      >
        <div className="space-y-6">
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase text-slate-500">Acomodação (Obrigatório)</label>
                 <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white text-primary font-bold">
                    <option>Escolha o imóvel</option>
                    <option>Casa Central</option>
                 </select>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase text-slate-500">Canal / Fonte</label>
                 <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white text-primary font-bold">
                    <option>Direto (WhatsApp)</option>
                    <option>Manutenção Externa</option>
                    <option>Parceria B2B (Porto)</option>
                 </select>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase text-slate-500">Data Inicio</label>
                 <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white text-primary font-bold uppercase" />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase text-slate-500">Data Final</label>
                 <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white text-primary font-bold uppercase" />
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500">Observações Extras</label>
              <textarea placeholder="Se vinculando hóspede direto, adicione contatos..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white resize-none" rows={3}></textarea>
           </div>
        </div>
      </Modal>

    </div>
  );
}
