import React from 'react';
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
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">KI sinnvoll nutzen</h1>
              <p className="text-xl text-gray-30 mb-8">
                KI sinnvoll nutzen – vom Ausprobieren zur echten Hilfe. Für Einsteiger und Neugierige, die KI im Alltag wirklich einsetzen wollen – ohne Technik, ohne Buzzwords.
              </p>
              <div className="flex items-center space-x-8 mb-8">
                <div>
                  <p className="text-gray-50 text-sm">Preis</p>
                  <p className="text-3xl font-bold text-white">99 € <span className="text-sm font-normal text-gray-50">zzgl. MwSt.</span></p>
                </div>
                <div>
                  <p className="text-gray-50 text-sm">Dauer</p>
                  <p className="text-3xl font-bold text-white">3,5 Std.</p>
                </div>
              </div>
              <a
                href="/checkout?course=grundlagen"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
              >
                Jetzt Platz sichern
              </a>
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
              <h3 className="text-xl font-bold text-white mb-4">Block 1: Orientierung (30–40 Min)</h3>
              <p className="text-gray-30 font-bold mb-2">Warum KI sich oft nutzlos anfühlt</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-30">
                 <li>Typische Fehlannahmen bei der KI-Nutzung</li>
                 <li>Warum viele Ergebnisse enttäuschen</li>
                 <li>KI ist weder Google noch Mensch</li>
                 <li>Warum Prompts allein nicht reichen</li>
              </ul>
              <p className="text-primary mt-4 font-semibold">Ziel: Frust abbauen, Klarheit schaffen</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Block 2: Mentales Modell (45 Min)</h3>
              <p className="text-gray-30 font-bold mb-2">Wie KI wirklich arbeitet – einfach erklärt</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-30">
                 <li>Was Kontext wirklich bedeutet</li>
                 <li>Rolle, Ziel, Input, Bewertung</li>
                 <li>Denken in Aufgaben statt Prompts</li>
              </ul>
              <p className="text-primary mt-4 font-semibold">Ergebnis: Ein klares Nutzungsmodell im Kopf</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Block 3: Praxis & Anwendung (60–75 Min)</h3>
              <p className="text-gray-30 font-bold mb-2">5 reale Anwendungsfälle</p>
              <ul className="list-decimal ml-5 space-y-1 text-gray-30 mb-4">
                 <li>Texte klarer und schneller schreiben</li>
                 <li>Komplexe Themen verstehen</li>
                 <li>Entscheidungen vorbereiten</li>
                 <li>Ideen strukturieren</li>
                 <li>Alltag und Arbeit organisieren</li>
              </ul>
              <ul className="list-disc ml-5 space-y-1 text-gray-30">
                 <li>Live-Demonstrationen</li>
                 <li>Typische Fehler sichtbar machen</li>
                 <li>Vorher-/Nachher-Vergleiche</li>
              </ul>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Block 4: Fortgeschritten ohne Nerd-Talk (30–40 Min)</h3>
              <p className="text-gray-30 font-bold mb-2">Mehr rausholen, ohne mehr Aufwand</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-30">
                 <li>Gespräche mit KI führen</li>
                 <li>Iteration statt Einmal-Prompt</li>
                 <li>Halluzinationen erkennen</li>
                 <li>Datenschutz & gesunder Menschenverstand</li>
              </ul>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Block 5: Ausblick (15 Min)</h3>
              <p className="text-gray-30 font-bold mb-2">Was als Nächstes möglich ist</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-30">
                 <li>Warum Systeme statt Einzelabfragen sinnvoll werden</li>
                 <li>Wann Automatisierung Sinn ergibt</li>
                 <li>Überblick über weiterführende Kurse</li>
              </ul>
              <p className="text-primary mt-4 font-semibold">Kein Verkauf, nur Einordnung</p>
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
                 <p className="mt-2 text-sm text-primary font-semibold">Inklusive Kaffee, Snacks & Getränken</p>
              </div>

              {/* Trainer */}
              <div>
                 <h3 className="text-2xl font-bold text-white mb-6">Ihr Trainer</h3>
                 <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gray-80 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl border border-gray-70">
                       PR
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-white">Phillip Rugullis</h4>
                       <p className="text-primary mb-2">Entwickler & KI-Experte</p>
                       <p className="text-gray-30 text-sm leading-relaxed">
                          Ich bin Entwickler und baue KI-Systeme und Agenten für Unternehmen.
                          In diesem Kurs zeige ich nicht, was theoretisch möglich ist – sondern was praktisch funktioniert.
                       </p>
                       <a href="/trainer" className="text-primary text-sm mt-2 inline-block hover:underline">Mehr über das Team erfahren →</a>
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
                  answer="Laptop: optional. Es wird empfohlen, einen mitzubringen, aber Sie können auch ohne Laptop teilnehmen und zuhören oder ein Tablet nutzen."
               />
               <AccordionItem
                  question="Brauche ich einen bezahlten ChatGPT Account?"
                  answer="Nein, der kostenlose Account reicht für diesen Kurs völlig aus. Wir helfen Ihnen zu Beginn bei der Einrichtung, falls noch nicht geschehen."
               />
               <AccordionItem
                  question="Was, wenn ich gar keine Technik-Erfahrung habe?"
                  answer="Genau dann sind Sie hier richtig! Wir setzen kein Wissen voraus und erklären jeden Schritt geduldig."
               />
               <AccordionItem
                  question="Gibt es Verpflegung?"
                  answer="Ja, Snacks und Getränke (Kaffee, Wasser, Softdrinks) sind im Kurspreis enthalten."
               />
            </div>
         </div>
      </section>

      {/* Sticky Bottom CTA for Mobile (Optional) or repeated CTA */}
      <div className="py-12 text-center">
         <a
            href="/checkout?course=grundlagen"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-lg text-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            Jetzt anmelden für 99 €
         </a>
      </div>
    </div>
  );
};

export default KIGrundlagen;
