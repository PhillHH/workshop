import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ChevronDownIcon } from '../../components/Icons';
import AccordionItem from '../../components/AccordionItem';

const KIGrundlagen = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <section className="bg-gray-90 py-20 border-b border-gray-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6">
                Einsteiger
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">KI-Grundlagen</h1>
              <p className="text-xl text-gray-30 mb-8">
                Sicher starten im digitalen Zeitalter. Wir bauen Berührungsängste ab und zeigen Ihnen, wie einfach und hilfreich KI im Alltag sein kann.
              </p>
              <div className="flex items-center space-x-8 mb-8">
                <div>
                  <p className="text-gray-50 text-sm">Preis</p>
                  <p className="text-3xl font-bold text-white">149 € <span className="text-sm font-normal text-gray-50">zzgl. MwSt.</span></p>
                </div>
                <div>
                  <p className="text-gray-50 text-sm">Dauer</p>
                  <p className="text-3xl font-bold text-white">4 Std.</p>
                </div>
              </div>
              <Link
                to="/checkout?course=grundlagen"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
              >
                Jetzt Platz sichern
              </Link>
            </div>
            {/* Visual/Image Placeholder */}
            <div className="mt-12 lg:mt-0 relative">
               <div className="aspect-video bg-gray-80 rounded-2xl flex items-center justify-center border border-gray-70">
                  <span className="text-gray-50">Kursraum / Stimmungsvolles Bild</span>
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
              <h3 className="text-xl font-bold text-white mb-4">Modul 1: Entmystifizierung KI</h3>
              <p className="text-gray-30">Was ist Künstliche Intelligenz eigentlich? Wie funktioniert ein Sprachmodell? Wir erklären die Grundlagen einfach und verständlich.</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Modul 2: Der erste Dialog</h3>
              <p className="text-gray-30">Anmeldung und erste Schritte mit ChatGPT. Wie stelle ich eine Frage so, dass ich eine gute Antwort bekomme? (Grundlagen Prompting)</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Modul 3: Praxis im Alltag</h3>
              <p className="text-gray-30">Wir üben gemeinsam an echten Beispielen:
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>E-Mails formulieren und korrigieren</li>
                  <li>Reiseplanung und Kochrezepte</li>
                  <li>Zusammenfassen von langen Texten</li>
                </ul>
              </p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Modul 4: Sicherheit & Ethik</h3>
              <p className="text-gray-30">Worauf muss ich achten? Was passiert mit meinen Daten? Wo hat die KI ihre Grenzen (Halluzinationen)?</p>
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
                    Unsere modernen Schulungsräume befinden sich zentral in Hamburg.
                    Fußläufig vom Hauptbahnhof erreichbar.
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
                       <h4 className="text-xl font-bold text-white">Alex Mustermann</h4>
                       <p className="text-primary mb-2">KI-Experte & Coach</p>
                       <p className="text-gray-30 text-sm leading-relaxed">
                          Alex begleitet seit 5 Jahren Menschen in die digitale Welt. Seine Stärke ist es, komplexe Technik einfach und mit Spaß zu vermitteln.
                       </p>
                       <Link to="/trainer" className="text-primary text-sm mt-2 inline-block hover:underline">Mehr über das Team erfahren →</Link>
                    </div>
                 </div>

                 <div className="mt-12">
                    <h4 className="text-lg font-bold text-white mb-4">Das sagen Teilnehmer:</h4>
                    <blockquote className="border-l-4 border-primary pl-4 py-1">
                       <p className="text-gray-30 italic">"Endlich habe ich verstanden, wovon alle reden. Die Angst ist weg, die Neugier ist da!"</p>
                       <footer className="text-gray-50 text-sm mt-2">– Sabine K.</footer>
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
                  question="Muss ich einen Laptop mitbringen?"
                  answer="Ja, bitte bringen Sie Ihren eigenen Laptop mit. Tablets sind zur Not auch möglich, aber ein Laptop ist für die Übungen besser geeignet."
               />
               <AccordionItem
                  question="Brauche ich einen bezahlten ChatGPT Account?"
                  answer="Nein, der kostenlose Account reicht für diesen Kurs völlig aus. Wir helfen Ihnen zu Beginn bei der Einrichtung, falls noch nicht geschehen."
               />
               <AccordionItem
                  question="Was, wenn ich gar keine Technik-Erfahrung habe?"
                  answer="Genau dann sind Sie hier richtig! Wir setzen kein Wissen voraus und erklären jeden Schritt geduldig."
               />
            </div>
         </div>
      </section>

      {/* Sticky Bottom CTA for Mobile (Optional) or repeated CTA */}
      <div className="py-12 text-center">
         <Link
            to="/checkout?course=grundlagen"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-lg text-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            Jetzt anmelden für 149 €
         </Link>
      </div>
    </div>
  );
};

export default KIGrundlagen;
