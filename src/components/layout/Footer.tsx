import React from 'react';
import { MessageCircle, MapPin, Clock, Award, Shield } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../../config/constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#0a0b0e] text-stone-300 border-t border-zinc-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Fila Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/60">
          
          {/* Columna 1: Marca y Filosofía */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-baseline gap-2 group">
              <span className="text-3xl font-serif italic font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">
                Humberto Ladino
              </span>
              <span className="text-sm font-sans font-light text-stone-300 tracking-wider">
                - Tapicería
              </span>
            </a>
            
            <p className="mt-4 text-stone-400 text-sm font-light leading-relaxed max-w-md">
              Más de 50 años de experiencia artesanal transformando, restaurando y vistiendo los mejores muebles de Bogotá. 
              El auténtico oficio hecho a mano con dedicación y honestidad.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-amber-300">
              <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
                <Award className="w-4 h-4 text-amber-400" />
                <span>+50 Años de Oficio</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Trabajo 100% Garantizado</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-100 font-sans mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a href="#antes-despues" className="hover:text-amber-300 transition-colors">Antes y Después</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-300 transition-colors">Portafolio de Trabajos</a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-amber-300 transition-colors">¿Cómo Funciona?</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-amber-300 transition-colors">Servicios Especializados</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Cobertura & Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-100 font-sans mb-4">
              Zona de Atención
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Bogotá D.C. — Servicio de recogida y entrega a domicilio.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lunes a Sábado: 8:00 AM – 6:00 PM</span>
              </li>
              <li className="pt-2 flex flex-col gap-2">
                <a
                  href={getWhatsAppUrl('Hola Don Humberto, quiero cotizar un trabajo de tapicería.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-zinc-950" />
                  <span>Cotizar por WhatsApp</span>
                </a>
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-stone-300 hover:text-white font-medium text-xs border border-zinc-700/60 transition-all"
                >
                  <span>Llamar: 316 509 0148</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Fila Inferior de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.fullName}. Todos los derechos reservados.
          </p>
          <p className="text-stone-400">
            {BUSINESS_CONFIG.city} • Hecho con maestría artesanal
          </p>
        </div>

      </div>
    </footer>
  );
};
