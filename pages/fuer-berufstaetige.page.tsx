import Layout from "../src/components/layout/Layout";
import Berufstaetige from "../src/pages/audience/Berufstaetige";

export const documentProps = {
  title: "KI im Beruf | Growento AI Workshops",
  description: "Fortgeschrittene KI-Nutzung im Arbeitsalltag: Prompting, Tools, Produktivität steigern."
};

export function Page() {
  return (
    <Layout>
      <Berufstaetige />
    </Layout>
  );
}

