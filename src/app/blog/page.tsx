"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PublicNavbar } from '@/components/shared/PublicNavbar';
import { PublicFooter } from '@/components/shared/PublicFooter';

const allPosts = [
  {
    slug: "porto-do-acu-gigante-logistica",
    title: "Porto do Açu: O Gigante da Logística em São João da Barra",
    excerpt: "Entenda por que o complexo portuário está atraindo investimentos bilionários e como a infraestrutura da região se tornou a base perfeita para engenheiros e gestores de operação.",
    image: "https://images.unsplash.com/photo-1574246604907-db8975bb9bd3?q=80&w=1200",
    date: "12 de Outubro, 2026",
    readTime: "8 min",
    category: "Economia",
    featured: true,
    author: "Equipe Luso",
    authorAvatar: "RL",
  },
  {
    slug: "charme-praias-grussai-verao",
    title: "O Charme das Praias de Grussaí: O que Visitar no Verão",
    excerpt: "Do Polo Gastronômico às dunas intocadas, descubra os segredos da praia mais amada do litoral campista e por que cada vez mais turistas escolhem essa região.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    date: "05 de Novembro, 2026",
    readTime: "6 min",
    category: "Turismo",
    featured: false,
    author: "Equipe Luso",
    authorAvatar: "RL",
  },
  {
    slug: "locacao-corporativa-vantagens-longo-prazo",
    title: "Locação Corporativa: Vantagens de Contratos Longo Prazo",
    excerpt: "Reduza custos operacionais e garanta o bem-estar da sua equipe com contratos customizados. Saiba como funciona o modelo de locação corporativa do Residencial Luso.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    date: "15 de Novembro, 2026",
    readTime: "5 min",
    category: "Negócios",
    featured: false,
    author: "Equipe Luso",
    authorAvatar: "RL",
  },
  {
    slug: "guia-completo-hospedagem-grussai",
    title: "Guia Completo: Hospedagem em Grussaí para Todos os Perfis",
    excerpt: "Famílias, casais, equipes corporativas ou nômades digitais — descubra a modalidade ideal de hospedagem para cada perfil de viajante na região de São João da Barra.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
    date: "22 de Novembro, 2026",
    readTime: "7 min",
    category: "Turismo",
    featured: false,
    author: "Equipe Luso",
    authorAvatar: "RL",
  },
  {
    slug: "mercado-imobiliario-norte-fluminense-2026",
    title: "Mercado Imobiliário no Norte Fluminense: Tendências 2026",
    excerpt: "Análise das tendências de valorização imobiliária na região do Porto do Açu: oportunidades de aluguel, venda e investimento para o próximo ciclo econômico.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    date: "28 de Novembro, 2026",
    readTime: "10 min",
    category: "Economia",
    featured: false,
    author: "Equipe Luso",
    authorAvatar: "RL",
  },
  {
    slug: "gastronomia-portuguesa-brasileira-grussai",
    title: "Sabores que Unem: A Gastronomia Luso-Brasileira em Grussaí",
    excerpt: "Conheça os restaurantes e pratos que celebram a fusão das culinárias portuguesa e brasileira no litoral fluminense. Dicas imperdíveis do nosso concierge.",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1200",
    date: "02 de Dezembro, 2026",
    readTime: "4 min",
    category: "Estilo de Vida",
    featured: false,
    author: "Equipe Luso",
    authorAvatar: "RL",
  },
];

const categories = ["Todos", "Economia", "Turismo", "Negócios", "Estilo de Vida"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const featuredPost = allPosts.find(p => p.featured);
  const regularPosts = allPosts.filter(p => !p.featured);
  const filteredPosts = activeCategory === "Todos"
    ? regularPosts
    : regularPosts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#fafafa] min-h-screen text-zinc-900 font-body antialiased flex flex-col">
      <PublicNavbar />

      {/* Hero: Featured Article */}
      {featuredPost && (
        <header className="pt-20">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-20">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-secondary text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-white/60 text-sm font-medium">{featuredPost.date}</span>
                    <span className="text-white/40 text-sm">·</span>
                    <span className="text-white/60 text-sm font-medium">{featuredPost.readTime} de leitura</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4 group-hover:text-secondary-fixed transition-colors duration-300">
                    {featuredPost.title}
                  </h1>
                  <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed hidden md:block">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </header>
      )}

      {/* Category Filter */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <main className="max-w-7xl w-full mx-auto px-6 md:px-16 lg:px-20 py-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filteredPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <article className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 bg-zinc-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                    {post.authorAvatar}
                  </div>
                  <span className="text-xs text-zinc-400 font-medium">{post.author}</span>
                  <span className="text-zinc-200">·</span>
                  <span className="text-xs text-zinc-400 font-medium">{post.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-zinc-900 leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  Ler artigo
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-zinc-200 mb-4 block">search_off</span>
            <p className="text-zinc-400 text-lg font-medium">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}
      </main>

      {/* Newsletter Section */}
      <section className="bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 md:px-20 py-20 text-center">
          <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">mail</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Não perca nenhuma novidade
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto mb-8 leading-relaxed">
            Assine nossa newsletter e receba análises do mercado imobiliário, dicas de turismo em Grussaí e ofertas exclusivas do Residencial Luso.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full bg-zinc-50 border border-zinc-200 rounded-full px-6 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
            <button className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap">
              Assinar
            </button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
