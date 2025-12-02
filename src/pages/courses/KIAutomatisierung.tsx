import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '../../components/Icons';
import AccordionItem from '../../components/AccordionItem';

const KIAutomatisierung = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <section className="bg-gray-90 py-20 border-b border-gray-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold mb-6">
                Experten / Strategen
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">KI-Automatisierung</h1>
              <p className="text-xl text-gray-30 mb-8">
                Skalierung durch Automation. Bauen Sie Systeme, die für Sie arbeiten. Von Zapier bis zu autonomen Agenten.
              </p>
              <div className="flex items-center space-x-8 mb-8">
                <div>
                  <p className="text-gray-50 text-sm">Preis</p>
                  <p className="text-3xl font-bold text-white">799 € <span className="text-sm font-normal text-gray-50">zzgl. MwSt.</span></p>
                </div>
                <div>
                  <p className="text-gray-50 text-sm">Dauer</p>
                  <p className="text-3xl font-bold text-white">2 Tage</p>
                </div>
              </div>
              <Link
                to="/checkout?course=automatisierung"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
              >
                Jetzt Platz sichern
              </Link>
            </div>
            <div className="mt-12 lg:mt-0 relative">
               <div className="aspect-video bg-gray-80 rounded-2xl flex items-center justify-center border border-gray-70">
                  <span className="text-gray-50">Kursraum / Whiteboard Session</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Was Sie lernen werden</h2>

          <div className="space-y-8">
            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Tag 1: Analyse & Grundlagen der Automation</h3>
              <p className="text-gray-30">Identifikation von Prozessen, die sich für Automatisierung eignen. Einführung in Schnittstellen (APIs) und Webhooks verstehen (ohne Programmieren).</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Tag 1: Die Werkzeuge (Make/Zapier)</h3>
              <p className="text-gray-30">Deep Dive in Automatisierungsplattformen. Wir bauen erste "Zaps" und Szenarien, die E-Mails automatisch sortieren und in Excel eintragen.</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Tag 2: Content & Marketing Automation</h3>
              <p className="text-gray-30">Automatisierte Erstellung von Social Media Posts, Blogartikeln und Newslettern. Einbindung von Bild-KI in den Workflow.</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Tag 2: Strategie & Skalierung</h3>
              <p className="text-gray-30">Wie rolle ich das im Unternehmen aus? Change Management, Kosten-Nutzen-Analyse und Aufbau eines "AI-First" Mindsets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-20 bg-gray-90 border-t border-gray-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Location */}
              <div>
                 <h3 className="text-2xl font-bold text-white mb-6">Veranstaltungsort</h3>
                 <p className="text-gray-30 mb-6">
                    Unsere Premium-Location in Hamburg.
                 </p>
                 <div className="bg-gray-80 h-64 w-full rounded-lg flex items-center justify-center text-gray-50 border border-gray-70">
                    [Google Maps Einbettung: Steinstraße 5-7, Hamburg]
                 </div>
                 <p className="mt-4 text-sm text-gray-50">Steinstraße 5-7 oder Heidi-Kabel-Platz, 20099 Hamburg</p>
              </div>

              {/* Trainer */}
              <div>
                 <h3 className="text-2xl font-bold text-white mb-6">Ihr Trainer</h3>
                 <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gray-80 rounded-full flex-shrink-0"></div>
                    <div>
                       <h4 className="text-xl font-bold text-white">Dr. Tech Strategist</h4>
                       <p className="text-primary mb-2">Automation Architect</p>
                       <p className="text-gray-30 text-sm leading-relaxed">
                          Spezialisiert auf No-Code Automatisierung und KI-Integration. Hat bereits Workflows für Startups und Konzerne gebaut, die tausende Stunden Arbeit sparen.
                       </p>
                       <Link to="/trainer" className="text-primary text-sm mt-2 inline-block hover:underline">Mehr über das Team erfahren →</Link>
                    </div>
                 </div>

                 <div className="mt-12">
                    <h4 className="text-lg font-bold text-white mb-4">Das sagen Teilnehmer:</h4>
                    <blockquote className="border-l-4 border-primary pl-4 py-1">
                       <p className="text-gray-30 italic">"Dieser Workshop hat mein Verständnis von 'Arbeit' verändert. Wir haben Prozesse, die früher Tage dauerten, auf Minuten reduziert."</p>
                       <footer className="text-gray-50 text-sm mt-2">– CEO eines Marketing-Unternehmens</footer>
                    </blockquote>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Häufige Fragen zum Kurs</h2>
            <div className="space-y-2">
               <AccordionItem
                  question="Muss ich programmieren können?"
                  answer="Nein. Wir nutzen moderne 'No-Code' Tools. Ein logisches Grundverständnis für Wenn-Dann-Beziehungen ist hilfreich, aber Programmieren ist nicht nötig."
               />
               <AccordionItem
                  question="Welche Tools werden genutzt?"
                  answer="Wir fokussieren uns auf Make (ehemals Integromat) und Zapier, da dies die Marktführer sind. Die Prinzipien sind aber übertragbar."
               />
               <AccordionItem
                  question="Kann ich mein Team mitbringen?"
                  answer="Ja, wir empfehlen sogar die Teilnahme zu zweit, um die Umsetzung im Unternehmen zu erleichtern. Fragen Sie nach unseren Gruppenrabatten."
               />
            </div>
         </div>
      </section>

      <div className="py-12 text-center">
         <Link
            to="/checkout?course=automatisierung"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-lg text-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            Jetzt anmelden für 799 €
         </Link>
      </div>
    </div>
  );
};

export default KIAutomatisierung;
