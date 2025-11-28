import React, { useState } from 'react';

const LandingPage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-white">
            Growento<span className="text-primary">.AI</span>
          </div>
          <button
            onClick={() => scrollToSection('kurse')}
            className="hidden md:block bg-primary hover:bg-green-400 text-white px-5 py-2 rounded-full font-semibold transition-colors"
          >
            Kurse entdecken
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Werden Sie vom <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">
              KI-Nutzer zum KI-Gestalter
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
            Entdecken Sie die Kraft der Künstlichen Intelligenz. Steigern Sie Ihre Produktivität und sichern Sie Ihre berufliche Zukunft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('kurse')}
              className="bg-primary hover:bg-green-400 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105"
            >
              Jetzt Kurs finden
            </button>
            <button
               onClick={() => scrollToSection('details')}
               className="border border-zinc-700 hover:border-white text-zinc-300 hover:text-white text-lg font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Mehr erfahren
            </button>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="flex-1 w-full max-w-xl">
           <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center relative group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <span className="absolute bottom-4 text-zinc-500 text-sm font-medium">Video ansehen (Platzhalter)</span>
           </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
             Fühlen Sie sich von der KI-Entwicklung überholt?
           </h2>
           <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
             Die Technologie entwickelt sich rasant. Was heute neu ist, ist morgen Standard.
             Viele fühlen sich überfordert oder wissen nicht, wo sie anfangen sollen.
             Doch KI ist kein Hype – es ist das mächtigste Werkzeug unserer Zeit.
             Wir helfen Ihnen, es zu meistern.
           </p>
        </div>
      </section>

      {/* Courses Section */}
      <section id="kurse" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unsere Kurse</h2>
          <p className="text-zinc-400 text-lg">Wählen Sie den Pfad, der zu Ihren Zielen passt.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <CourseCard
            title="KI-Grundlagen"
            subtitle="Sicher starten im digitalen Zeitalter"
            target="Ideal für: Einsteiger & Neugierige"
            description="Verstehen Sie KI und nutzen Sie ChatGPT & Co. für den Alltag."
            points={[
              "KI einfach erklärt",
              "Grundlagen des Prompt Engineering",
              "Praktische Alltags-Helfer",
              "Einführung in Bildgenerierung"
            ]}
          />
           {/* Card 2 */}
          <CourseCard
            title="KI im Beruf"
            subtitle="Produktivität & Qualität steigern"
            target="Ideal für: Berufstätige & Kreative"
            description="Integrieren Sie KI-Tools professionell in Ihren Arbeitsalltag."
            highlight
            points={[
              "Fortgeschrittenes Prompting",
              "Schreib- & Kreativpartner",
              "Wissensmanagement mit KI",
              "Effiziente Recherche & Analyse"
            ]}
          />
           {/* Card 3 */}
          <CourseCard
            title="KI-Automatisierung"
            subtitle="Prozesse & Workflows optimieren"
            target="Ideal für: Manager & Unternehmer"
            description="Automatisieren Sie wiederkehrende Aufgaben ohne Code."
            points={[
              "Prozess-Analyse",
              "Tools wie Zapier & Make",
              "Automatisierte Content-Erstellung",
              "Strategische Planung"
            ]}
          />
        </div>
      </section>

      {/* Detail Section */}
      <section id="details" className="py-24 bg-zinc-900">
         <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Mehr als nur Chatbots</h2>
               <div className="space-y-6">
                 <DetailItem title="Prompt Engineering" text="Lernen Sie die Sprache der KI. Wie formulieren Sie Anweisungen so, dass Sie exzellente Ergebnisse erhalten?" />
                 <DetailItem title="Visuelle Kreativität" text="Erschaffen Sie beeindruckende Bilder und Grafiken für Präsentationen oder Social Media." />
                 <DetailItem title="Intelligente Automatisierung" text="Verbinden Sie Apps miteinander und lassen Sie die KI die Routinearbeit erledigen." />
               </div>
             </div>
             <div className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <span className="text-zinc-500 font-medium">Themenvielfalt Grafik (Platzhalter)</span>
             </div>
           </div>
         </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Für wen sind diese Kurse?</h2>
        <div className="grid md:grid-cols-3 gap-8">
           <AudienceCard title="KI-Neulinge" text="Privatpersonen, Angestellte oder Studierende ohne Vorerfahrung, die neugierig sind." />
           <AudienceCard title="KI-Anwender" text="Berufstätige und Selbstständige, die ihre Produktivität steigern wollen." />
           <AudienceCard title="KI-Strategen" text="Teamleiter und Unternehmer, die Prozesse automatisieren und optimieren möchten." />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Häufig gestellte Fragen</h2>
          <div className="space-y-4">
            <AccordionItem question="Brauche ich Vorkenntnisse?" answer="Nein, für den Grundlagenkurs sind keine Vorkenntnisse nötig. Wir holen Sie dort ab, wo Sie stehen." />
            <AccordionItem question="Welche Software wird benötigt?" answer="Wir arbeiten primär mit Browser-basierten Tools. Ein Laptop mit Internetzugang reicht aus." />
            <AccordionItem question="Erhalte ich ein Zertifikat?" answer="Ja, nach erfolgreichem Abschluss des Kurses erhalten Sie ein Teilnahme-Zertifikat." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-zinc-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Starten Sie Ihre KI-Reise heute
          </h2>
          <p className="text-xl font-medium text-green-50 mb-10 max-w-2xl mx-auto">
            Warten Sie nicht, bis die Zukunft da ist. Gestalten Sie sie mit.
          </p>
          <button
             onClick={() => scrollToSection('kurse')}
             className="bg-white text-primary hover:bg-zinc-100 text-xl font-bold px-10 py-5 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
          >
            Jetzt Kurs wählen
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-900 text-center text-zinc-500 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Growento AI Workshops. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center gap-6 mt-4">
             <a href="#" className="hover:text-white transition-colors">Impressum</a>
             <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
             <a href="#" className="hover:text-white transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components

const CourseCard = ({ title, subtitle, target, description, points, highlight = false }: any) => (
  <div className={`flex flex-col p-8 rounded-3xl border ${highlight ? 'bg-zinc-900 border-primary shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'bg-zinc-900 border-zinc-800'} hover:border-zinc-600 transition-all duration-300`}>
    <div className="h-48 bg-zinc-800 rounded-xl mb-6 flex items-center justify-center border border-zinc-700/50">
       <span className="text-zinc-600 text-sm font-medium">Kurs-Bild (Platzhalter)</span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
    <p className="text-primary font-medium mb-4">{subtitle}</p>
    <div className="bg-zinc-950/50 rounded-lg p-3 mb-6 text-sm text-zinc-400 font-medium">
      {target}
    </div>
    <ul className="space-y-3 mb-8 flex-1">
      {points.map((point: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
          <span className="text-primary mt-1">✓</span>
          {point}
        </li>
      ))}
    </ul>
    <a href="/placeholder-payment" className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${highlight ? 'bg-primary text-white hover:bg-green-400' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}>
      Mehr erfahren & buchen
    </a>
  </div>
);

const DetailItem = ({ title, text }: any) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0 border border-zinc-700 text-primary font-bold">
      AI
    </div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-zinc-400">{text}</p>
    </div>
  </div>
);

const AudienceCard = ({ title, text }: any) => (
  <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-zinc-400">{text}</p>
  </div>
);

const AccordionItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-zinc-800 rounded-xl bg-zinc-900 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-zinc-800/50 transition-colors"
      >
        <span className="font-bold text-white">{question}</span>
        <span className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <p className="p-5 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
