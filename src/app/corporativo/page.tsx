"use client";

import React from 'react';
import Link from 'next/link';
import { PublicNavbar } from '@/components/shared/PublicNavbar';
import { PublicFooter } from '@/components/shared/PublicFooter';

export default function CorporativoPage() {
  const stats = [
    { value: "26", label: "Unidades Disponíveis", icon: "home_work" },
    { value: "10min", label: "Do Porto do Açu", icon: "location_on" },
    { value: "500+", label: "Profissionais Atendidos", icon: "groups" },
    { value: "98%", label: "Taxa de Satisfação", icon: "thumb_up" },
  ];

  const features = [
    {
      icon: "receipt_long",
      title: "Faturamento via CNPJ",
      desc: "Trabalhamos com faturamento direto via CNPJ (Invoice 30/60 dias), minimizando burocracia para sua empresa escalar equipes na região.",
    },
    {
      icon: "wifi_tethering",
      title: "Pronto para Trabalho Remoto",
      desc: "Conexão internet de alta disponibilidade (Link Dedicado), bancadas de escritório e ambientes que favorecem concentração profunda.",
    },
    {
      icon: "support_agent",
      title: "Suporte & Manutenção 24h",
      desc: "Nossa equipe de manutenção zela preventivamente pelos imóveis, garantindo que nenhum imprevisto afete a operação dos seus colaboradores.",
    },
    {
      icon: "security",
      title: "Segurança Monitorada",
      desc: "Ambiente familiar com monitoramento por câmeras, controle de acesso e localização na principal avenida de Grussaí.",
    },
    {
      icon: "local_laundry_service",
      title: "Serviços Inclusos",
      desc: "Limpeza semanal, troca de enxoval, manutenção de ar-condicionado e suporte técnico de internet incluídos em todos os planos.",
    },
    {
      icon: "handshake",
      title: "Contratos Flexíveis",
      desc: "Desde estadias de 30 dias até contratos anuais. Condições especiais para empresas que necessitam alojar múltiplas equipes.",
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen text-zinc-900 font-body antialiased flex flex-col">
      <PublicNavbar />

      {/* Hero */}
      <header className="pt-20 relative overflow-hidden bg-primary">
        <div className="relative min-h-[480px] md:min-h-[540px] flex items-center">
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="azulejo-pattern w-full h-full" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 py-16 w-full">
            <div className="max-w-2xl animate-fade-in-up">
              <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
                B2B · Porto do Açu · Grussaí
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                Contratos Corporativos<br className="hidden md:block" /> e Longstay
              </h1>
              <p className="text-white/70 max-w-xl text-lg leading-relaxed mb-10">
                O Residencial Luso é a principal infraestrutura de moradia em Grussaí focada em empresas e engenheiros do Complexo Portuário de São João da Barra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contato" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-sm text-center hover:bg-zinc-100 transition-colors shadow-lg">
                  Solicitar Cotação
                </a>
                <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">chat</span>
                  WhatsApp Comercial
                </a>
              </div>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -bottom-16 -right-16 text-[400px] text-white/[0.03] pointer-events-none hidden lg:block">factory</span>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-white border-b border-zinc-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-100">
            {stats.map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <span className="material-symbols-outlined text-primary text-2xl mb-2 block">{stat.icon}</span>
                <p className="text-3xl font-extrabold text-zinc-900 tracking-tight">{stat.value}</p>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl w-full mx-auto px-6 md:px-16 lg:px-20 py-20 flex-1">
        {/* Features Grid */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Por que empresas escolhem o <span className="text-primary">Residencial Luso</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Infraestrutura completa pensada para reduzir custos operacionais e maximizar o conforto das equipes deslocadas para o Porto do Açu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-zinc-100 hover:shadow-lg hover:border-primary/10 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined">{feat.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feat.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contato" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-6">
                Vamos conversar sobre as necessidades da sua empresa?
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-10">
                Nossa equipe comercial responderá em até 2 horas úteis com a disponibilidade atualizada das 26 unidades e condições personalizadas para o seu projeto.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Empresas de Engenharia</h4>
                    <p className="text-sm text-zinc-500">Equipes do Porto do Açu, manutenção industrial e construção civil.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Logística & Operações</h4>
                    <p className="text-sm text-zinc-500">Gestores e equipes de supervisão de operações portuárias.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Diretoria & Consultoria</h4>
                    <p className="text-sm text-zinc-500">Executivos em viagens de negócios e consultores com projetos de longa duração.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-zinc-100">
              <h3 className="text-2xl font-extrabold text-zinc-900 mb-2">Solicite uma cotação</h3>
              <p className="text-zinc-400 text-sm mb-8">Preencha os dados abaixo e retornaremos rapidamente.</p>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Nome</label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Empresa</label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Nome da empresa" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">E-mail corporativo</label>
                  <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="voce@empresa.com.br" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Necessidade</label>
                  <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-zinc-600">
                    <option>Aluguel Mensal (acima de 30 dias)</option>
                    <option>Alojamento de Equipe Operacional</option>
                    <option>Contrato Anual — Diretoria</option>
                    <option>Evento ou Projeto Temporário</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">Mensagem (opcional)</label>
                  <textarea rows={3} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none" placeholder="Detalhes da sua necessidade..." />
                </div>
                <button type="button" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary-container transition-colors shadow-lg mt-2">
                  Enviar Solicitação
                </button>
                <p className="text-center text-xs text-zinc-400">
                  Ou chame diretamente:{" "}
                  <a href="https://wa.me/5522999999999" className="text-secondary font-bold hover:underline">(22) 99999-9999</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
