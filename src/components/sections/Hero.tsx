import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Truck, Award } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/constants';
import { SITE_IMAGES } from '../../config/images';

export const Hero: React.FC = () => {
  const ctaUrl = getWhatsAppUrl('Hola Don Humberto, vi su página web y quiero cotizar la tapicería de mis muebles.');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#0d0e12] text-stone-100 overflow-hidden">
      
      {/* Imagen Grande de Fondo con Overlay Oscuro y Proporción 16:9 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('${SITE_IMAGES.hero.url}')`,
        }}
        role="img"
        aria-label={SITE_IMAGES.hero.alt}
      >
        {/* Capas de degradado para garantizar contraste y legibilidad impecable */}
        <div className="absolute inset-0 bg-[#0d0e12]/75 via-[#0d0e12]/70 to-[#0d0e12]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-[#0d0e12]/60" />
      </div>

      {/* Contenido Central */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center py-16 sm:py-24">
        
        {/* Tag Superior de Tradición */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md mb-6 animate-pulse-subtle">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-200">
            Oficio y Tradición en Bogotá
          </span>
        </div>

        {/* Título Principal H1 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-stone-50 leading-[1.1] max-w-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-sans font-extrabold mr-2">
            +50 años
          </span> 
          de experiencia en tapicería!
        </h1>

        {/* Subtítulo Principal */}
        <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-serif italic text-amber-200/95 max-w-3xl leading-snug">
          Tus muebles están seguros con la mejor tapicería de Bogotá
        </p>

        {/* Bajada Descriptiva */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl font-light leading-relaxed">
          Trabajo 100% manual con acabados impecables en refacción, tapicería y pintura de muebles de alta calidad. 
          Atención personalizada y asesoría experta.
        </p>

        {/* Botones de Acción (CTAs) */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Botón WhatsApp */}
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-zinc-950" />
            <span>Cotizar mi mueble</span>
          </a>

          {/* Botón Portafolio */}
          <a
            href="#galeria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-sm sm:text-base text-stone-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/70 transition-all"
          >
            <span>Ver trabajos</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>

        {/* Sellos de Confianza */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left w-full max-w-3xl border-t border-zinc-800/80 pt-8">
          
          {/* Sello 1: Domicilio en Bogotá */}
          <div className="flex items-center gap-3 bg-[#15171e]/70 backdrop-blur-sm p-3.5 rounded-xl border border-zinc-800/80 shadow-md">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-200">Domicilio en Bogotá</p>
              <p className="text-xs text-stone-400">Recogida y entrega</p>
            </div>
          </div>

          {/* Sello 2: Trabajo 100% manual */}
          <div className="flex items-center gap-3 bg-[#15171e]/70 backdrop-blur-sm p-3.5 rounded-xl border border-zinc-800/80 shadow-md">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-200">Trabajo 100% manual</p>
              <p className="text-xs text-stone-400">Acabados impecables</p>
            </div>
          </div>

          {/* Sello 3: Trato directo con Don Humberto */}
          <div className="flex items-center gap-3 bg-[#15171e]/70 backdrop-blur-sm p-3.5 rounded-xl border border-zinc-800/80 shadow-md">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-200">Trato directo</p>
              <p className="text-xs text-stone-400">Con Don Humberto</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
