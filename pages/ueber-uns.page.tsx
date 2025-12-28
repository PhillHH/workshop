import Layout from "../src/components/layout/Layout";
import About from "../src/pages/About";

export const documentProps = {
  title: "Über uns | Growento AI",
  description: "Lernen Sie das Team hinter den Growento AI Workshops kennen."
};

export function Page() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}

