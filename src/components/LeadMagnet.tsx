'use client';
import React, { useState } from 'react';
import { CheckIcon } from './Icons';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`Lead collected: ${email} for PDF Download`);
      setIsSuccess(true);
      // Simulate PDF download
      setTimeout(() => {
         // In a real app, this would be window.open('/path/to/pdf.pdf');
         alert("Download gestartet: '5-Schritte-Prompt-Guide.pdf'");
      }, 1000);

      // Auto close after success
      setTimeout(() => {
         setIsVisible(false);
      }, 4000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-90 border-t border-primary/30 shadow-[0_-5px_20px_rgba(0,0,0,0.3)] transform transition-transform duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-1">
               🎁 Gratis Download: Der 5-Schritte-Prompt-Guide
            </h3>
            <p className="text-gray-40 text-sm">
               Steigern Sie Ihre Produktivität sofort. Einfach E-Mail eintragen und PDF erhalten.
            </p>
          </div>

          {/* Form */}
          {!isSuccess ? (
             <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
               <input
                 type="email"
                 placeholder="Ihre E-Mail Adresse"
                 required
                 className="flex-1 md:w-64 bg-gray-100 border border-gray-70 rounded px-4 py-2 text-white focus:outline-none focus:border-primary placeholder-gray-50 text-sm"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <button
                 type="submit"
                 className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded text-sm font-bold transition-colors whitespace-nowrap"
               >
                 Jetzt laden
               </button>
             </form>
          ) : (
             <div className="flex items-center text-primary font-bold animate-pulse">
                <CheckIcon className="mr-2" />
                Download startet...
             </div>
          )}

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 md:relative md:top-auto md:right-auto text-gray-50 hover:text-white"
            aria-label="Schließen"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;
