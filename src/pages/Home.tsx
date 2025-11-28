import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Matching Figma Spec Layout */}
      <section className="relative pt-[180px] pb-20 overflow-hidden">
         {/* Background Gradients from Spec (Approximated) */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
             <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full"></div>
             <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-orange-500/10 blur-[100px] rounded-full"></div>
             <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
         </div>

         <div className="container mx-auto px-4 md:px-[112px] flex flex-col md:flex-row items-center gap-12 md:gap-24">

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start gap-8 z-10">
                {/* Badge */}
                <div className="flex flex-row items-center gap-2 px-3 py-1.5 bg-blue-600/20 border border-blue-600/40 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-white">Neu: Growento UI 2.0</span>
                </div>

                <h1 className="text-5xl md:text-[72px] font-bold leading-[1.1] tracking-tight text-white">
                    Design your next <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">AI Career</span> lazily.
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                    Introducing Growento UI — das Design-System für Unternehmer, die es einfach mögen. Schluss mit langen Design-Prozessen.
                </p>

                <div className="flex flex-row gap-4 pt-4">
                    <button onClick={() => scrollToSection('kurse')} className="bg-primary hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                        Kurse ansehen
                    </button>
                    <button onClick={() => scrollToSection('details')} className="bg-transparent border border-zinc-700 hover:border-white text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all">
                        Mehr Infos
                    </button>
                </div>

                <div className="flex items-center gap-4 mt-4 opacity-70">
                    <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border border-black"></div>
                        ))}
                    </div>
                    <span className="text-sm text-gray-400">Genutzt von 2,000+ AI Pionieren</span>
                </div>
            </div>

            {/* Right Content - Visual/Phone Placeholders */}
            <div className="flex-1 w-full relative h-[600px] flex items-center justify-center">
                 {/* Visual placeholder for the "iPhone" in Figma */}
                 <div className="relative w-[300px] h-[600px] bg-zinc-900 border-[8px] border-zinc-800 rounded-[40px] shadow-2xl transform rotate-[-15deg] overflow-hidden z-10">
                     {/* Screen Content */}
                     <div className="absolute inset-0 bg-zinc-950 flex flex-col p-6">
                        <div className="w-full h-32 bg-zinc-900 rounded-xl mb-4 animate-pulse"></div>
                        <div className="w-3/4 h-4 bg-zinc-800 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-zinc-800 rounded mb-6"></div>
                        <div className="flex gap-2 mb-6">
                            <div className="w-10 h-10 rounded-full bg-zinc-800"></div>
                            <div className="w-10 h-10 rounded-full bg-zinc-800"></div>
                            <div className="w-10 h-10 rounded-full bg-zinc-800"></div>
                        </div>
                        <div className="w-full h-24 bg-primary/20 rounded-xl border border-primary/30 flex items-center justify-center text-primary font-bold">
                            AI Automation Active
                        </div>
                     </div>
                 </div>

                 {/* Second Element behind */}
                 <div className="absolute top-10 right-10 w-[280px] h-[580px] bg-zinc-800/50 border-[8px] border-zinc-700/50 rounded-[40px] transform rotate-[-5deg] -z-0 blur-sm"></div>
            </div>

         </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-[112px] text-center max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
             Fühlen Sie sich von der KI-Entwicklung überholt?
           </h2>
           <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
             Die Technologie entwickelt sich rasant. Was heute neu ist, ist morgen Standard.
             Doch KI ist kein Hype – es ist das mächtigste Werkzeug unserer Zeit.
           </p>
        </div>
      </section>

      {/* Courses Section with New Pricing */}
      <section id="kurse" className="py-24 container mx-auto px-4 md:px-[112px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Unsere Kurse</h2>
          <p className="text-gray-400 text-lg">Wählen Sie den Pfad, der zu Ihren Zielen passt.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <CourseCard
            title="KI-Grundlagen"
            price="149 €"
            subtitle="Sicher starten im digitalen Zeitalter"
            target="Ideal für: Einsteiger & Neugierige"
            description="Verstehen Sie KI und nutzen Sie ChatGPT & Co. für den Alltag."
            points={[
              "KI einfach erklärt",
              "Grundlagen des Prompt Engineering",
              "Praktische Alltags-Helfer",
              "Einführung in Bildgenerierung"
            ]}
            link="/basics"
          />
           {/* Card 2 */}
          <CourseCard
            title="KI im Beruf"
            price="299 €"
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
            link="/business"
          />
           {/* Card 3 */}
          <CourseCard
            title="KI-Automatisierung"
            price="799 €"
            subtitle="Prozesse & Workflows optimieren"
            target="Ideal für: Manager & Unternehmer"
            description="Automatisieren Sie wiederkehrende Aufgaben ohne Code."
            points={[
              "Prozess-Analyse",
              "Tools wie Zapier & Make",
              "Automatisierte Content-Erstellung",
              "Strategische Planung"
            ]}
            link="/automation"
          />
        </div>
      </section>

      {/* Detail Section */}
      <section id="details" className="py-24 bg-zinc-900/50">
         <div className="container mx-auto px-4 md:px-[112px]">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Mehr als nur Chatbots</h2>
               <div className="space-y-6">
                 <DetailItem title="Prompt Engineering" text="Lernen Sie die Sprache der KI. Wie formulieren Sie Anweisungen so, dass Sie exzellente Ergebnisse erhalten?" />
                 <DetailItem title="Visuelle Kreativität" text="Erschaffen Sie beeindruckende Bilder und Grafiken für Präsentationen oder Social Media." />
                 <DetailItem title="Intelligente Automatisierung" text="Verbinden Sie Apps miteinander und lassen Sie die KI die Routinearbeit erledigen." />
               </div>
             </div>
             <div className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/50 h-96 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:from-primary/20 transition-all"></div>
                <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <span className="text-zinc-500 font-medium">Themenvielfalt Grafik</span>
                </div>
             </div>
           </div>
         </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 container mx-auto px-4 md:px-[112px] text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Für wen sind diese Kurse?</h2>
        <div className="grid md:grid-cols-3 gap-8">
           <AudienceCard title="KI-Neulinge" text="Privatpersonen, Angestellte oder Studierende ohne Vorerfahrung, die neugierig sind." icon="🌱" />
           <AudienceCard title="KI-Anwender" text="Berufstätige und Selbstständige, die ihre Produktivität steigern wollen." icon="🚀" />
           <AudienceCard title="KI-Strategen" text="Teamleiter und Unternehmer, die Prozesse automatisieren und optimieren möchten." icon="⚡" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-[112px] max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">Häufig gestellte Fragen</h2>
          <div className="space-y-4">
            <AccordionItem question="Brauche ich Vorkenntnisse?" answer="Nein, für den Grundlagenkurs sind keine Vorkenntnisse nötig. Wir holen Sie dort ab, wo Sie stehen." />
            <AccordionItem question="Welche Software wird benötigt?" answer="Wir arbeiten primär mit Browser-basierten Tools. Ein Laptop mit Internetzugang reicht aus." />
            <AccordionItem question="Erhalte ich ein Zertifikat?" answer="Ja, nach erfolgreichem Abschluss des Kurses erhalten Sie ein Teilnahme-Zertifikat." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-[112px]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Starten Sie Ihre KI-Reise heute
          </h2>
          <p className="text-xl font-medium text-white/90 mb-10 max-w-2xl mx-auto">
            Warten Sie nicht, bis die Zukunft da ist. Gestalten Sie sie mit.
          </p>
          <button
             onClick={() => scrollToSection('kurse')}
             className="bg-black text-white hover:bg-zinc-900 text-xl font-bold px-10 py-5 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-1"
          >
            Jetzt Kurs wählen
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Helper Components

const CourseCard = ({ title, price, subtitle, target, description, points, highlight = false, link }: any) => (
  <div className={`flex flex-col p-8 rounded-3xl border ${highlight ? 'bg-zinc-900 border-primary shadow-[0_0_30px_rgba(249,115,22,0.15)] transform scale-105 z-10' : 'bg-zinc-950 border-zinc-800'} hover:border-zinc-600 transition-all duration-300`}>
    <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <span className="text-xl font-bold text-primary">{price}</span>
    </div>

    <p className="text-gray-400 font-medium mb-4 text-sm">{subtitle}</p>
    <div className="bg-zinc-900/50 rounded-lg p-3 mb-6 text-xs text-gray-500 font-medium border border-zinc-800">
      {target}
    </div>
    <ul className="space-y-3 mb-8 flex-1">
      {points.map((point: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
          <span className="text-primary mt-0.5">✓</span>
          {point}
        </li>
      ))}
    </ul>
    <Link to={link} className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${highlight ? 'bg-primary text-white hover:bg-orange-600' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}>
      Details ansehen
    </Link>
  </div>
);

const DetailItem = ({ title, text }: any) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center shrink-0 border border-zinc-800 text-primary font-bold">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{text}</p>
    </div>
  </div>
);

const AudienceCard = ({ title, text, icon }: any) => (
  <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-colors group">
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{text}</p>
  </div>
);

const AccordionItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden">
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
        <p className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-zinc-800/50">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Home;
