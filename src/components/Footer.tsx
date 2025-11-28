import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900 text-center text-zinc-500 text-sm">
      <div className="container mx-auto px-6">
        <p>&copy; 2024 Growento UI. Alle Rechte vorbehalten.</p>
        <div className="flex justify-center gap-6 mt-4">
           <a href="#" className="hover:text-white transition-colors">Impressum</a>
           <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
           <a href="#" className="hover:text-white transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
