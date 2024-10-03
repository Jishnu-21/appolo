import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black py-2' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center space-x-4 ml-16">
            <img
              src="/logo.webp"
              alt="Curve Hospitality Icon"
              className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-16'}`}
            />
            <img
              src="/logo-text.webp"
              alt="Curve Hospitality Text"
              className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-12'}`}
            />
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <nav className={`hidden md:flex space-x-6 ${scrolled ? 'text-sm' : 'text-lg'}`}>
            {['EN', 'ES', 'FR', 'HI', 'GU', 'CH'].map((lang) => (
              <Link key={lang} to={`#${lang.toLowerCase()}`} className="text-white hover:text-gray-300">
                {lang}
              </Link>
            ))}
          </nav>
          <a href="tel:+1234567890" className={`text-white flex items-center ${scrolled ? 'hidden' : 'text-lg'}`}>
            <Phone className={`${scrolled ? 'w-5 h-5' : 'w-6 h-6'} mr-2`} />
            <span>1-866-9APOLLO</span>
          </a>
          <button className={`text-white bg-green-500 rounded-full ${scrolled ? 'p-2' : 'p-3'} ${scrolled ? '' : 'hidden'}`}>
            <Menu className={`${scrolled ? 'w-6 h-6' : 'w-8 h-8'}`} />
          </button>
        </div>
      </div>
    </header>
  );
}