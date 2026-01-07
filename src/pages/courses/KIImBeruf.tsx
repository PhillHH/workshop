import React from 'react';
import { CheckIcon } from '../../components/Icons';
import AccordionItem from '../../components/AccordionItem';

const KIImBeruf = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <section className="bg-gray-90 py-20 border-b border-gray-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-sm font-bold mb-6">
                Fortgeschritten
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">KI im Beruf</h1>
              <p className="text-xl text-gray-30 mb-8">
                Produktivität und Qualität steigern. Lernen Sie fortgeschrittenes Prompting und die nahtlose Integration von KI in Ihre täglichen Workflows. Für Nutzer, die über das bloße "Ausprobieren" hinaus sind und echte Effizienzgewinne suchen.
              </p>
              <div className="flex items-center space-x-8 mb-8">
                <div>
                  <p className="text-gray-50 text-sm">Preis</p>
                  <p className="text-3xl font-bold text-white">299 € <span className="text-sm font-normal text-gray-50">zzgl. MwSt.</span></p>
                </div>
                <div>
                  <p className="text-gray-50 text-sm">Dauer</p>
                  <p className="text-3xl font-bold text-white">6 Std.</p>
                </div>
              </div>
              <a
                href="/checkout?course=beruf"
                className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
              >
                Jetzt Platz sichern
              </a>
            </div>
            <div className="mt-12 lg:mt-0 relative">
               <div className="aspect-video bg-gray-80 rounded-2xl flex items-center justify-center border border-gray-70 overflow-hidden">
                  <span className="text-gray-50">Kursraum / Business Meeting</span>
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
            {/* Block 1 */}
            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Block 1: Advanced Prompt Engineering</h3>
                <span className="text-primary text-sm font-semibold mt-2 md:mt-0">ca. 90 Min</span>
              </div>
              <p className="text-gray-30 italic mb-4">Vom Befehl zum Dialog – Profi-Techniken für bessere Ergebnisse</p>
              <ul className="space-y-3 mb-4">
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Vom Simple-Prompt zum "Chain-of-Thought":</strong> Wie Sie der KI helfen, komplexe Probleme Schritt für Schritt zu lösen.</span>
                 </li>
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Output-Steuerung:</strong> Wie Sie ChatGPT dazu bringen, exakt den gewünschten Stil, Tonfall und das benötigte Format (Tabelle, Code, Liste) zu liefern.</span>
                 </li>
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Kontext-Management:</strong> Wie viele Informationen braucht die KI wirklich?</span>
                 </li>
              </ul>
              <div className="bg-gray-80/50 p-4 rounded-lg border border-gray-70">
                 <p className="text-gray-30 text-sm"><strong>Ziel:</strong> Sie lernen, die KI präzise zu steuern, statt auf Zufallstreffer zu hoffen.</p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Block 2: KI als Schreib- und Denkpartner</h3>
                <span className="text-primary text-sm font-semibold mt-2 md:mt-0">ca. 90 Min</span>
              </div>
              <p className="text-gray-30 italic mb-4">Erstellung von Content, Berichten und Kommunikation</p>
              <ul className="space-y-3 mb-4">
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Der Redaktions-Workflow:</strong> Von der Idee über die Gliederung bis zur Ausformulierung.</span>
                 </li>
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Anwendungsfälle:</strong> Marketing-Texte, komplexe Geschäftsberichte, E-Mail-Sequenzen.</span>
                 </li>
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Brainstorming & Kritik:</strong> Die KI als Sparringspartner nutzen, um Lücken in der eigenen Argumentation zu finden.</span>
                 </li>
              </ul>
              <div className="bg-gray-80/50 p-4 rounded-lg border border-gray-70">
                 <p className="text-gray-30 text-sm"><strong>Ergebnis:</strong> Hochwertige Textproduktion in einem Bruchteil der bisherigen Zeit.</p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Block 3: Die Tool-Landschaft & Spezialisten</h3>
                <span className="text-primary text-sm font-semibold mt-2 md:mt-0">ca. 60–75 Min</span>
              </div>
              <p className="text-gray-30 italic mb-4">Über den Tellerrand von ChatGPT hinaus</p>
              <ul className="space-y-3">
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Marktüberblick:</strong> Wann lohnt sich Perplexity, Claude oder Midjourney?</span>
                 </li>
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Dokumente & Daten:</strong> Spezialisierte Tools für die Analyse von PDFs und großen Datenmengen.</span>
                 </li>
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Bildgenerierung im Business:</strong> Kurzer Einblick in visuelle KI-Tools für Präsentationen und Marketing.</span>
                 </li>
              </ul>
            </div>

            {/* Block 4 */}
            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Block 4: Persönliche Patterns & Automatisierung</h3>
                <span className="text-primary text-sm font-semibold mt-2 md:mt-0">ca. 60 Min</span>
              </div>
              <p className="text-gray-30 italic mb-4">Mehr rausholen, ohne das Rad neu zu erfinden</p>
              <ul className="space-y-3 mb-4">
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Prompt-Bibliothek:</strong> Aufbau einer eigenen Datenbank für wiederkehrende Aufgaben.</span>
                 </li>
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Custom Instructions:</strong> Wie Sie der KI dauerhaft beibringen, wer Sie sind und was Sie brauchen.</span>
                 </li>
                 <li className="flex items-start text-gray-30">
                    <CheckIcon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Effizienz-Hacks:</strong> Prozesse identifizieren, die sich dauerhaft an die KI delegieren lassen.</span>
                 </li>
              </ul>
              <div className="bg-gray-80/50 p-4 rounded-lg border border-gray-70">
                 <p className="text-gray-30 text-sm"><strong>Ziel:</strong> Eine dauerhafte Zeitersparnis von ca. 1 Stunde pro Tag erreichen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Benefits */}
      <section className="py-20 bg-gray-90 border-t border-gray-80">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               {/* Target Audience */}
               <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Für wen ist dieser Kurs geeignet?</h3>
                  <ul className="space-y-4">
                     <li className="flex items-start text-gray-30">
                        <CheckIcon className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>Fach- und Führungskräfte, die KI nicht nur als Spielerei, sondern als echten Produktivitätsfaktor nutzen wollen.</span>
                     </li>
                     <li className="flex items-start text-gray-30">
                        <CheckIcon className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>Marketing-, Vertriebs- und Content-Profis, die ihren Output qualitativ und quantitativ steigern möchten.</span>
                     </li>
                     <li className="flex items-start text-gray-30">
                        <CheckIcon className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>Unternehmer und Selbstständige auf der Suche nach effizienteren Prozessen.</span>
                     </li>
                     <li className="flex items-start text-gray-30">
                        <CheckIcon className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>Alle, die über die Grundlagen hinausgehen und die Grenzen der KI-Modelle verstehen wollen.</span>
                     </li>
                  </ul>
               </div>

               {/* Benefits */}
               <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Das nehmen Sie mit</h3>
                  <ul className="space-y-4">
                     <li className="flex items-start text-gray-30">
                        <CheckIcon className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span><strong>Echte Zeitersparnis:</strong> Automatisieren Sie Routineaufgaben und sparen Sie täglich wertvolle Zeit.</span>
                     </li>
                     <li className="flex items-start text-gray-30">
                        <CheckIcon className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span><strong>Bessere Ergebnisse:</strong> Lernen Sie, wie Sie durch präzise Prompts die Qualität des KI-Outputs massiv erhöhen.</span>
                     </li>
                     <li className="flex items-start text-gray-30">
                        <CheckIcon className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span><strong>Strategischer Vorteil:</strong> Nutzen Sie die neuesten Tools und Techniken, bevor es Ihre Wettbewerber tun.</span>
                     </li>
                     <li className="flex items-start text-gray-30">
                        <CheckIcon className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span><strong>Sicherheit im Umgang:</strong> Verstehen Sie die Stärken und Schwächen der KI und vermeiden Sie typische Fehler.</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Info Grid (Trainer & Location) */}
      <section className="py-20 border-t border-gray-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Location */}
              <div>
                 <h3 className="text-2xl font-bold text-white mb-6">Veranstaltungsort</h3>
                 <p className="text-gray-30 mb-2">
                    Unsere modernen Schulungsräume befinden sich zentral in Hamburg. Perfekt angebunden und fußläufig vom Hauptbahnhof erreichbar.
                 </p>
                 <p className="text-gray-30 font-semibold mb-6">
                    Steinstraße 5-7 oder Heidi-Kabel-Platz, 20099 Hamburg
                 </p>

                 {/* Map */}
                 <div className="bg-gray-80 rounded-lg overflow-hidden border border-gray-70 mb-4 h-64">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      src="https://maps.google.com/maps?q=Steinstra%C3%9Fe+5-7%2C+20099+Hamburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      title="Google Maps Location"
                    ></iframe>
                 </div>

                 <div className="flex items-center text-primary">
                    <CheckIcon className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Inklusive Kaffee, Snacks & Getränken.</span>
                 </div>
              </div>

              {/* Trainer */}
              <div>
                 <h3 className="text-2xl font-bold text-white mb-6">Ihr Trainer</h3>
                 <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-24 h-24 bg-gray-80 rounded-full flex-shrink-0 overflow-hidden border border-gray-70">
                       {/* Placeholder for trainer image - keeping it generic/placeholder as requested if no image found */}
                        <div className="w-full h-full flex items-center justify-center text-gray-50 bg-gray-80">
                            <span className="text-2xl font-bold">PR</span>
                        </div>
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-white">Phillip Rugullis</h4>
                       <p className="text-primary mb-3">Entwickler & KI-Experte</p>
                       <p className="text-gray-30 text-sm leading-relaxed mb-4">
                          "Ich bin Entwickler und baue KI-Systeme und Agenten für Unternehmen. Während wir im Einsteigerkurs die Grundlagen legen, zeige ich Ihnen hier, wie Sie die Technologie professionell ausreizen. Wir gehen tiefer in die Logik der Modelle, damit Sie verstehen, warum KI manchmal scheitert und wie Sie sie erfolgreich in komplexe Arbeitsprozesse integrieren."
                       </p>
                    </div>
                 </div>

                  <div className="mt-8 pt-8 border-t border-gray-80">
                    <h4 className="text-lg font-bold text-white mb-4">Das sagen Teilnehmer:</h4>
                    <blockquote className="border-l-4 border-primary pl-4 py-1">
                       <p className="text-gray-30 italic">"Der Kurs hat sich schon nach einer Woche bezahlt gemacht. Ich spare täglich etwa eine Stunde Arbeitszeit."</p>
                       <footer className="text-gray-50 text-sm mt-2">– Markus B., Projektmanager</footer>
                    </blockquote>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-90">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Häufige Fragen zum Kurs</h2>
            <div className="space-y-2">
               <AccordionItem
                  question="Ist dieser Kurs für komplette Anfänger geeignet?"
                  answer="Grundlegende PC-Kenntnisse werden vorausgesetzt. Wenn Sie noch nie von ChatGPT gehört haben, empfehlen wir unseren Grundlagenkurs. Wenn Sie es schon mal ausprobiert haben, sind Sie hier genau richtig."
               />
               <AccordionItem
                  question="Kann ich meine eigenen Projekte mitbringen?"
                  answer="Absolut! Im Praxisteil arbeiten wir gerne direkt an Ihren konkreten Use-Cases aus Ihrem Berufsalltag."
               />
               <AccordionItem
                  question="Gibt es ein Zertifikat?"
                  answer="Ja, Sie erhalten ein Teilnahmezertifikat, das die erlernten Kompetenzen (Prompt Engineering, KI-Tools) bestätigt. Ideal für LinkedIn oder als Nachweis für den Arbeitgeber."
               />
            </div>
         </div>
      </section>

      <div className="py-12 text-center bg-gray-100 pb-20">
         <a
            href="/checkout?course=beruf"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-lg text-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            Jetzt anmelden für 299 €
         </a>
      </div>
    </div>
  );
};

export default KIImBeruf;
