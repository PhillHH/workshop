import Layout from "../src/components/layout/Layout";
import About from "../src/pages/About";

export const documentProps = {
  title: "Trainer | Growento AI",
  description: "Trainer-Team der Growento AI Workshops: Expertise in Prompting, Automatisierung und Didaktik."
};

export function Page() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}

