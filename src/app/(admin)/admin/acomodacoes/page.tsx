"use client";

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { StatusBadge } from '@/components/ui/StatusBadge';

type UnitType = 'all' | 'apartamento' | 'casa';
type UnitStatus = 'all' | 'alugado' | 'disponivel' | 'vendido';

interface Unit {
  id: number;
  name: string;
  type: 'apartamento' | 'casa';
  status: 'alugado' | 'disponivel' | 'vendido';
  bedrooms: number;
  tenant?: string;
  tenantType?: string;
  price: string;
  image: string;
}

export default function AcomodacoesPage() {
  const [showModal, setShowModal] = useState(false);
  const [typeFilter, setTypeFilter] = useState<UnitType>('all');
  const [statusFilter, setStatusFilter] = useState<UnitStatus>('all');

  const units: Unit[] = [
    // Apartamentos
    { id: 1, name: 'Apt 01 — Bloco A', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'João Mendes', tenantType: 'Contrato Mensal', price: 'R$ 1.200/mês', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400' },
    { id: 2, name: 'Apt 02 — Bloco A', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'Maria Souza', tenantType: 'Turismo 15d', price: 'R$ 180/dia', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
    { id: 3, name: 'Apt 03 — Bloco A', type: 'apartamento', status: 'alugado', bedrooms: 2, tenant: 'Ricardo Lemos', tenantType: 'Contrato Mensal', price: 'R$ 1.800/mês', image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400' },
    { id: 4, name: 'Apt 04 — Bloco A', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'Pedro Oliveira', tenantType: 'Corporativo', price: 'R$ 1.500/mês', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400' },
    { id: 5, name: 'Apt 05 — Bloco A', type: 'apartamento', status: 'disponivel', bedrooms: 2, price: 'R$ 1.600/mês', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
    { id: 6, name: 'Apt 06 — Bloco B', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'Carlos Eng.', tenantType: 'Porto do Açu', price: 'R$ 1.400/mês', image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400' },
    { id: 7, name: 'Apt 07 — Bloco B', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'Fernanda Lima', tenantType: 'Contrato Mensal', price: 'R$ 1.200/mês', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400' },
    { id: 8, name: 'Apt 08 — Bloco B', type: 'apartamento', status: 'disponivel', bedrooms: 2, price: 'R$ 1.800/mês', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
    { id: 9, name: 'Apt 09 — Bloco B', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'Luciana Torres', tenantType: 'Turismo 7d', price: 'R$ 200/dia', image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400' },
    { id: 10, name: 'Apt 10 — Bloco B', type: 'apartamento', status: 'disponivel', bedrooms: 1, price: 'R$ 1.100/mês', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400' },
    { id: 11, name: 'Apt 11 — Bloco C', type: 'apartamento', status: 'alugado', bedrooms: 2, tenant: 'Ana Luísa', tenantType: 'Contrato Mensal', price: 'R$ 1.500/mês', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
    { id: 12, name: 'Apt 12 — Bloco C', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'Bruno Alves', tenantType: 'Corporativo', price: 'R$ 1.300/mês', image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400' },
    { id: 13, name: 'Apt 13 — Bloco C', type: 'apartamento', status: 'alugado', bedrooms: 2, tenant: 'Equipe RSLog', tenantType: 'Porto do Açu', price: 'R$ 1.700/mês', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400' },
    { id: 14, name: 'Apt 14 — Bloco C', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'Marcos Eng.', tenantType: 'Contrato Mensal', price: 'R$ 1.200/mês', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
    { id: 15, name: 'Apt 15 — Bloco C', type: 'apartamento', status: 'alugado', bedrooms: 2, tenant: 'Daniela R.', tenantType: 'Turismo 20d', price: 'R$ 160/dia', image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400' },
    { id: 16, name: 'Apt 16 — Bloco D', type: 'apartamento', status: 'vendido', bedrooms: 2, price: 'R$ 320.000', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400' },
    { id: 17, name: 'Apt 17 — Bloco D', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'Tomás Silva', tenantType: 'Contrato Mensal', price: 'R$ 1.100/mês', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
    { id: 18, name: 'Apt 18 — Bloco D', type: 'apartamento', status: 'vendido', bedrooms: 2, price: 'R$ 400.000', image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=400' },
    { id: 19, name: 'Apt 19 — Bloco D', type: 'apartamento', status: 'disponivel', bedrooms: 1, price: 'R$ 1.200/mês', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400' },
    { id: 20, name: 'Apt 20 — Bloco D', type: 'apartamento', status: 'alugado', bedrooms: 1, tenant: 'Patrícia M.', tenantType: 'Turismo 10d', price: 'R$ 190/dia', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
    // Casas
    { id: 21, name: 'Casa 01 — Central', type: 'casa', status: 'alugado', bedrooms: 3, tenant: 'Equipe Logística S/A', tenantType: 'Corporativo 12m', price: 'R$ 3.500/mês', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400' },
    { id: 22, name: 'Casa 02 — Fundos', type: 'casa', status: 'alugado', bedrooms: 2, tenant: 'Rafaela Costa', tenantType: 'Contrato Mensal', price: 'R$ 2.200/mês', image: 'https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?w=400' },
    { id: 23, name: 'Casa 03 — Praia', type: 'casa', status: 'alugado', bedrooms: 4, tenant: 'Fam. Albuquerque', tenantType: 'Turismo 12d', price: 'R$ 450/dia', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400' },
    { id: 24, name: 'Casa 04 — Lateral', type: 'casa', status: 'alugado', bedrooms: 2, tenant: 'Eduardo Lins', tenantType: 'Porto do Açu', price: 'R$ 2.800/mês', image: 'https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?w=400' },
    { id: 25, name: 'Casa 05 — Esquina', type: 'casa', status: 'disponivel', bedrooms: 3, price: 'R$ 3.000/mês', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400' },
    { id: 26, name: 'Casa 06 — Premium', type: 'casa', status: 'disponivel', bedrooms: 5, price: 'R$ 4.500/mês', image: 'https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?w=400' },
  ];

  const filtered = units.filter(u => {
    if (typeFilter !== 'all' && u.type !== typeFilter) return false;
    if (statusFilter !== 'all' && u.status !== statusFilter) return false;
    return true;
  });

  const countByStatus = (s: string) => units.filter(u => u.status === s).length;

  const statusColor = (s: string) => {
    switch (s) {
      case 'alugado': return 'rented' as const;
      case 'disponivel': return 'available' as const;
      case 'vendido': return 'expired' as const;
      default: return 'active' as const;
    }
  };

  const statusLabel = (s: string) => {
    switch (s) {
      case 'alugado': return 'Alugado';
      case 'disponivel': return 'Disponível';
      case 'vendido': return 'Vendido';
      default: return s;
    }
  };

  return (
    <div className="flex-1 flex flex-col pb-8">
      {/* Header */}
      <header className="w-full bg-white/50 backdrop-blur-md flex flex-wrap justify-between items-center px-8 py-6 border-b border-slate-100 z-10 sticky top-0 gap-4">
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-extrabold text-[#1D3557] tracking-tight">Portfólio de Imóveis</h2>
          <p className="text-slate-500 text-sm font-medium">{units.length} unidades cadastradas · {units.filter(u => u.type === 'apartamento').length} apartamentos · {units.filter(u => u.type === 'casa').length} casas</p>
        </div>
        <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full focus:ring-2 focus:ring-primary w-60 text-sm outline-none shadow-sm" placeholder="Buscar unidade..." type="text" />
          </div>
          <button onClick={() => setShowModal(true)} className="bg-primary text-white rounded-full py-2.5 px-5 font-bold text-sm hover:opacity-90 flex items-center gap-2 shadow-md active:scale-95 transition-all">
            <span className="material-symbols-outlined text-sm">add</span> Cadastrar
          </button>
        </div>
      </header>

      <div className="px-8 py-6 space-y-6 flex-1">
        {/* Summary Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <button onClick={() => setStatusFilter('all')} className={`p-4 rounded-xl border text-left transition-all ${statusFilter === 'all' ? 'bg-primary text-white border-primary shadow-md' : 'bg-white border-slate-200 hover:border-primary/30'}`}>
            <span className={`text-3xl font-extrabold ${statusFilter === 'all' ? '' : 'text-[#1D3557]'}`}>{units.length}</span>
            <span className={`block text-xs font-bold uppercase tracking-widest mt-1 ${statusFilter === 'all' ? 'text-white/70' : 'text-slate-500'}`}>Total</span>
          </button>
          <button onClick={() => setStatusFilter('alugado')} className={`p-4 rounded-xl border text-left transition-all ${statusFilter === 'alugado' ? 'bg-[#1D3557] text-white border-[#1D3557] shadow-md' : 'bg-white border-slate-200 hover:border-[#1D3557]/30'}`}>
            <span className={`text-3xl font-extrabold ${statusFilter === 'alugado' ? '' : 'text-[#1D3557]'}`}>{countByStatus('alugado')}</span>
            <span className={`block text-xs font-bold uppercase tracking-widest mt-1 ${statusFilter === 'alugado' ? 'text-white/70' : 'text-slate-500'}`}>Alugados</span>
          </button>
          <button onClick={() => setStatusFilter('disponivel')} className={`p-4 rounded-xl border text-left transition-all ${statusFilter === 'disponivel' ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white border-slate-200 hover:border-emerald-300'}`}>
            <span className={`text-3xl font-extrabold ${statusFilter === 'disponivel' ? '' : 'text-emerald-600'}`}>{countByStatus('disponivel')}</span>
            <span className={`block text-xs font-bold uppercase tracking-widest mt-1 ${statusFilter === 'disponivel' ? 'text-white/70' : 'text-slate-500'}`}>Disponíveis</span>
          </button>
          <button onClick={() => setStatusFilter('vendido')} className={`p-4 rounded-xl border text-left transition-all ${statusFilter === 'vendido' ? 'bg-[#8B5A2B] text-white border-[#8B5A2B] shadow-md' : 'bg-white border-slate-200 hover:border-[#8B5A2B]/30'}`}>
            <span className={`text-3xl font-extrabold ${statusFilter === 'vendido' ? '' : 'text-[#8B5A2B]'}`}>{countByStatus('vendido')}</span>
            <span className={`block text-xs font-bold uppercase tracking-widest mt-1 ${statusFilter === 'vendido' ? 'text-white/70' : 'text-slate-500'}`}>Vendidos</span>
          </button>
        </div>

        {/* Type Filter */}
        <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tipo:</span>
          {(['all', 'apartamento', 'casa'] as UnitType[]).map(t => (
            <button key={t} onClick={() => setTypeFilter(t)} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${typeFilter === t ? 'bg-primary text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {t === 'all' ? 'Todos' : t === 'apartamento' ? '🏢 Apartamentos' : '🏠 Casas'}
            </button>
          ))}
          <span className="ml-auto text-sm text-slate-500 font-medium">{filtered.length} resultado{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        {/* Units Table/List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 border-b border-slate-100">
                  <th className="px-6 py-4">Unidade</th>
                  <th className="px-4 py-4">Tipo</th>
                  <th className="px-4 py-4">Quartos</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Inquilino/Hóspede</th>
                  <th className="px-4 py-4">Modalidade</th>
                  <th className="px-4 py-4 text-right">Valor</th>
                  <th className="px-4 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filtered.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                          <img src={u.image} className="w-full h-full object-cover" alt={u.name} />
                        </div>
                        <span className="font-bold text-[#1D3557] text-sm">{u.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-lg">{u.type === 'apartamento' ? '🏢' : '🏠'}</span>
                    </td>
                    <td className="px-4 py-4 text-sm font-bold text-slate-600">{u.bedrooms}Q</td>
                    <td className="px-4 py-4"><StatusBadge status={statusColor(u.status)} label={statusLabel(u.status)} /></td>
                    <td className="px-4 py-4 text-sm text-slate-700 font-medium">{u.tenant || <span className="text-slate-300">—</span>}</td>
                    <td className="px-4 py-4 text-xs text-slate-500 font-medium">{u.tenantType || <span className="text-slate-300">—</span>}</td>
                    <td className="px-4 py-4 text-right font-bold text-[#1D3557] text-sm">{u.price}</td>
                    <td className="px-4 py-4">
                      <button className="p-2 text-slate-300 hover:text-primary hover:bg-primary/5 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined text-sm">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 text-sm text-slate-500 border-t border-slate-100">
            Mostrando {filtered.length} de {units.length} unidades
          </div>
        </div>
      </div>

      {/* Modal Cadastro */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Cadastrar Unidade" subtitle="Adicione um apartamento ou casa ao portfólio."
        footerActions={<><button onClick={() => setShowModal(false)} className="text-[#1D3557] font-bold text-sm uppercase tracking-widest">Cancelar</button><button onClick={() => setShowModal(false)} className="bg-primary text-white rounded-full px-8 py-3 font-bold shadow-lg flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"><span>Salvar</span><span className="material-symbols-outlined">check_circle</span></button></>}>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Nome</label><input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary" placeholder="Ex: Apt 21 — Bloco E" /></div>
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Tipo</label><select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary"><option>Apartamento</option><option>Casa</option></select></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Quartos</label><input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary" placeholder="2" /></div>
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Status Inicial</label><select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary"><option>Disponível</option><option>Alugado</option><option>Vendido</option></select></div>
            <div className="space-y-2"><label className="text-xs font-bold uppercase text-slate-500">Valor</label><input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary" placeholder="R$ 1.500/mês" /></div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
