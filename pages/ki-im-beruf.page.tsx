import Layout from "../src/components/layout/Layout";
import KIImBeruf from "../src/pages/courses/KIImBeruf";

export const documentProps = {
  title: "KI im Beruf Workshop | Growento AI",
  description: "Fortgeschrittenes Prompting, Tool-Stack und Patterns für produktive KI-Arbeit."
};

export function Page() {
  return (
    <Layout>
      <KIImBeruf />
    </Layout>
  );
}

