import Layout from "../src/components/layout/Layout";
import KIGrundlagen from "../src/pages/courses/KIGrundlagen";

export const documentProps = {
  title: "KI-Grundlagen Workshop | Growento AI",
  description: "Einsteiger-Workshop zu KI-Grundlagen, Prompt Engineering und sicherer Nutzung."
};

export function Page() {
  return (
    <Layout>
      <KIGrundlagen />
    </Layout>
  );
}

