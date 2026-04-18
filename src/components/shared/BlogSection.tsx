import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    slug: "porto-do-acu-gigante-logistica",
    title: "Porto do Açu: O Gigante da Logística em São João da Barra",
    excerpt: "Entenda por que o complexo portuário está atraindo investimentos bilionários e como o Residencial Luso se tornou referência para engenheiros.",
    image: "https://images.unsplash.com/photo-1574246604907-db8975bb9bd3?q=80&w=800",
    date: "12 Out",
    category: "Economia",
    readTime: "8 min",
  },
  {
    slug: "charme-praias-grussai-verao",
    title: "O Charme das Praias de Grussaí: O que visitar no Verão",
    excerpt: "Do Polo Gastronômico às dunas intocadas, descubra os segredos da praia mais amada do litoral campista.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    date: "05 Nov",
    category: "Turismo",
    readTime: "6 min",
  },
  {
    slug: "locacao-corporativa-vantagens-longo-prazo",
    title: "Locação Corporativa: Vantagens de contratos longo prazo",
    excerpt: "Reduza custos operacionais e garanta o bem-estar da sua equipe com contratos customizados no Residencial Luso.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
    date: "15 Nov",
    category: "Negócios",
    readTime: "5 min",
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-14 gap-3 sm:gap-4">
          <div>
            <span className="text-secondary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 block">Insights & Notícias</span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Blog da Pousada Portugueza
            </h2>
          </div>
          <Link href="/blog" className="text-primary font-semibold text-xs sm:text-sm flex items-center gap-2 hover:gap-3 transition-all group min-h-[44px]">
            Ver todos os artigos
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <article>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-5 bg-zinc-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className="bg-white/95 backdrop-blur-md text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3 text-[10px] sm:text-xs text-zinc-400 font-medium">
                  <span>{post.date}</span>
                  <span className="text-zinc-200">·</span>
                  <span>{post.readTime} de leitura</span>
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-zinc-900 leading-snug mb-1.5 sm:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
