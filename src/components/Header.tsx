import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToSection = (id: string) => {
    // If we are on the home page, scroll. Else navigate home then scroll (simple version for now: just navigate home)
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + id;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 h-[80px] flex items-center px-4 md:px-[112px] bg-gradient-to-b from-black to-transparent">
      <div className="w-full flex flex-row items-center gap-4 md:gap-12">
        {/* Logo */}
        <Link to="/" className="flex flex-row items-center gap-1">
          <div className="w-8 h-8 bg-primary rounded shadow-[0px_4px_8px_rgba(249,115,22,0.25)] flex items-center justify-center">
             {/* Simple Icon/Union placeholder */}
             <div className="w-5 h-5 bg-white rounded-full opacity-20"></div>
          </div>
          <span className="font-semibold text-white text-lg tracking-tight">Growento UI</span>
        </Link>

        {/* Navigation Links - Hidden on mobile for now or simple list */}
        <div className="hidden md:flex flex-row items-center gap-8 flex-grow">
             <button onClick={() => scrollToSection('kurse')} className="text-white font-semibold text-base hover:text-primary transition-colors">Kurse</button>
             <button onClick={() => scrollToSection('details')} className="text-white font-semibold text-base hover:text-primary transition-colors">Details</button>
             <button onClick={() => scrollToSection('faq')} className="text-white font-semibold text-base hover:text-primary transition-colors">FAQ</button>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex flex-row items-center gap-8">
            <Link to="/login" className="text-white font-semibold text-base hover:text-primary transition-colors">Log In</Link>
            <button
                onClick={() => scrollToSection('kurse')}
                className="bg-primary text-white font-semibold px-5 py-2 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
                Start Learning
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
