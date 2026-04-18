"use client";

import React from 'react';
import { KpiCard } from '@/components/ui/KpiCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { DonutChart } from '@/components/ui/DonutChart';
import { MiniBarChart } from '@/components/ui/MiniBarChart';
import { ProgressBar } from '@/components/ui/ProgressBar';

export default function FinanceiroPage() {

  // Revenue breakdown
  const recContrato = 42200;  // Contratos mensais
  const recTemporario = 18600; // Diárias <30d
  const recVendas = 2000;      // Parcela de vendas
  const recTotal = recContrato + recTemporario + recVendas;
  const inadimplencia = 5300;
  const metaMensal = 70000;
  const percentMeta = Math.round((recTotal / metaMensal) * 100);

  return (
    <div className="flex-1 flex flex-col p-8 space-y-10 pb-12">
      <header className="animate-fade-in-up">
        <h2 className="text-3xl font-extrabold text-[#1D3557]">Relatório Financeiro</h2>
        <p className="text-slate-500 font-medium text-sm">Controle de receita, inadimplência e projeções — 20 apartamentos + 6 casas</p>
      </header>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        <KpiCard label="Faturamento Mês" value={`R$ ${(recTotal / 1000).toFixed(1)}k`} trend={`${percentMeta}% da meta`} trendLabel={`(R$${(metaMensal/1000).toFixed(0)}k)`} variant="primary" icon="account_balance_wallet" animationDelay={0} />
        <KpiCard label="Contratos Mensais" value={`R$ ${(recContrato / 1000).toFixed(1)}k`} trend="67% da receita" icon="description" animationDelay={80} />
        <KpiCard label="Diárias Temporárias" value={`R$ ${(recTemporario / 1000).toFixed(1)}k`} trend="30% da receita" icon="hotel" animationDelay={160} />
        <KpiCard label="Inadimplência" value={`R$ ${(inadimplencia / 1000).toFixed(1)}k`} trend="2 contratos" trendLabel="em atraso" variant="warning" icon="warning" animationDelay={240} />
        <KpiCard label="Receita com Vendas" value={`R$ ${(recVendas / 1000).toFixed(1)}k`} trend="Parcelas/mês" icon="real_estate_agent" animationDelay={320} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Donut: Distr. de Receita */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h3 className="font-bold text-lg text-[#1D3557] mb-2 self-start">Origem da Receita</h3>
          <p className="text-xs text-slate-500 mb-6 self-start">Breakdown mensal por canal</p>
          <DonutChart
            segments={[
              { label: 'Contrato Mensal', value: recContrato, color: '#1D3557' },
              { label: 'Diárias <30d', value: recTemporario, color: '#800000' },
              { label: 'Vendas (parcela)', value: recVendas, color: '#22c55e' },
            ]}
            centerValue={`R$ ${(recTotal / 1000).toFixed(0)}k`}
            centerLabel="Total/Mês"
          />
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#1D3557]"></div><span className="text-xs font-bold text-slate-600">Contrato ({Math.round(recContrato/recTotal*100)}%)</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#800000]"></div><span className="text-xs font-bold text-slate-600">Temporário ({Math.round(recTemporario/recTotal*100)}%)</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#22c55e]"></div><span className="text-xs font-bold text-slate-600">Vendas ({Math.round(recVendas/recTotal*100)}%)</span></div>
          </div>
        </div>

        {/* Evolução Mensal */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h3 className="font-bold text-lg text-[#1D3557] mb-2">Evolução Mensal 2026</h3>
          <p className="text-xs text-slate-500 mb-6">Faturamento bruto por mês</p>
          <MiniBarChart
            height={200}
            valuePrefix="R$ "
            data={[
              { label: 'JAN', value: 48000, color: '#1D3557' },
              { label: 'FEV', value: 52000, color: '#1D3557' },
              { label: 'MAR', value: 55000, color: '#1D3557' },
              { label: 'ABR', value: 51000, color: '#1D3557' },
              { label: 'MAI', value: 58000, color: '#1D3557' },
              { label: 'JUN', value: 62000, color: '#2A4B7C' },
              { label: 'JUL', value: 65000, color: '#2A4B7C' },
              { label: 'AGO', value: 59000, color: '#2A4B7C' },
              { label: 'SET', value: 61000, color: '#2A4B7C' },
              { label: 'OUT', value: 60000, color: '#2A4B7C' },
              { label: 'NOV', value: recTotal, color: '#800000' },
            ]}
          />
        </div>

        {/* Meta Tracking */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="font-bold text-lg text-[#1D3557] mb-2">Atingimento de Meta</h3>
          <p className="text-xs text-slate-500 mb-6">Mensal: R$ {(metaMensal/1000).toFixed(0)}k</p>
          <div className="flex flex-col items-center mb-6">
            <DonutChart
              size={160}
              strokeWidth={20}
              segments={[
                { label: 'Atingido', value: Math.min(recTotal, metaMensal), color: percentMeta >= 100 ? '#22c55e' : '#1D3557' },
                { label: 'Restante', value: Math.max(metaMensal - recTotal, 0), color: '#e2e8f0' },
              ]}
              centerValue={`${percentMeta}%`}
              centerLabel="da Meta"
            />
          </div>
          <div className="space-y-3 mt-2">
            <ProgressBar label="Contratos" value={recContrato} max={metaMensal * 0.65} color="#1D3557" showFraction={false} suffix="" />
            <ProgressBar label="Temporárias" value={recTemporario} max={metaMensal * 0.30} color="#800000" showFraction={false} suffix="" />
            <ProgressBar label="Vendas" value={recVendas} max={metaMensal * 0.05} color="#22c55e" showFraction={false} suffix="" />
          </div>
        </div>
      </div>

      {/* Receivables & Projection Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Receitas Liquidadas */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#1D3557] flex items-center gap-2"><span className="material-symbols-outlined text-emerald-500">check_circle</span> Receitas Liquidadas</h3>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Últimos 7 dias</span>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { desc: 'Aluguéis Contratos Mensais', detail: '12 unidades — Débito Auto', val: 'R$ 18.500', badge: 'active', label: 'Liquidado' },
              { desc: 'Booking.com Payout', detail: 'Diárias Nov/2026', val: 'R$ 4.200', badge: 'active', label: 'Creditado' },
              { desc: 'Airbnb Payout', detail: '2 estadias Nov/2026', val: 'R$ 2.600', badge: 'active', label: 'Creditado' },
              { desc: 'PIX Direto — Fam. Albuquerque', detail: 'Casa 03 Praia 12 diárias', val: 'R$ 5.400', badge: 'active', label: 'Pago' },
              { desc: 'Parcela Venda Apt 16', detail: '8/36 Financiamento CEF', val: 'R$ 1.200', badge: 'active', label: 'Recebido' },
            ].map((t, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div>
                  <p className="font-bold text-[#1D3557] text-sm">{t.desc}</p>
                  <p className="text-xs text-slate-500">{t.detail}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-extrabold text-[#1D3557]">{t.val}</span>
                  <StatusBadge status={t.badge as any} label={t.label} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pendências & Inadimplência */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#1D3557] flex items-center gap-2"><span className="material-symbols-outlined text-amber-500">schedule</span> Pendências e Atrasos</h3>
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{inadimplencia > 0 ? `R$ ${(inadimplencia/1000).toFixed(1)}k em aberto` : 'Sem atrasos'}</span>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { desc: 'Aluguel Atrasado — Ricardo Lemos', detail: 'Apt 03 Bloco A · 5 dias de atraso', val: 'R$ 1.800', badge: 'expired', label: 'Atraso 5d' },
              { desc: 'Aluguel Atrasado — Eq. Logística S/A', detail: 'Casa 01 Central · 2 dias de atraso', val: 'R$ 3.500', badge: 'expired', label: 'Atraso 2d' },
              { desc: 'Fatura Booking Pendente', detail: 'Previsão de payout em processamento', val: 'R$ 3.100', badge: 'pending', label: 'Em processamento' },
              { desc: 'Parcela Venda Apt 18', detail: '5/48 — Aguardando BV Financeira', val: 'R$ 1.400', badge: 'pending', label: 'Aguardando' },
            ].map((t, i) => (
              <div key={i} className={`px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors ${t.badge === 'expired' ? 'bg-red-50/50' : ''}`}>
                <div>
                  <p className="font-bold text-[#1D3557] text-sm">{t.desc}</p>
                  <p className="text-xs text-slate-500">{t.detail}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-extrabold text-[#1D3557]">{t.val}</span>
                  <StatusBadge status={t.badge as any} label={t.label} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Annual Summary + Projections */}
      <div className="bg-primary rounded-2xl p-10 text-white relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '700ms' }}>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Faturamento 2026 (Acum.)</p>
            <p className="text-4xl font-extrabold">R$ 671k</p>
          </div>
          <div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Projeção Anual (Dez)</p>
            <p className="text-4xl font-extrabold text-emerald-300">R$ 760k</p>
          </div>
          <div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Vendas de Imóvel (Total)</p>
            <p className="text-4xl font-extrabold">R$ 720k</p>
            <p className="text-white/50 text-xs mt-1">2 unidades vendidas</p>
          </div>
          <div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Ticket Médio/Unidade</p>
            <p className="text-4xl font-extrabold">R$ 2.633</p>
            <p className="text-white/50 text-xs mt-1">Base: 24 un. alugáveis</p>
          </div>
        </div>
        <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[200px] text-white/5">monitoring</span>
      </div>
    </div>
  );
}
