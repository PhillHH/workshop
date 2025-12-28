import React from "react";
import { Article } from "../../content/articles";

type BlogArticleProps = {
  article: Article;
};

const BlogArticle: React.FC<BlogArticleProps> = ({ article }) => {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/wissen" className="text-primary hover:underline mb-8 inline-block">
          ← Zurück zur Übersicht
        </a>
        <div className="mb-8">
          <span className="text-primary text-sm font-bold uppercase tracking-wide bg-primary/10 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-gray-50 text-sm ml-4">{article.date}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          {article.title}
        </h1>
        <div className="prose prose-invert prose-lg text-gray-30">{article.content}</div>
      </div>
    </div>
  );
};

export default BlogArticle;
