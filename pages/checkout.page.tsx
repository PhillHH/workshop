import Layout from "../src/components/layout/Layout";
import Checkout from "../src/pages/Checkout";

export const documentProps = {
  title: "Checkout | Growento AI Workshops",
  description: "Buchung abschließen und Workshop-Ticket sichern."
};

export function Page() {
  return (
    <Layout>
      <Checkout />
    </Layout>
  );
}

