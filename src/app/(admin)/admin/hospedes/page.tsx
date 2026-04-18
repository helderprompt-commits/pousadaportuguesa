"use client";

import React, { useState } from 'react';
import { KpiCard } from '@/components/ui/KpiCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Modal } from '@/components/ui/Modal';
import { DonutChart } from '@/components/ui/DonutChart';

type GuestFilter = 'all' | 'contrato' | 'temporario';

interface Guest {
  id: number;
  name: string;
  unit: string;
  unitType: string;
  type: 'contrato' | 'temporario';
  source: string;
  checkIn: string;
  checkOut: string;
  value: string;
  status: 'active' | 'pending' | 'expired';
  statusLabel: string;
  daysLeft?: number;
}

export default function HospedesPage() {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState<GuestFilter>('all');

  const guests: Guest[] = [
    // Contratos Mensais (>30 dias)
    { id: 1, name: 'João Mendes', unit: 'Apt 01 — Bloco A', unitType: 'apt', type: 'contrato', source: 'Direto', checkIn: '01/03/2026', checkOut: '28/02/2027', value: 'R$ 1.200/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 330 },
    { id: 2, name: 'Ricardo Lemos', unit: 'Apt 03 — Bloco A', unitType: 'apt', type: 'contrato', source: 'Direto', checkIn: '15/08/2026', checkOut: '15/11/2026', value: 'R$ 1.800/mês', status: 'pending', statusLabel: 'Vence em 5d', daysLeft: 5 },
    { id: 3, name: 'Pedro Oliveira', unit: 'Apt 04 — Bloco A', unitType: 'apt', type: 'contrato', source: 'Porto do Açu', checkIn: '01/06/2026', checkOut: '30/11/2026', value: 'R$ 1.500/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 20 },
    { id: 4, name: 'Carlos Eng.', unit: 'Apt 06 — Bloco B', unitType: 'apt', type: 'contrato', source: 'Porto do Açu', checkIn: '01/09/2026', checkOut: '28/02/2027', value: 'R$ 1.400/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 120 },
    { id: 5, name: 'Fernanda Lima', unit: 'Apt 07 — Bloco B', unitType: 'apt', type: 'contrato', source: 'Direto', checkIn: '15/07/2026', checkOut: '15/01/2027', value: 'R$ 1.200/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 70 },
    { id: 6, name: 'Ana Luísa Marques', unit: 'Apt 11 — Bloco C', unitType: 'apt', type: 'contrato', source: 'Direto', checkIn: '01/05/2026', checkOut: '30/11/2026', value: 'R$ 1.500/mês', status: 'pending', statusLabel: 'Vence em 18d', daysLeft: 18 },
    { id: 7, name: 'Bruno Alves', unit: 'Apt 12 — Bloco C', unitType: 'apt', type: 'contrato', source: 'Corporativo', checkIn: '01/04/2026', checkOut: '31/03/2027', value: 'R$ 1.300/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 150 },
    { id: 8, name: 'Equipe RSLog', unit: 'Apt 13 — Bloco C', unitType: 'apt', type: 'contrato', source: 'Porto do Açu', checkIn: '01/07/2026', checkOut: '31/12/2026', value: 'R$ 1.700/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 50 },
    { id: 9, name: 'Marcos Eng.', unit: 'Apt 14 — Bloco C', unitType: 'apt', type: 'contrato', source: 'Porto do Açu', checkIn: '15/08/2026', checkOut: '14/08/2027', value: 'R$ 1.200/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 285 },
    { id: 10, name: 'Tomás Silva', unit: 'Apt 17 — Bloco D', unitType: 'apt', type: 'contrato', source: 'Direto', checkIn: '01/10/2026', checkOut: '01/04/2027', value: 'R$ 1.100/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 155 },
    { id: 11, name: 'Eq. Logística S/A', unit: 'Casa 01 — Central', unitType: 'casa', type: 'contrato', source: 'Corporativo', checkIn: '01/01/2026', checkOut: '31/12/2026', value: 'R$ 3.500/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 55 },
    { id: 12, name: 'Rafaela Costa', unit: 'Casa 02 — Fundos', unitType: 'casa', type: 'contrato', source: 'Direto', checkIn: '01/06/2026', checkOut: '30/11/2026', value: 'R$ 2.200/mês', status: 'pending', statusLabel: 'Vence em 12d', daysLeft: 12 },
    { id: 13, name: 'Eduardo Lins', unit: 'Casa 04 — Lateral', unitType: 'casa', type: 'contrato', source: 'Porto do Açu', checkIn: '15/09/2026', checkOut: '14/09/2027', value: 'R$ 2.800/mês', status: 'active', statusLabel: 'Ativo', daysLeft: 320 },
    // Temporários (<30 dias)
    { id: 14, name: 'Maria Souza', unit: 'Apt 02 — Bloco A', unitType: 'apt', type: 'temporario', source: 'Booking.com', checkIn: '05/11/2026', checkOut: '20/11/2026', value: 'R$ 180/dia', status: 'active', statusLabel: 'Hospedada', daysLeft: 5 },
    { id: 15, name: 'Luciana Torres', unit: 'Apt 09 — Bloco B', unitType: 'apt', type: 'temporario', source: 'Airbnb', checkIn: '10/11/2026', checkOut: '17/11/2026', value: 'R$ 200/dia', status: 'active', statusLabel: 'Hospedada', daysLeft: 2 },
    { id: 16, name: 'Daniela Rodrigues', unit: 'Apt 15 — Bloco C', unitType: 'apt', type: 'temporario', source: 'Booking.com', checkIn: '01/11/2026', checkOut: '21/11/2026', value: 'R$ 160/dia', status: 'active', statusLabel: 'Hospedada', daysLeft: 6 },
    { id: 17, name: 'Patrícia Moura', unit: 'Apt 20 — Bloco D', unitType: 'apt', type: 'temporario', source: 'Direto (WA)', checkIn: '08/11/2026', checkOut: '18/11/2026', value: 'R$ 190/dia', status: 'active', statusLabel: 'Hospedada', daysLeft: 3 },
    { id: 18, name: 'Fam. Albuquerque', unit: 'Casa 03 — Praia', unitType: 'casa', type: 'temporario', source: 'Booking.com', checkIn: '10/11/2026', checkOut: '22/11/2026', value: 'R$ 450/dia', status: 'active', statusLabel: 'Hospedados', daysLeft: 7 },
  ];

  const filtered = filter === 'all' ? guests : guests.filter(g => g.type === filter);
  const contratoCount = guests.filter(g => g.type === 'contrato').length;
  const tempCount = guests.filter(g => g.type === 'temporario').length;
  const alertCount = guests.filter(g => g.daysLeft !== undefined && g.daysLeft <= 15).length;

  return (
    <div className="flex-1 flex flex-col pb-8">
      {/* Header Row */}
      <header className="w-full bg-white/50 backdrop-blur-md p-6 flex flex-wrap justify-between items-center border-b border-slate-100 z-10 sticky top-0 gap-4">
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-extrabold text-[#1D3557] tracking-tight">Gestão de Hóspedes & Contratos</h2>
          <p className="text-sm text-slate-500 font-medium">{guests.length} registros ativos · {contratoCount} contratos · {tempCount} temporários</p>
        </div>
        <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="bg-white border border-slate-200 rounded-full pl-10 pr-4 py-2.5 text-sm w-64 focus:ring-2 focus:ring-primary outline-none shadow-sm" placeholder="Buscar hóspede..." type="text" />
          </div>
          <button onClick={() => setShowModal(true)} className="bg-primary text-white rounded-full py-2.5 px-5 font-bold text-sm flex items-center gap-2 shadow-md hover:opacity-90 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-sm">person_add</span> Cadastrar
          </button>
        </div>
      </header>

      <div className="px-6 py-6 space-y-8">
        {/* KPIs Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <KpiCard label="Total de Registros" value={guests.length} trend={`${contratoCount} contratos`} trendLabel={`+ ${tempCount} temp.`} icon="groups" animationDelay={0} />
          <KpiCard label="Receita Mensal c/ Hóspedes" value="R$ 52.600" trend="+6.3%" trendLabel="vs mês anterior" variant="primary" icon="attach_money" animationDelay={80} />
          <KpiCard label="Contratos a Vencer (15d)" value={alertCount} trend="Ação necessária" variant="warning" icon="hourglass_empty" animationDelay={160} />
          <KpiCard label="Diária Média (Temp.)" value="R$ 236" trend="5 hóspedes" trendLabel="ativos" icon="bed" animationDelay={240} />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Donut: Type Split */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="font-bold text-[#1D3557] mb-4 self-start">Distribuição por Tipo</h4>
            <DonutChart
              size={150}
              strokeWidth={20}
              segments={[
                { label: 'Contrato', value: contratoCount, color: '#1D3557' },
                { label: 'Temporário', value: tempCount, color: '#800000' },
              ]}
              centerValue={`${guests.length}`}
              centerLabel="Total"
            />
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#1D3557]"></div><span className="text-[11px] font-bold text-slate-600">Contrato ({contratoCount})</span></div>
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#800000]"></div><span className="text-[11px] font-bold text-slate-600">Temporário ({tempCount})</span></div>
            </div>
          </div>

          {/* Donut: Source */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h4 className="font-bold text-[#1D3557] mb-4 self-start">Canal de Origem</h4>
            <DonutChart
              size={150}
              strokeWidth={20}
              segments={[
                { label: 'Direto', value: guests.filter(g => g.source.includes('Direto')).length, color: '#1D3557' },
                { label: 'Porto Açu', value: guests.filter(g => g.source.includes('Porto')).length, color: '#2A4B7C' },
                { label: 'Booking', value: guests.filter(g => g.source.includes('Booking')).length, color: '#800000' },
                { label: 'Airbnb', value: guests.filter(g => g.source.includes('Airbnb')).length, color: '#8B5A2B' },
                { label: 'Corporativo', value: guests.filter(g => g.source === 'Corporativo').length, color: '#22c55e' },
              ]}
              centerValue=""
              centerLabel="Canais"
            />
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#1D3557]"></div><span className="text-[10px] font-bold text-slate-500">Direto</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#2A4B7C]"></div><span className="text-[10px] font-bold text-slate-500">Porto Açu</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#800000]"></div><span className="text-[10px] font-bold text-slate-500">Booking</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#8B5A2B]"></div><span className="text-[10px] font-bold text-slate-500">Airbnb</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#22c55e]"></div><span className="text-[10px] font-bold text-slate-500">Corp.</span></div>
            </div>
          </div>

          {/* Donut: Unit Type */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h4 className="font-bold text-[#1D3557] mb-4 self-start">Ocupação por Tipo</h4>
            <DonutChart
              size={150}
              strokeWidth={20}
              segments={[
                { label: 'Apartamentos', value: guests.filter(g => g.unitType === 'apt').length, color: '#1D3557' },
                { label: 'Casas', value: guests.filter(g => g.unitType === 'casa').length, color: '#8B5A2B' },
              ]}
              centerValue={`${guests.length}`}
              centerLabel="Hóspedes"
            />
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#1D3557]"></div><span className="text-[11px] font-bold text-slate-600">🏢 Apts ({guests.filter(g => g.unitType === 'apt').length})</span></div>
              <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#8B5A2B]"></div><span className="text-[11px] font-bold text-slate-600">🏠 Casas ({guests.filter(g => g.unitType === 'casa').length})</span></div>
            </div>
          </div>
        </div>

        {/* Type Toggle & Table */}
        <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {(['all', 'contrato', 'temporario'] as GuestFilter[]).map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${filter === f ? 'bg-primary text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary/30'}`}>
              {f === 'all' ? `Todos (${guests.length})` : f === 'contrato' ? `📋 Contratos (${contratoCount})` : `🏖️ Temporários (${tempCount})`}
            </button>
          ))}
        </div>

        {/* Guest Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 border-b border-slate-100">
                  <th className="px-6 py-4">Hóspede / Inquilino</th>
                  <th className="px-4 py-4">Unidade</th>
                  <th className="px-4 py-4">Tipo</th>
                  <th className="px-4 py-4">Canal</th>
                  <th className="px-4 py-4">Check-in</th>
                  <th className="px-4 py-4">Check-out</th>
                  <th className="px-4 py-4">Restante</th>
                  <th className="px-4 py-4">Valor</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filtered.map((g) => (
                  <tr key={g.id} className={`hover:bg-slate-50 transition-colors ${g.daysLeft !== undefined && g.daysLeft <= 7 ? 'bg-red-50/50' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-[#1D3557] font-bold text-xs shrink-0">
                          {g.name.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="font-bold text-[#1D3557] text-sm">{g.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700 font-medium">{g.unit}</td>
                    <td className="px-4 py-4">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${g.type === 'contrato' ? 'bg-[#1D3557]/10 text-[#1D3557]' : 'bg-[#800000]/10 text-[#800000]'}`}>
                        {g.type === 'contrato' ? '📋 Mensal' : '🏖️ Temp.'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-xs text-slate-500 font-medium">{g.source}</td>
                    <td className="px-4 py-4 text-xs text-slate-600 font-medium">{g.checkIn}</td>
                    <td className="px-4 py-4 text-xs text-slate-600 font-medium">{g.checkOut}</td>
                    <td className="px-4 py-4">
                      {g.daysLeft !== undefined && (
                        <span className={`text-xs font-extrabold ${g.daysLeft <= 7 ? 'text-red-600' : g.daysLeft <= 15 ? 'text-amber-600' : 'text-slate-400'}`}>
                          {g.daysLeft}d
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm font-bold text-[#1D3557]">{g.value}</td>
                    <td className="px-4 py-4"><StatusBadge status={g.status} label={g.statusLabel} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 text-sm text-slate-500 border-t border-slate-100 flex justify-between">
            <span>Mostrando {filtered.length} de {guests.length}</span>
            <span className="text-red-500 font-bold">{alertCount} alerta{alertCount !== 1 ? 's' : ''} de vencimento</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Cadastrar Hóspede / Inquilino" subtitle="Vincule à uma unidade disponível."
        footerActions={<><button onClick={() => setShowModal(false)} className="text-[#1D3557] font-bold text-sm uppercase tracking-widest">Cancelar</button><button onClick={() => setShowModal(false)} className="bg-primary text-white rounded-full px-8 py-3 font-bold shadow-lg flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"><span>Salvar</span><span className="material-symbols-outlined">save</span></button></>}>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Nome Completo</label><input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary" placeholder="João da Silva" /></div>
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Canal de Origem</label><select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary"><option>Direto (WhatsApp)</option><option>Booking.com</option><option>Airbnb</option><option>Porto do Açu (Corporativo)</option></select></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Tipo de Hospedagem</label><select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary"><option>Contrato Mensal (&gt;30d)</option><option>Temporária (&lt;30d)</option></select></div>
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Vincular Unidade</label><select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary"><option>Selecione...</option><option>Apt 05 — Bloco A</option><option>Casa 05 — Esquina</option><option>Casa 06 — Premium</option></select></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Check-in</label><input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary" /></div>
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Check-out / Fim Contrato</label><input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary" /></div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
