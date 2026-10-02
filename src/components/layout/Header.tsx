import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../../config/constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0d0e12]/95 backdrop-blur-md shadow-2xl border-b border-zinc-800/80 py-3' 
        : 'bg-[#0d0e12]/80 backdrop-blur-sm py-4 border-b border-zinc-800/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logotipo: Humberto Ladino - Tapicería */}
        <a href="#" className="flex items-baseline gap-1.5 sm:gap-2 group">
          <span className="text-2xl sm:text-3xl font-serif italic font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 group-hover:from-amber-200 transition-all">
            Humberto Ladino
          </span>
          <span className="text-xs sm:text-sm font-sans font-light text-stone-300 tracking-wider">
            - Tapicería
          </span>
        </a>

        {/* Navegación Desktop Sincronizada con el Flujo de la Página */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#antes-despues" className="hover:text-amber-300 transition-colors">Antes y Después</a>
          <a href="#galeria" className="hover:text-amber-300 transition-colors">Portafolio</a>
          <a href="#proceso" className="hover:text-amber-300 transition-colors">¿Cómo Funciona?</a>
          <a href="#servicios" className="hover:text-amber-300 transition-colors">Servicios</a>
        </nav>

        {/* Botones de Contacto a la Derecha */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Llamada Telefónica Directa (para clientes tradicionales) */}
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="p-2.5 rounded-full text-stone-300 hover:text-amber-300 hover:bg-zinc-800/80 transition-all border border-zinc-700/60"
            title="Llamar directamente por teléfono"
            aria-label="Llamar por teléfono"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Botón WhatsApp */}
          <a
            href={getWhatsAppUrl('Hola Don Humberto, quiero cotizar la tapicería de un mueble.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-zinc-950" />
            <span>Cotizar mi mueble</span>
          </a>
        </div>

        {/* Botón Menú Móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-300 hover:text-amber-300 focus:outline-none rounded-lg"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#15171e] border-b border-zinc-800 px-6 py-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <a 
            href="#antes-despues" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-stone-200 hover:text-amber-300 text-base font-medium py-1 transition-colors"
          >
            Antes y Después
          </a>
          <a 
            href="#galeria" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-stone-200 hover:text-amber-300 text-base font-medium py-1 transition-colors"
          >
            Portafolio
          </a>
          <a 
            href="#proceso" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-stone-200 hover:text-amber-300 text-base font-medium py-1 transition-colors"
          >
            ¿Cómo Funciona? (3 Pasos)
          </a>
          <a 
            href="#servicios" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-stone-200 hover:text-amber-300 text-base font-medium py-1 transition-colors"
          >
            Servicios
          </a>

          {/* Opciones de contacto en móvil */}
          <div className="flex flex-col gap-2.5 pt-2 border-t border-zinc-800">
            <a
              href={getWhatsAppUrl('Hola Don Humberto, quiero cotizar un mueble desde la página web.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg shadow-amber-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-medium text-xs text-stone-300 bg-zinc-900 border border-zinc-700/60"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>O llamar directamente al taller</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
