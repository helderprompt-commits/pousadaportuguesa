"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PublicNavbar } from '@/components/shared/PublicNavbar';
import { PublicFooter } from '@/components/shared/PublicFooter';

const articlesDB: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  body: string[];
}> = {
  "porto-do-acu-gigante-logistica": {
    title: "Porto do Açu: O Gigante da Logística em São João da Barra",
    category: "Economia",
    date: "12 de Outubro, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1574246604907-db8975bb9bd3?q=80&w=1600",
    author: "Equipe Luso",
    body: [
      "O Porto do Açu, localizado no município de São João da Barra, no norte do estado do Rio de Janeiro, consolidou-se como um dos maiores complexos portuário-industriais da América Latina. Com uma área total de 130 km², o empreendimento representa um marco na infraestrutura logística brasileira.",
      "Com investimentos que ultrapassam R$ 20 bilhões desde sua concepção, o complexo atrai empresas de diversos segmentos — da indústria petroquímica à geração de energia eólica offshore. Esse movimento gera uma demanda constante e crescente por hospedagem qualificada para engenheiros, gestores e equipes operacionais.",
      "É nesse cenário que o Residencial Luso se posiciona. A apenas 10 minutos do complexo portuário, nossas 26 unidades — entre apartamentos e casas — oferecem a infraestrutura ideal para profissionais que precisam de conectividade, conforto e segurança durante suas estadias de trabalho.",
      "Nossos contratos corporativos atendem desde estadias de 30 dias até contratos anuais, com faturamento direto via CNPJ e condições especiais para empresas que necessitam alojar múltiplas equipes simultaneamente. A internet dedicada de alta velocidade garante que reuniões virtuais e envio de projetos técnicos ocorram sem qualquer interrupção.",
      "O crescimento do Porto do Açu não mostra sinais de desaceleração. Novos terminais estão em desenvolvimento, e a previsão é de que o complexo gere mais de 15.000 empregos diretos nos próximos cinco anos — o que significa ainda mais demanda por infraestrutura de moradia de qualidade na região.",
    ]
  },
  "charme-praias-grussai-verao": {
    title: "O Charme das Praias de Grussaí: O que Visitar no Verão",
    category: "Turismo",
    date: "05 de Novembro, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
    author: "Equipe Luso",
    body: [
      "Grussaí é uma das praias mais encantadoras do litoral norte fluminense. Com areias claras que se estendem por quilômetros e águas mornas o ano inteiro, a região oferece uma experiência única para quem busca tranquilidade sem abrir mão de infraestrutura.",
      "O Polo Gastronômico de Grussaí é um dos destaques indiscutíveis. Com restaurantes à beira-mar que servem desde a tradicional moqueca capixaba até pratos da culinária portuguesa autêntica, os visitantes encontram uma diversidade gastronômica surpreendente para uma praia de interior.",
      "Para os amantes de natureza, as dunas de Grussaí oferecem passeios de buggy emocionantes com vistas panorâmicas do litoral. As lagoas de água doce na região são perfeitas para banhos refrescantes durante as tardes mais quentes do verão.",
      "A prática de esportes náuticos — especialmente o kitesurf e o stand-up paddle — encontra em Grussaí condições perfeitas. Os ventos constantes e a extensão da praia criam um cenário ideal tanto para iniciantes quanto para praticantes avançados.",
      "Hospedando-se no Residencial Luso, você está a poucos minutos de todas essas experiências. Nossa equipe de concierge pode organizar roteiros personalizados, reservar mesas nos melhores restaurantes e agendar aulas de esportes aquáticos com instrutores locais certificados.",
    ]
  },
};

const relatedPosts = [
  { slug: "charme-praias-grussai-verao", title: "O Charme das Praias de Grussaí", category: "Turismo", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400" },
  { slug: "locacao-corporativa-vantagens-longo-prazo", title: "Locação Corporativa: Vantagens de Contratos Longo Prazo", category: "Negócios", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400" },
  { slug: "guia-completo-hospedagem-grussai", title: "Guia Completo: Hospedagem em Grussaí", category: "Turismo", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400" },
];

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articlesDB[slug];

  if (!article) {
    return (
      <div className="bg-[#fafafa] min-h-screen text-zinc-900 font-body antialiased flex flex-col">
        <PublicNavbar />
        <main className="flex-1 flex flex-col items-center justify-center pt-20 px-6">
          <span className="material-symbols-outlined text-8xl text-zinc-200 mb-6">article</span>
          <h1 className="text-3xl font-bold text-zinc-800 mb-4">Artigo não encontrado</h1>
          <p className="text-zinc-500 mb-8 text-center max-w-md">O artigo que você procura pode ter sido movido ou não existe mais.</p>
          <Link href="/blog" className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-primary-container transition-colors">
            Voltar ao Blog
          </Link>
        </main>
        <PublicFooter />
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] min-h-screen text-zinc-900 font-body antialiased flex flex-col">
      <PublicNavbar />

      {/* Hero Image */}
      <header className="pt-20">
        <div className="relative w-full h-[380px] md:h-[500px] overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
      </header>

      {/* Article Content */}
      <main className="relative -mt-20 z-10 flex-1">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Article Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14 lg:p-16 border border-zinc-100">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
              <Link href="/blog" className="hover:text-primary transition-colors font-medium">Blog</Link>
              <span>/</span>
              <span className="text-zinc-600 font-medium">{article.category}</span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                {article.category}
              </span>
              <span className="text-zinc-400 text-sm">{article.date}</span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-400 text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {article.readTime} de leitura
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-zinc-900 leading-[1.15] tracking-tight mb-8">
              {article.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 pb-10 mb-10 border-b border-zinc-100">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                RL
              </div>
              <div>
                <p className="font-bold text-zinc-900">{article.author}</p>
                <p className="text-sm text-zinc-400">Residencial Luso · Grussaí, RJ</p>
              </div>
            </div>

            {/* Body */}
            <div className="prose prose-lg max-w-none">
              {article.body.map((paragraph, i) => (
                <p key={i} className="text-zinc-700 text-[1.0625rem] leading-[1.85] mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share & Tags */}
            <div className="mt-14 pt-8 border-t border-zinc-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Tags:</span>
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">Grussaí</span>
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">Porto do Açu</span>
                  <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-medium">{article.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mr-1">Compartilhar:</span>
                  <button className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-primary hover:text-white text-zinc-500 flex items-center justify-center transition-all">
                    <span className="material-symbols-outlined text-base">share</span>
                  </button>
                  <button className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-primary hover:text-white text-zinc-500 flex items-center justify-center transition-all">
                    <span className="material-symbols-outlined text-base">link</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-primary rounded-3xl p-10 md:p-14 text-white text-center mt-12 relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">Conheça nossas acomodações</h3>
              <p className="text-white/70 max-w-lg mx-auto mb-8">26 unidades entre apartamentos e casas, prontas para o seu conforto — seja a trabalho ou lazer.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/" className="bg-white text-primary px-8 py-3.5 rounded-full font-bold text-sm hover:bg-zinc-100 transition-colors shadow-sm">
                  Ver Acomodações
                </Link>
                <Link href="/corporativo" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white/10 transition-colors">
                  Planos Corporativos
                </Link>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[200px] text-white/5 pointer-events-none">home_work</span>
          </div>

          {/* Related Posts */}
          <section className="py-16">
            <h3 className="text-2xl font-extrabold text-zinc-900 mb-8 tracking-tight">Leia também</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.filter(p => p.slug !== slug).slice(0, 3).map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-zinc-100">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.15em]">{post.category}</span>
                  <h4 className="font-bold text-zinc-900 mt-1 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</h4>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
