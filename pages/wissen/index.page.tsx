import Layout from "../../src/components/layout/Layout";
import BlogOverview from "../../src/pages/blog/BlogOverview";

export const documentProps = {
  title: "Wissen & Einblicke | Growento AI",
  description: "Aktuelle Artikel zu Prompting, Automatisierung und KI-Praxis."
};

export function Page() {
  return (
    <Layout>
      <BlogOverview />
    </Layout>
  );
}

