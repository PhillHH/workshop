import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogArticle = () => {
  const { articleId } = useParams();

  // Content Data (Simulated Database)
  const articles: Record<string, any> = {
    "chain-of-thought": {
      title: "Chain-of-Thought Prompting: Die Anatomie für Business-Strategen",
      date: "12. Okt 2023",
      category: "Deep Dive",
      content: (
        <>
          <p className="mb-6">
            Künstliche Intelligenz wirkt oft wie eine Black Box: Frage rein, Antwort raus. Doch bei komplexen logischen Aufgaben scheitern einfache "Zero-Shot" Prompts (also Fragen ohne Kontext oder Beispiele) oft. Hier kommt <strong>Chain-of-Thought (CoT) Prompting</strong> ins Spiel.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">Was ist Chain-of-Thought?</h3>
          <p className="mb-6">
            Anstatt das Modell nur nach dem Ergebnis zu fragen, bitten wir es, den Rechenweg oder den Gedankengang explizit Schritt für Schritt darzulegen. Das zwingt das Modell, "laut zu denken". Studien von Google Research haben gezeigt, dass dies die Genauigkeit bei mathematischen und logischen Aufgaben drastisch erhöht.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">Ein Beispiel aus der Praxis</h3>
          <div className="bg-gray-80 p-6 rounded-lg mb-6 font-mono text-sm border-l-4 border-primary">
            <p className="text-gray-40 mb-2">// Schlechter Prompt:</p>
            <p className="text-white mb-4">"Lohnten sich die Marketingausgaben von Q3 im Vergleich zu Q2?"</p>
            <p className="text-gray-40 mb-2">// CoT Prompt:</p>
            <p className="text-white">"Analysiere die Marketingausgaben von Q2 und Q3. Schritt 1: Liste alle Ausgabenposten für beide Quartale auf. Schritt 2: Berechne die Summe für jedes Quartal. Schritt 3: Vergleiche die Summen prozentual. Schritt 4: Ziehe eine Schlussfolgerung basierend auf den generierten Leads pro Euro."</p>
          </div>
          <p className="mb-6">
            Für Business-Strategen bedeutet das: Verlassen Sie sich nicht auf die Intuition der KI. Geben Sie ihr eine Struktur vor, wie sie Probleme lösen soll. Dies ist der Kern unserer Schulungen im Bereich "KI-Automatisierung" und "KI im Beruf".
          </p>
          <div className="bg-primary/10 p-8 rounded-xl mt-12 text-center border border-primary/20">
             <h4 className="text-xl font-bold text-white mb-2">Tiefer einsteigen?</h4>
             <p className="text-gray-30 mb-4">Lernen Sie professionelles Prompting in unserem Kurs.</p>
             <Link to="/ki-im-beruf" className="inline-block bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary-dark transition-colors">Zum Kurs "KI im Beruf"</Link>
          </div>
        </>
      )
    },
    "zapier-vs-make": {
      title: "Zapier vs. Make: Welche Automatisierungs-Plattform passt zu Ihrem Team?",
      date: "28. Sep 2023",
      category: "Tools",
      content: (
        <>
          <p className="mb-6">
            Wer Prozesse automatisieren will, landet schnell bei den zwei Platzhirschen: <strong>Zapier</strong> und <strong>Make</strong> (ehemals Integromat). Beide verbinden Apps ohne Code, doch sie haben unterschiedliche Stärken.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">Zapier: Der einfache Einstieg</h3>
          <p className="mb-6">
            Zapier besticht durch seine enorme Integrationsbibliothek (über 5000 Apps) und seine lineare "Wenn dies, dann das"-Logik. Es ist perfekt für einfache Workflows: "Wenn eine E-Mail kommt, speichere den Anhang in Dropbox."
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">Make: Das Kraftpaket</h3>
          <p className="mb-6">
            Make hingegen erlaubt komplexe, visuelle Workflows mit Verzweigungen, Schleifen und Datentransformationen. Es ist oft günstiger im Pricing, aber hat eine steilere Lernkurve.
          </p>
          <table className="w-full text-left mb-8 border-collapse">
             <thead>
                <tr className="border-b border-gray-70 text-white">
                   <th className="py-2">Feature</th>
                   <th className="py-2">Zapier</th>
                   <th className="py-2">Make</th>
                </tr>
             </thead>
             <tbody className="text-gray-30 text-sm">
                <tr className="border-b border-gray-80">
                   <td className="py-2">Einfachheit</td>
                   <td className="py-2 text-primary">Hoch</td>
                   <td className="py-2">Mittel</td>
                </tr>
                <tr className="border-b border-gray-80">
                   <td className="py-2">Kosten</td>
                   <td className="py-2">Teurer</td>
                   <td className="py-2 text-primary">Günstiger</td>
                </tr>
                <tr className="border-b border-gray-80">
                   <td className="py-2">Komplexität</td>
                   <td className="py-2">Linear</td>
                   <td className="py-2 text-primary">Visuell/Verzweigt</td>
                </tr>
             </tbody>
          </table>
          <p className="mb-6">
            <strong>Fazit:</strong> Starten Sie mit Zapier für einfache Aufgaben. Wechseln Sie zu Make, wenn Sie Prozesse skalieren wollen. In unserem Automatisierungskurs zeigen wir beide Tools.
          </p>
          <div className="bg-primary/10 p-8 rounded-xl mt-12 text-center border border-primary/20">
             <h4 className="text-xl font-bold text-white mb-2">Automatisierung meistern?</h4>
             <p className="text-gray-30 mb-4">Buchen Sie unseren Experten-Workshop.</p>
             <Link to="/ki-automatisierung" className="inline-block bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary-dark transition-colors">Zum Kurs "KI-Automatisierung"</Link>
          </div>
        </>
      )
    },
    "case-study-email": {
      title: "So spart unser Kunde X 10 Stunden/Woche mit KI-gestütztem E-Mail-Management",
      date: "15. Sep 2023",
      category: "Case Study",
      content: (
        <>
          <p className="mb-6">
            Die Immobilienagentur "HanseHome" (Name geändert) erhielt täglich ca. 200 E-Mails. Exposé-Anfragen, Terminwünsche, Beschwerden. Zwei Mitarbeiter waren fast ausschließlich mit dem Sortieren und Beantworten beschäftigt.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">Die Lösung</h3>
          <p className="mb-6">
            Wir implementierten einen Workflow mit <strong>Make</strong> und <strong>OpenAI (GPT-4)</strong>.
            <br/>1. E-Mail geht ein.
            <br/>2. KI analysiert den Inhalt und klassifiziert den Intent (Kauf, Miete, Service).
            <br/>3. KI extrahiert relevante Daten (Name, Objekt-ID).
            <br/>4. KI entwirft eine Antwort basierend auf Templates.
            <br/>5. Entwurf wird in den "Entwürfe"-Ordner gelegt.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">Das Ergebnis</h3>
          <p className="mb-6">
            Die Mitarbeiter müssen die E-Mails nur noch kurz prüfen und absenden. Die Antwortzeit sank von 24h auf 2h. Die Mitarbeiter sparten zusammen 10 Stunden pro Woche an reiner Tipparbeit.
          </p>
          <p className="mb-6">
            "Anfangs waren wir skeptisch, ob die KI den Ton trifft. Aber nach ein paar Anpassungen im System-Prompt schreibt sie höflicher als wir an manchen stressigen Tagen." – Geschäftsführer HanseHome.
          </p>
          <div className="bg-primary/10 p-8 rounded-xl mt-12 text-center border border-primary/20">
             <h4 className="text-xl font-bold text-white mb-2">Wollen Sie das auch?</h4>
             <p className="text-gray-30 mb-4">Wir zeigen Ihnen, wie Sie solche Workflows bauen.</p>
             <Link to="/ki-automatisierung" className="inline-block bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary-dark transition-colors">Zum Kurs "KI-Automatisierung"</Link>
          </div>
        </>
      )
    }
  };

  const article = articles[articleId || ""] || null;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Artikel nicht gefunden. <Link to="/wissen" className="ml-2 text-primary hover:underline">Zur Übersicht</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/wissen" className="text-primary hover:underline mb-8 inline-block">← Zurück zur Übersicht</Link>
        <div className="mb-8">
           <span className="text-primary text-sm font-bold uppercase tracking-wide bg-primary/10 px-3 py-1 rounded-full">{article.category}</span>
           <span className="text-gray-50 text-sm ml-4">{article.date}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">{article.title}</h1>
        <div className="prose prose-invert prose-lg text-gray-30">
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
