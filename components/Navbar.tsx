import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-white/90 backdrop-blur-xl border-slate-200 py-3 shadow-lg' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-isanpi-red to-red-700 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                爱
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-isanpi-blue rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-wider uppercase transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                ISANPI
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-isanpi-blue uppercase">
                Medical Tech
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-slate-600 hover:text-isanpi-blue hover:bg-slate-100/50 rounded-full font-bold transition-all text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
             <a 
              href="#solutions"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-isanpi-blue transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 group"
            >
              <span>获取方案</span>
              <span className="w-1.5 h-1.5 rounded-full bg-isanpi-red group-hover:animate-ping"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel absolute w-full border-t border-gray-100 animate-fade-in-up">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-bold text-slate-700 hover:text-white hover:bg-isanpi-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;