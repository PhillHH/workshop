'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Kurse', href: '/#kurse' },
    { name: 'Zielgruppen', href: '/#zielgruppen' },
    { name: 'Wissen', href: '/wissen' },
    { name: 'Referenzen', href: '/referenzen' },
    { name: 'Über Uns', href: '/ueber-uns' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100/90 backdrop-blur-sm border-b border-gray-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Growento<span className="text-primary">.AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
               const isHashLink = link.href.startsWith('/#');
               // Next.js Link handles hashes correctly, but for strictly client-side navigation within same page it might need attention if not on home.
               // Next.js Link: "If you're linking to an id on the same page, Next.js will scroll to that id."
               // If linking to id on another page, it navigates then scrolls.

               return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-30 hover:text-primary transition-colors text-sm font-semibold"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#kurse"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Kurs buchen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-30 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-90 border-b border-gray-80">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
               return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-30 hover:text-white hover:bg-gray-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/#kurse"
              className="block w-full text-center mt-4 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-md text-base font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Kurs buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
