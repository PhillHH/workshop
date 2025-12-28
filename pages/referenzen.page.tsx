import Layout from "../src/components/layout/Layout";
import Testimonials from "../src/pages/Testimonials";

export const documentProps = {
  title: "Referenzen & Erfolgsgeschichten | Growento AI",
  description: "Erfahrungen und Ergebnisse unserer Teilnehmenden aus den KI-Workshops."
};

export function Page() {
  return (
    <Layout>
      <Testimonials />
    </Layout>
  );
}

