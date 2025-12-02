import React from 'react';
import { CheckIcon } from './Icons';

const TrustSection = () => {
  return (
    <section className="py-12 bg-gray-90 border-t border-b border-gray-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">

          {/* Item 1: Certificate */}
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
             </div>
             <div>
                <h4 className="text-white font-bold text-lg">Offizielles Zertifikat</h4>
                <p className="text-gray-40 text-sm">Bestätigter Kompetenzerwerb</p>
             </div>
          </div>

          {/* Item 2: Rating */}
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 bg-gray-80 rounded-full flex items-center justify-center border border-gray-70">
                <span className="text-2xl font-bold text-white">4.9</span>
             </div>
             <div>
                <h4 className="text-white font-bold text-lg">Teilnehmer-Feedback</h4>
                <div className="flex text-yellow-400 text-sm">
                   ★★★★★
                </div>
                <p className="text-gray-40 text-sm">"Sehr empfehlenswert"</p>
             </div>
          </div>

          {/* Item 3: Guarantee */}
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 bg-gray-80 rounded-full flex items-center justify-center border border-gray-70">
                <CheckIcon className="h-8 w-8 text-primary" />
             </div>
             <div>
                <h4 className="text-white font-bold text-lg">Praxis-Garantie</h4>
                <p className="text-gray-40 text-sm">Sofort anwendbares Wissen</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
