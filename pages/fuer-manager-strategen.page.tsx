import Layout from "../src/components/layout/Layout";
import Manager from "../src/pages/audience/Manager";

export const documentProps = {
  title: "KI-Strategen & Manager | Growento AI Workshops",
  description: "Automatisierung und KI-Strategie für Führungskräfte: Prozesse skalieren, Teams befähigen."
};

export function Page() {
  return (
    <Layout>
      <Manager />
    </Layout>
  );
}

