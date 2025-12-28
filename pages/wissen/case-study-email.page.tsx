import Layout from "../../src/components/layout/Layout";
import BlogArticle from "../../src/pages/blog/BlogArticle";
import { getArticleById } from "../../src/content/articles";

const article = getArticleById("case-study-email");

export const documentProps = {
  title: article ? `${article.title} | Growento AI` : "Artikel | Growento AI",
  description: article?.description || article?.excerpt || "Artikel aus dem Growento AI Blog."
};

export function Page() {
  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center text-white">
          Artikel nicht gefunden.{" "}
          <a href="/wissen" className="ml-2 text-primary hover:underline">
            Zur Übersicht
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <BlogArticle article={article} />
    </Layout>
  );
}

