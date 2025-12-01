import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white tracking-tight">
              Growento<span className="text-primary">.AI</span>
            </span>
            <p className="mt-4 text-sm text-gray-50">
              Werden Sie vom KI-Nutzer zum KI-Gestalter. Professionelle Workshops in Hamburg.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Kurse</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/ki-grundlagen" className="text-base text-gray-50 hover:text-primary">KI-Grundlagen</Link></li>
              <li><Link href="/ki-im-beruf" className="text-base text-gray-50 hover:text-primary">KI im Beruf</Link></li>
              <li><Link href="/ki-automatisierung" className="text-base text-gray-50 hover:text-primary">KI-Automatisierung</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Rechtliches</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/impressum" className="text-base text-gray-50 hover:text-primary">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-base text-gray-50 hover:text-primary">Datenschutz</Link></li>
              <li><Link href="/agb" className="text-base text-gray-50 hover:text-primary">AGB</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Kontakt</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-50">Hamburg, Deutschland</li>
              <li className="text-base text-gray-50">Steinstraße 5-7 oder Heidi-Kabel-Platz</li>
              <li className="text-base text-gray-50"><a href="mailto:kontakt@growento.ai" className="hover:text-primary">kontakt@growento.ai</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-80 pt-8">
          <p className="text-base text-gray-50 text-center">
            &copy; {new Date().getFullYear()} Growento AI. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
