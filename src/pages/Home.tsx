import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- Icons & Shapes ---
const CheckIcon = () => (
  <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PlayIcon = () => (
  <svg className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const SproutIcon = ({ className }: { className?: string }) => (
  <svg className={`h-8 w-8 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
   <svg className={`h-8 w-8 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
   </svg>
);

const GearsIcon = ({ className }: { className?: string }) => (
   <svg className={`h-8 w-8 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
   </svg>
);

// --- Components ---

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-80">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon className="text-primary" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-30 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const CourseCard = ({
  title,
  subtitle,
  price,
  duration,
  features,
  isHighlight = false,
}: {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  isHighlight?: boolean;
}) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-2xl border ${isHighlight ? 'border-primary bg-gray-90 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'border-gray-80 bg-gray-90'} h-full transition-transform hover:-translate-y-1`}>
      {isHighlight && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Empfohlen
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-50 text-sm h-10">{subtitle}</p>
      </div>
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-extrabold text-white">{price}</span>
        </div>
        <p className="text-primary font-medium mt-2">{duration}</p>
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckIcon />
            <span className="ml-3 text-gray-30 text-sm leading-snug">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          isHighlight
            ? 'bg-primary text-white hover:bg-primary-dark'
            : 'bg-gray-80 text-white hover:bg-gray-70 hover:text-primary'
        }`}
      >
        Jetzt Kurs buchen
      </a>
    </div>
  );
};

// --- Main Page ---

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans selection:bg-primary selection:text-white">
      <Header />

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                  Werden Sie vom <br className="hidden lg:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">
                    KI-Nutzer zum KI-Gestalter
                  </span>
                </h1>
                <p className="text-lg text-gray-30 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Lernen Sie, wie Sie KI nicht nur bedienen, sondern beherrschen.
                  Optimieren Sie Workflows, steigern Sie die Produktivität und sichern Sie sich Ihren Wettbewerbsvorteil.
                  Praxisnahe Workshops in Hamburg.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <a href="#kurse" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105">
                    Jetzt Kurs finden
                  </a>
                  <a href="#details" className="bg-gray-80 hover:bg-gray-70 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                    Mehr erfahren
                  </a>
                </div>
              </div>

              {/* Video Placeholder */}
              <div className="lg:col-span-6">
                <div className="relative group cursor-pointer w-full aspect-video bg-gray-90 rounded-2xl border border-gray-80 overflow-hidden shadow-2xl">
                  {/* Mock UI for "AI Tool" look */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-gray-80 border-b border-gray-70 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center top-8">
                     <div className="text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                           <PlayIcon />
                        </div>
                        <p className="text-gray-50 text-sm font-medium">Video ansehen (1:30 min)</p>
                     </div>
                  </div>
                  {/* Decorative grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none top-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problem/Benefit Section */}
        <section className="py-20 bg-gray-90 border-t border-gray-80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Fühlen Sie sich von der KI-Entwicklung überholt?
            </h2>
            <p className="text-xl text-gray-30 mb-10 leading-relaxed">
              Die Welt dreht sich schneller denn je. Während einige KI bereits nutzen, um ihre Arbeit in der Hälfte der Zeit zu erledigen, fragen sich andere noch, wo sie anfangen sollen.
              <br/><br/>
              Wir holen Sie genau da ab, wo Sie stehen. Keine abstrakte Theorie – wir zeigen Ihnen, wie Sie KI morgen früh direkt anwenden.
            </p>
          </div>
        </section>

        {/* 3. Course Overview */}
        <section id="kurse" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Wählen Sie Ihren Einstieg</h2>
              <p className="text-gray-50 max-w-2xl mx-auto">
                Vom absoluten Anfänger bis zum Automatisierungs-Profi. Alle Kurse finden zentral in Hamburg statt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CourseCard
                title="KI-Grundlagen"
                subtitle="Sicher starten im digitalen Zeitalter. Abbau von Berührungsängsten."
                price="149 €"
                duration="4 Stunden"
                features={[
                  "Was ist KI und wie funktioniert sie?",
                  "Grundlagen Prompt Engineering",
                  "Praxis: E-Mails, Reisen, Texte",
                  "Einführung Bildgenerierung",
                  "Sicherheit & Ethik"
                ]}
              />
              <CourseCard
                title="KI im Beruf"
                subtitle="Produktivität und Qualität steigern für Berufstätige & Selbstständige."
                price="299 €"
                duration="6 Stunden"
                isHighlight={true}
                features={[
                  "Fortgeschrittenes Prompting",
                  "Vergleich & Auswahl der Tools",
                  "KI als Schreib- & Kreativpartner",
                  "Wissensmanagement mit KI",
                  "Aufbau persönlicher Patterns"
                ]}
              />
              <CourseCard
                title="KI-Automatisierung"
                subtitle="Prozesse und Workflows optimieren für Strategen & Manager."
                price="799 €"
                duration="2 Tage"
                features={[
                  "Prozessanalyse für Automatisierung",
                  "Verknüpfung via Zapier/Make",
                  "Auto-Content & Video-Avatare",
                  "Team-Workflows entwickeln",
                  "Strategische Entscheidungsfindung"
                ]}
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-50 text-sm">
                * Alle Preise zzgl. MwSt. | Inklusive Snacks, Getränke & Networking | Ort: Hamburg Innenstadt (Steinstraße oder Heidi-Kabel-Platz)
              </p>
            </div>
          </div>
        </section>

        {/* 4. Details Section (Deep Dive) */}
        <section id="details" className="py-24 bg-gray-90 border-t border-gray-80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                   <h2 className="text-3xl font-bold text-white mb-6">Mehr als nur ChatGPT</h2>
                   <p className="text-gray-30 mb-8 text-lg">
                      Unsere Kurse gehen in die Tiefe. Wir kratzen nicht nur an der Oberfläche, sondern zeigen Ihnen das volle Potenzial der aktuellen KI-Landschaft.
                   </p>

                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="flex-shrink-0 w-12 h-12 bg-gray-80 rounded-lg flex items-center justify-center border border-gray-70">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                         </div>
                         <div>
                            <h4 className="text-white font-bold">Prompt Engineering Mastery</h4>
                            <p className="text-gray-50 text-sm mt-1">Lernen Sie die Sprache der Modelle. Vom Zero-Shot zum Chain-of-Thought.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="flex-shrink-0 w-12 h-12 bg-gray-80 rounded-lg flex items-center justify-center border border-gray-70">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                         </div>
                         <div>
                            <h4 className="text-white font-bold">Multimedia Generierung</h4>
                            <p className="text-gray-50 text-sm mt-1">Bilder, Videos und Audio. Erstellen Sie Assets in Sekunden statt Stunden.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="flex-shrink-0 w-12 h-12 bg-gray-80 rounded-lg flex items-center justify-center border border-gray-70">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                         </div>
                         <div>
                            <h4 className="text-white font-bold">Workflow Automatisierung</h4>
                            <p className="text-gray-50 text-sm mt-1">Verbinden Sie Tools wie Zapier oder Make, um manuelle Arbeit abzuschaffen.</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="mt-12 lg:mt-0 relative">
                   <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                   <div className="relative bg-gray-100 border border-gray-80 rounded-2xl p-8">
                      <div className="space-y-4">
                         <div className="h-4 bg-gray-80 rounded w-3/4"></div>
                         <div className="h-4 bg-gray-80 rounded w-full"></div>
                         <div className="h-4 bg-gray-80 rounded w-5/6"></div>
                         <div className="h-32 bg-gray-80 rounded w-full mt-6 flex items-center justify-center text-gray-50 text-sm">
                            [Interaktives Beispiel oder Screenshot]
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 5. Target Groups */}
        <section id="zielgruppen" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-16">Für wen sind diese Kurse?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Persona 1 */}
               <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-gray-80 rounded-full flex items-center justify-center mb-6 text-white">
                     <SproutIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">KI-Neulinge</h3>
                  <p className="text-gray-30">
                     Privatpersonen, Angestellte oder Studierende ohne Vorerfahrung, die neugierig sind, aber auch Ängste oder Unsicherheiten abbauen wollen.
                  </p>
               </div>

               {/* Persona 2 */}
               <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-gray-80 rounded-full flex items-center justify-center mb-6 text-white">
                     <RocketIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">KI-Anwender</h3>
                  <p className="text-gray-30">
                     Berufstätige und Kreative, die KI gezielt zur Steigerung ihrer Produktivität und Qualität im Arbeitsalltag einsetzen wollen.
                  </p>
               </div>

               {/* Persona 3 */}
               <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-gray-80 rounded-full flex items-center justify-center mb-6 text-white">
                     <GearsIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">KI-Strategen</h3>
                  <p className="text-gray-30">
                     Teamleiter und Manager, die ganze Arbeitsabläufe im Unternehmen mithilfe von KI optimieren und automatisieren möchten.
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section id="faq" className="py-24 bg-gray-90 border-t border-gray-80">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Häufig gestellte Fragen</h2>
            <div className="space-y-2">
              <AccordionItem
                question="Brauche ich Vorkenntnisse?"
                answer="Für den Grundlagenkurs sind keinerlei Vorkenntnisse nötig. Für die fortgeschrittenen Kurse ist ein grundlegendes Verständnis hilfreich, aber wir holen jeden dort ab, wo er steht."
              />
              <AccordionItem
                question="Welche Software wird benötigt?"
                answer="Wir arbeiten primär mit browserbasierten Tools wie ChatGPT. Ein eigener Laptop ist erforderlich. Spezifische Software-Anforderungen werden vor Kursbeginn kommuniziert."
              />
              <AccordionItem
                question="Wo finden die Kurse statt?"
                answer="Die Kurse finden in zentraler Lage in Hamburg statt, entweder in der Steinstraße 5-7 oder am Heidi-Kabel-Platz. Beide Locations sind fußläufig vom Hauptbahnhof erreichbar."
              />
              <AccordionItem
                question="Erhalte ich ein Zertifikat?"
                answer="Ja, nach erfolgreicher Teilnahme erhalten Sie ein Teilnahmezertifikat von Growento AI, das die erlernten Inhalte bestätigt."
              />
              <AccordionItem
                question="Gibt es Verpflegung?"
                answer="Ja, Snacks und Getränke (Kaffee, Wasser, Softdrinks) sind im Kurspreis enthalten."
              />
            </div>
          </div>
        </section>

        {/* 7. Final CTA */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Starten Sie Ihre KI-Reise heute</h2>
            <p className="text-xl text-gray-30 mb-10">
              Die Plätze sind limitiert, um eine individuelle Betreuung zu gewährleisten. Sichern Sie sich jetzt Ihren Platz im nächsten Workshop.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               {/* Placeholder for checkout link */}
              <a href="#" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-lg text-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105">
                Jetzt Platz sichern
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-50">
               Sie werden zum Zahlungsanbieter weitergeleitet.
               <br/>Fragen vorab? Schreiben Sie an <a href="mailto:kontakt@growento.ai" className="text-primary hover:underline">kontakt@growento.ai</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
