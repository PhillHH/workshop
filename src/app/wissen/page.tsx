import React from 'react';
import Link from 'next/link';
import { articles } from '@/lib/data'; // Importing from data file now

interface ArticlePreviewProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ id, title, excerpt, category, date }) => (
  <Link href={`/wissen/${id}`} className="group block bg-gray-90 rounded-2xl border border-gray-80 overflow-hidden hover:border-primary transition-colors">
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

export default function BlogOverview() {
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
            {Object.values(articles).map((article) => (
              <ArticlePreview key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
