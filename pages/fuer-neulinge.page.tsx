import Layout from "../src/components/layout/Layout";
import Neulinge from "../src/pages/audience/Neulinge";

export const documentProps = {
  title: "KI-Neulinge | Growento AI Workshops",
  description: "Einstieg in KI ohne Vorkenntnisse: sicher starten, Ängste abbauen, praktische Übungen."
};

export function Page() {
  return (
    <Layout>
      <Neulinge />
    </Layout>
  );
}

