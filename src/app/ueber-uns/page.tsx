import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 bg-gray-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Wer wir sind</h1>
          <p className="text-xl text-gray-30 max-w-3xl mx-auto">
            Wir sind ein Team aus KI-Enthusiasten, Pädagogen und Strategen mit einer gemeinsamen Mission:
            Künstliche Intelligenz für jeden zugänglich und nutzbar zu machen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Trainer 1 */}
            <div className="bg-gray-90 rounded-2xl overflow-hidden border border-gray-80 flex flex-col">
              <div className="h-64 bg-gray-80 w-full object-cover">
                 {/* Placeholder for Image */}
                 <div className="w-full h-full flex items-center justify-center text-gray-50">Foto Phillip Rugullis</div>
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Phillip Rugullis</h3>
                <p className="text-primary font-medium mb-4">Gründer & Lead Trainer</p>
                <p className="text-gray-30 text-sm mb-6">
                  Spezialist für Prompt Engineering und Didaktik. Hat über 500 Menschen in Workshops geschult.
                  Publizierte diverse Fachartikel zum Thema "Ethik in der KI".
                </p>
                <div className="mt-auto">
                  <h4 className="text-white font-bold text-sm mb-2">Erfolge:</h4>
                  <ul className="text-gray-50 text-xs space-y-1 list-disc list-inside">
                     <li>Lehrbeauftragter an der Uni Hamburg</li>
                     <li>Entwicklung des "5-Step-Prompting" Modells</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trainer 2 */}
            <div className="bg-gray-90 rounded-2xl overflow-hidden border border-gray-80 flex flex-col">
              <div className="h-64 bg-gray-80 w-full object-cover">
                 {/* Placeholder for Image */}
                 <div className="w-full h-full flex items-center justify-center text-gray-50">Foto Trainer 2</div>
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Sarah Expertin</h3>
                <p className="text-primary font-medium mb-4">KI-Consultant & Coach</p>
                <p className="text-gray-30 text-sm mb-6">
                  Expertin für KI-Implementierung in Unternehmen. Fokus auf Marketing und Content Creation.
                  Baut Brücken zwischen Technik und Anwendung.
                </p>
                <div className="mt-auto">
                  <h4 className="text-white font-bold text-sm mb-2">Erfolge:</h4>
                  <ul className="text-gray-50 text-xs space-y-1 list-disc list-inside">
                     <li>Beratung von DAX-Konzernen</li>
                     <li>Automatisierung von Content-Flows bei MediaAgentur X</li>
                  </ul>
                </div>
              </div>
            </div>

             {/* Trainer 3 */}
             <div className="bg-gray-90 rounded-2xl overflow-hidden border border-gray-80 flex flex-col">
              <div className="h-64 bg-gray-80 w-full object-cover">
                 {/* Placeholder for Image */}
                 <div className="w-full h-full flex items-center justify-center text-gray-50">Foto Trainer 3</div>
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Dr. Tech Strategist</h3>
                <p className="text-primary font-medium mb-4">Automation Lead</p>
                <p className="text-gray-30 text-sm mb-6">
                  Der Mann für die Schnittstellen. Wenn es komplex wird, läuft er zur Hochform auf.
                  Verbindet alles mit allem (API, Webhooks, No-Code).
                </p>
                <div className="mt-auto">
                  <h4 className="text-white font-bold text-sm mb-2">Erfolge:</h4>
                  <ul className="text-gray-50 text-xs space-y-1 list-disc list-inside">
                     <li>Skalierung eines Startups von 10 auf 100 MA mit KI</li>
                     <li>Speaker auf der "AI Summit 2023"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-90 border-t border-gray-80">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Unsere Philosophie</h2>
            <p className="text-lg text-gray-30 mb-8 leading-relaxed">
               Wir glauben nicht an den "Hype", sondern an den Werkzeugkasten. KI ist kein magisches Einhorn, sondern eine Dampfmaschine für den Geist.
               Unser Ziel ist es nicht, Sie mit Fachbegriffen zu beeindrucken, sondern Sie zu befähigen, diese Werkzeuge selbstbewusst zu nutzen.
               <br/><br/>
               Authentizität ist uns wichtig. Wir lehren nur das, was wir selbst täglich nutzen und was sich in der Praxis bewährt hat.
            </p>
         </div>
      </section>
    </div>
  );
};
