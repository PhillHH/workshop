import Layout from "../src/components/layout/Layout";
import KIAutomatisierung from "../src/pages/courses/KIAutomatisierung";

export const documentProps = {
  title: "KI-Automatisierung Workshop | Growento AI",
  description: "Zwei-Tage-Intensivkurs: Prozessanalyse, Zapier/Make, KI-Agenten und Skalierung."
};

export function Page() {
  return (
    <Layout>
      <KIAutomatisierung />
    </Layout>
  );
}

