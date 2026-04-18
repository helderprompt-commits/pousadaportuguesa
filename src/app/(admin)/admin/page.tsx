"use client";

import React from "react";
import Link from "next/link";
import { KpiCard } from "@/components/ui/KpiCard";
import { DonutChart } from "@/components/ui/DonutChart";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MiniBarChart } from "@/components/ui/MiniBarChart";

export default function AdminDashboard() {
  // Dados reais do portfólio
  const totalApartamentos = 20;
  const totalCasas = 6;
  const totalUnidades = totalApartamentos + totalCasas;

  // Status dos imóveis
  const aptsAlugados = 14;
  const aptsVendidos = 2;
  const aptsDisponiveis = totalApartamentos - aptsAlugados - aptsVendidos;
  const casasAlugadas = 4;
  const casasDisponiveis = totalCasas - casasAlugadas;

  // Ocupação total (sem vendidos)
  const alugaveis = totalUnidades - aptsVendidos;
  const ocupados = aptsAlugados + casasAlugadas;
  const taxaOcupacao = Math.round((ocupados / alugaveis) * 100);

  // Hospedagem
  const contratosMensais = 12; // >30 dias
  const hospesTemporal = 6;     // <30 dias

  return (
    <section className="p-8 space-y-10 azulejo-pattern flex-1">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 animate-fade-in-up">
        <div>
          <p className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs mb-3">Painel Executivo</p>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary leading-none tracking-tighter">
            Visão Geral do Portfólio
          </h2>
          <p className="text-secondary mt-2 font-medium">{totalUnidades} unidades · {totalApartamentos} apartamentos · {totalCasas} casas</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/acomodacoes" className="px-6 py-3 bg-primary text-white rounded-full font-bold text-sm shadow-lg hover:-translate-y-1 transition-transform flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">domain</span>
            Ver Portfólio
          </Link>
          <Link href="/admin/financeiro" className="px-6 py-3 bg-white text-primary border border-outline-variant/30 rounded-full font-bold text-sm shadow-sm hover:-translate-y-1 transition-transform">
            Relatório Financeiro
          </Link>
        </div>
      </div>

      {/* KPI Row Principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        <KpiCard label="Taxa de Ocupação" value={`${taxaOcupacao}%`} trend="+3%" trendLabel="vs mês anterior" icon="pie_chart" animationDelay={0} />
        <KpiCard label="Receita Mensal" value="R$ 68.400" trend="+8.2%" trendLabel="vs mês anterior" variant="primary" icon="payments" animationDelay={80} />
        <KpiCard label="Contratos Ativos" value={contratosMensais} trend="Mensais >30d" icon="description" animationDelay={160} />
        <KpiCard label="Hospedagens Temp." value={hospesTemporal} trend="Diárias <30d" variant="warning" icon="hotel" animationDelay={240} />
        <KpiCard label="Imóveis Vendidos" value={aptsVendidos} trend="R$ 720k" trendLabel="acumulado" icon="sell" animationDelay={320} />
      </div>

      {/* Visualizações: Donut + Barras + Ocupação */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Donut: Distribuição do Portfólio */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h3 className="font-bold text-lg text-[#1D3557] mb-2">Distribuição do Portfólio</h3>
          <p className="text-xs text-slate-500 mb-6">Status atual das {totalUnidades} unidades</p>
          <div className="flex flex-col items-center">
            <DonutChart
              segments={[
                { label: 'Alugados', value: ocupados, color: '#1D3557' },
                { label: 'Disponíveis', value: aptsDisponiveis + casasDisponiveis, color: '#22c55e' },
                { label: 'Vendidos', value: aptsVendidos, color: '#8B5A2B' },
              ]}
              centerValue={`${ocupados}`}
              centerLabel="Ocupados"
            />
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#1D3557]"></div><span className="text-xs font-bold text-slate-600">Alugados ({ocupados})</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#22c55e]"></div><span className="text-xs font-bold text-slate-600">Disponíveis ({aptsDisponiveis + casasDisponiveis})</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#8B5A2B]"></div><span className="text-xs font-bold text-slate-600">Vendidos ({aptsVendidos})</span></div>
            </div>
          </div>
        </div>

        {/* Donut: Tipo de Hospedagem */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h3 className="font-bold text-lg text-[#1D3557] mb-2">Tipo de Hospedagem</h3>
          <p className="text-xs text-slate-500 mb-6">Contrato mensal vs temporário</p>
          <div className="flex flex-col items-center">
            <DonutChart
              segments={[
                { label: 'Contrato Mensal', value: contratosMensais, color: '#1D3557' },
                { label: 'Temporária <30d', value: hospesTemporal, color: '#800000' },
              ]}
              centerValue={`${contratosMensais + hospesTemporal}`}
              centerLabel="Hóspedes"
            />
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#1D3557]"></div><span className="text-xs font-bold text-slate-600">Contrato ({contratosMensais})</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#800000]"></div><span className="text-xs font-bold text-slate-600">Temporária ({hospesTemporal})</span></div>
            </div>
          </div>
        </div>

        {/* Receita por Fonte */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="font-bold text-lg text-[#1D3557] mb-2">Receita por Canal</h3>
          <p className="text-xs text-slate-500 mb-6">Origem do faturamento mensal</p>
          <MiniBarChart
            height={180}
            valuePrefix="R$ "
            data={[
              { label: 'Contrato\nMensal', value: 42000, color: '#1D3557' },
              { label: 'Diárias\nTurismo', value: 12400, color: '#800000' },
              { label: 'Booking\n.com', value: 8200, color: '#2A4B7C' },
              { label: 'Airbnb', value: 3800, color: '#8B5A2B' },
              { label: 'Venda\nImóvel', value: 2000, color: '#22c55e' },
            ]}
          />
        </div>
      </div>

      {/* Ocupação por Tipo de Unidade */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <h3 className="font-bold text-lg text-[#1D3557] mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">apartment</span>
            Ocupação dos Apartamentos ({totalApartamentos} unidades)
          </h3>
          <div className="space-y-4">
            <ProgressBar label="Bloco A (Apts 01–05)" value={4} max={5} color="#1D3557" suffix="ocupados" />
            <ProgressBar label="Bloco B (Apts 06–10)" value={3} max={5} color="#2A4B7C" suffix="ocupados" />
            <ProgressBar label="Bloco C (Apts 11–15)" value={5} max={5} color="#1D3557" suffix="ocupados" />
            <ProgressBar label="Bloco D (Apts 16–20)" value={2} max={5} color="#8B5A2B" suffix="ocupados" />
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm font-bold text-slate-500">Total Ocupado</span>
            <span className="text-lg font-extrabold text-[#1D3557]">{aptsAlugados}/{totalApartamentos - aptsVendidos} <span className="text-sm font-normal text-slate-400">(excl. vendidos)</span></span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h3 className="font-bold text-lg text-[#1D3557] mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">home</span>
            Ocupação das Casas ({totalCasas} unidades)
          </h3>
          <div className="space-y-4">
            <ProgressBar label="Casa 01 — Central (3 quartos)" value={1} max={1} color="#1D3557" suffix="contrato" />
            <ProgressBar label="Casa 02 — Fundos (2 quartos)" value={1} max={1} color="#1D3557" suffix="contrato" />
            <ProgressBar label="Casa 03 — Praia (4 quartos)" value={1} max={1} color="#800000" suffix="temporária" />
            <ProgressBar label="Casa 04 — Lateral (2 quartos)" value={1} max={1} color="#1D3557" suffix="contrato" />
            <ProgressBar label="Casa 05 — Esquina (3 quartos)" value={0} max={1} color="#22c55e" suffix="disponível" />
            <ProgressBar label="Casa 06 — Premium (5 quartos)" value={0} max={1} color="#22c55e" suffix="disponível" />
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm font-bold text-slate-500">Total Ocupado</span>
            <span className="text-lg font-extrabold text-[#1D3557]">{casasAlugadas}/{totalCasas}</span>
          </div>
        </div>
      </div>

      {/* Contratos Próximos do Vencimento + Alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contratos a vencer */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-[#1D3557] flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-500">warning</span>
              Contratos Próximos do Vencimento
            </h3>
            <Link href="/admin/hospedes" className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Ver todos →</Link>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Ricardo Lemos', unit: 'Apt 03 — Bloco A', type: 'Contrato Mensal', days: 5, value: 'R$ 1.800/mês' },
              { name: 'Equipe Ferrovia S/A', unit: 'Casa 02 — Fundos', type: 'Corporativo', days: 12, value: 'R$ 3.500/mês' },
              { name: 'Ana Luísa Marques', unit: 'Apt 11 — Bloco C', type: 'Contrato Mensal', days: 18, value: 'R$ 1.500/mês' },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:shadow-md hover:border-amber-200 transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm ${c.days <= 7 ? 'bg-red-500 animate-pulse-subtle' : 'bg-amber-500'}`}>
                    {c.days}d
                  </div>
                  <div>
                    <p className="font-bold text-[#1D3557]">{c.name}</p>
                    <p className="text-xs text-slate-500">{c.unit} · {c.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1D3557]">{c.value}</p>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Renovar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="relative z-10 space-y-6">
              <h4 className="font-headline font-bold text-lg">Resumo Financeiro</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center"><span className="text-white/70 text-sm">Receita Anual</span><span className="font-extrabold">R$ 820.800</span></div>
                <div className="flex justify-between items-center"><span className="text-white/70 text-sm">Ticket Médio/Un.</span><span className="font-extrabold">R$ 2.633</span></div>
                <div className="flex justify-between items-center"><span className="text-white/70 text-sm">Inadimplência</span><span className="font-extrabold text-amber-300">R$ 5.300</span></div>
                <div className="flex justify-between items-center"><span className="text-white/70 text-sm">Vendas Acum.</span><span className="font-extrabold text-emerald-300">R$ 720.000</span></div>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[160px] text-white/5">monitoring</span>
          </div>

          <div className="bg-secondary rounded-2xl p-8 text-white relative overflow-hidden shadow-sm animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            <div className="relative z-10">
              <h4 className="font-headline font-bold mb-2">Mercado Porto do Açu</h4>
              <p className="text-secondary-fixed text-sm mb-4">Demanda corporativa cresceu +22% neste trimestre. Considere reajuste nos contratos longos.</p>
              <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                Tendência de Alta
              </span>
            </div>
            <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[140px] opacity-10">insights</span>
          </div>
        </div>
      </div>
    </section>
  );
}
