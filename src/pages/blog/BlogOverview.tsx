import React from 'react';
import { Link } from 'react-router-dom';

interface ArticlePreviewProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ id, title, excerpt, category, date }) => (
  <Link to={`/wissen/${id}`} className="group block bg-gray-90 rounded-2xl border border-gray-80 overflow-hidden hover:border-primary transition-colors">
    <div className="h-48 bg-gray-80 w-full flex items-center justify-center text-gray-50 group-hover:bg-gray-70 transition-colors">
       [Bild: {title}]
    </div>
    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-primary text-xs font-bold uppercase tracking-wide">{category}</span>
        <span className="text-gray-50 text-xs">{date}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-30 text-sm line-clamp-3">{excerpt}</p>
      <div className="mt-6 flex items-center text-white text-sm font-semibold group-hover:underline">
        Artikel lesen <span className="ml-2">→</span>
      </div>
    </div>
  </Link>
);

const BlogOverview = () => {
  const articles = [
    {
      id: "chain-of-thought",
      title: "Chain-of-Thought Prompting: Die Anatomie für Business-Strategen",
      excerpt: "Warum einfache Prompts oft scheitern und wie Sie mit der Chain-of-Thought Methode komplexe Probleme lösen. Ein Deep Dive in die Funktionsweise von LLMs.",
      category: "Deep Dive",
      date: "12. Okt 2023"
    },
    {
      id: "zapier-vs-make",
      title: "Zapier vs. Make: Welche Automatisierungs-Plattform passt zu Ihrem Team?",
      excerpt: "Beide Tools versprechen einfache Automatisierung. Doch wo liegen die Grenzen? Ein detaillierter Vergleich von Kosten, Komplexität und Möglichkeiten.",
      category: "Tools",
      date: "28. Sep 2023"
    },
    {
      id: "case-study-email",
      title: "So spart unser Kunde X 10 Stunden/Woche mit KI-gestütztem E-Mail-Management",
      excerpt: "Eine konkrete Fallstudie: Wie ein Immobilienbüro mit einer Kombination aus ChatGPT und Zapier die Anfragenflut bewältigt.",
      category: "Case Study",
      date: "15. Sep 2023"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 bg-gray-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Wissen & Einblicke</h1>
          <p className="text-xl text-gray-30 max-w-2xl mx-auto">
            Bleiben Sie am Ball. Hier teilen wir unser Expertenwissen, aktuelle Trends und praktische Tipps rund um KI und Automatisierung.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticlePreview key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogOverview;
