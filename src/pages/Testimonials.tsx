import React from 'react';
import { PlayIcon } from '../components/Icons';

const Testimonials = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 bg-gray-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Erfolgsgeschichten</h1>
          <p className="text-xl text-gray-30 max-w-2xl mx-auto">
            Hunderte Teilnehmer haben durch unsere Kurse ihre Arbeit revolutioniert. Hier sind ihre Geschichten.
          </p>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Stimmen aus den Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
                <div key={i} className="relative group cursor-pointer aspect-video bg-gray-80 rounded-2xl overflow-hidden border border-gray-70 shadow-lg">
                   {/* Placeholder Video Thumb */}
                   <div className="absolute inset-0 flex items-center justify-center bg-gray-90 group-hover:bg-gray-80 transition-colors">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                         <PlayIcon className="w-8 h-8 text-white ml-1" />
                      </div>
                   </div>
                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-bold">Teilnehmer #{i}</p>
                      <p className="text-gray-40 text-sm">Marketing Manager</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Case Studies with Numbers */}
      <section className="py-20 bg-gray-90 border-t border-gray-80">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-16 text-center">Messbare Ergebnisse</h2>

            <div className="space-y-16">
               {/* Case 1 */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="bg-gray-80 p-8 rounded-2xl border border-gray-70">
                     <h3 className="text-2xl font-bold text-white mb-4">Content-Erstellung</h3>
                     <div className="flex justify-between items-end mb-4">
                        <div className="text-center">
                           <p className="text-gray-50 text-sm mb-1">Vorher</p>
                           <p className="text-4xl font-bold text-red-400">5 Std.</p>
                        </div>
                        <div className="text-gray-50 text-2xl font-bold">→</div>
                        <div className="text-center">
                           <p className="text-gray-50 text-sm mb-1">Nachher</p>
                           <p className="text-4xl font-bold text-primary">30 Min.</p>
                        </div>
                     </div>
                     <p className="text-gray-30">
                        Für Social Media Posts und Blogartikel. Durch Einsatz von Custom Instructions und Templates.
                     </p>
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-white mb-2">Die Story</h4>
                     <p className="text-gray-30 leading-relaxed">
                        Ein Freelancer verbrachte jeden Freitag damit, Content für die nächste Woche zu planen. Nach dem Kurs "KI im Beruf" hat er sich einen Workflow gebaut, der Ideen generiert, Gliederungen schreibt und sogar Bilder vorschlägt.
                     </p>
                  </div>
               </div>

               {/* Case 2 */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                     <h4 className="text-xl font-bold text-white mb-2">Die Story</h4>
                     <p className="text-gray-30 leading-relaxed">
                        Ein HR-Team musste hunderte Bewerbungen sichten. Wir haben einen Prozess aufgesetzt, der Lebensläufe anonymisiert, Kernkompetenzen extrahiert und mit dem Stellenprofil abgleicht.
                     </p>
                  </div>
                  <div className="order-1 md:order-2 bg-gray-80 p-8 rounded-2xl border border-gray-70">
                     <h3 className="text-2xl font-bold text-white mb-4">Bewerber-Screening</h3>
                     <div className="flex justify-between items-end mb-4">
                        <div className="text-center">
                           <p className="text-gray-50 text-sm mb-1">Kosten/Bewerbung</p>
                           <p className="text-4xl font-bold text-red-400">15 €</p>
                        </div>
                        <div className="text-gray-50 text-2xl font-bold">→</div>
                        <div className="text-center">
                           <p className="text-gray-50 text-sm mb-1">Kosten/Bewerbung</p>
                           <p className="text-4xl font-bold text-primary">0,50 €</p>
                        </div>
                     </div>
                     <p className="text-gray-30">
                        Durch Automatisierung des ersten Screenings (unter Wahrung des Datenschutzes).
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Logos */}
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-50 uppercase tracking-widest text-sm mb-8">Vertrauen von Unternehmen wie</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Dummy Logos */}
               <div className="text-2xl font-bold text-white">TECH_CORP</div>
               <div className="text-2xl font-bold text-white">MEDIA.GROUP</div>
               <div className="text-2xl font-bold text-white">HanseImmo</div>
               <div className="text-2xl font-bold text-white">StartUp_X</div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Testimonials;
