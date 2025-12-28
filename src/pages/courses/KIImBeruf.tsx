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
                Produktivität und Qualität steigern. Lernen Sie fortgeschrittenes Prompting und die Integration von KI in Ihre täglichen Workflows.
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
               <div className="aspect-video bg-gray-80 rounded-2xl flex items-center justify-center border border-gray-70">
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
            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Modul 1: Advanced Prompt Engineering</h3>
              <p className="text-gray-30">Vom einfachen Befehl zum komplexen "Chain-of-Thought". Wie Sie ChatGPT dazu bringen, genau den Stil und das Format zu liefern, das Sie brauchen.</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Modul 2: KI als Schreibpartner</h3>
              <p className="text-gray-30">Erstellung von Marketing-Texten, Berichten, E-Mail-Sequenzen. Wir nutzen KI für Brainstorming, Gliederung und Ausformulierung.</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Modul 3: Tool-Landschaft & Auswahl</h3>
              <p className="text-gray-30">ChatGPT ist nicht alles. Überblick über Perplexity, Claude, Midjourney und spezialisierte Tools für PDFs und Datenanalyse.</p>
            </div>

            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h3 className="text-xl font-bold text-white mb-4">Modul 4: Aufbau persönlicher Patterns</h3>
              <p className="text-gray-30">Erstellung einer eigenen Prompt-Bibliothek für wiederkehrende Aufgaben, um dauerhaft Zeit zu sparen.</p>
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
                    Zentral in Hamburg, perfekt angebunden.
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
                       <h4 className="text-xl font-bold text-white">Sarah Expertin</h4>
                       <p className="text-primary mb-2">Digital Consultant</p>
                       <p className="text-gray-30 text-sm leading-relaxed">
                          Sarah optimiert seit Jahren Unternehmensprozesse. Sie zeigt Ihnen nicht nur die Tools, sondern wie man sie effizient in den Arbeitsalltag integriert.
                       </p>
                       <a href="/trainer" className="text-primary text-sm mt-2 inline-block hover:underline">Mehr über das Team erfahren →</a>
                    </div>
                 </div>

                  <div className="mt-12">
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
      <section className="py-20">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Häufige Fragen zum Kurs</h2>
            <div className="space-y-2">
               <AccordionItem
                  question="Ist dieser Kurs für komplette Anfänger geeignet?"
                  answer="Grundlegende PC-Kenntnisse werden vorausgesetzt. Wenn Sie noch nie von ChatGPT gehört haben, empfehlen wir unseren Grundlagenkurs. Wenn Sie es schon mal ausprobiert haben, sind Sie hier richtig."
               />
               <AccordionItem
                  question="Kann ich meine eigenen Projekte mitbringen?"
                  answer="Absolut! Im Praxisteil können wir gerne an Ihren konkreten Use-Cases arbeiten."
               />
               <AccordionItem
                  question="Gibt es ein Zertifikat?"
                  answer="Ja, Sie erhalten ein Teilnahmezertifikat, das die erlernten Kompetenzen (Prompt Engineering, KI-Tools) bestätigt. Ideal für LinkedIn oder den Arbeitgeber."
               />
            </div>
         </div>
      </section>

      <div className="py-12 text-center">
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
