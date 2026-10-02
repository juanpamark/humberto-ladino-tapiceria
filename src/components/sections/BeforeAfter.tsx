import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/constants';
import { SITE_IMAGES, BeforeAfterPair } from '../../config/images';

const ComparisonSlider: React.FC<{ item: BeforeAfterPair }> = ({ item }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  return (
    <div className="bg-[#15171e] rounded-2xl p-4 sm:p-5 border border-zinc-800/80 shadow-2xl flex flex-col justify-between">
      
      {/* Contenedor del Slider con relación de aspecto 4:3 */}
      <div>
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => updatePosition(e.clientX)}
          className="relative w-full aspect-[4/3] rounded-xl overflow-hidden select-none cursor-ew-resize touch-none shadow-inner border border-zinc-800"
        >
          {/* Imagen del DESPUÉS (Base completa) */}
          <img
            src={item.afterUrl}
            alt={`Después - ${item.tag}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 bg-amber-500 text-zinc-950 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Después
          </div>

          {/* Imagen del ANTES (Recortada por sliderPosition) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={item.beforeUrl}
              alt={`Antes - ${item.tag}`}
              className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-zinc-950/85 text-stone-200 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm border border-zinc-700/60 shadow-lg">
              Antes
            </div>
          </div>

          {/* Línea divisoria y manija interactiva */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center shadow-2xl border-2 border-[#0d0e12]">
              <span className="text-xs font-black tracking-tighter">↔</span>
            </div>
          </div>
        </div>

        {/* Indicador de deslizamiento */}
        <p className="text-[11px] text-stone-400 text-center mt-2.5 flex items-center justify-center gap-1">
          <span>👈</span> Desliza para comparar el cambio <span>👉</span>
        </p>

        {/* Tag General */}
        <div className="mt-3 text-center sm:text-left">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
            {item.tag}
          </span>
        </div>
      </div>

      {/* Botón de Cotización */}
      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
        <span className="text-xs text-stone-400">¿Quieres restaurar tu mueble?</span>
        <a
          href={getWhatsAppUrl(`Hola Don Humberto, vi la transformación de "${item.tag}" y quiero cotizar un trabajo similar.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Cotizar este trabajo</span>
        </a>
      </div>

    </div>
  );
};

export const BeforeAfter: React.FC = () => {
  return (
    <section id="antes-despues" className="py-20 sm:py-28 bg-[#0d0e12] text-stone-100 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado sin conteo de fotos */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Transformaciones Reales</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-50">
            El antes y el después de nuestro taller
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Desliza la barra para apreciar la calidad de los acabados, costuras y recuperación integral de tus muebles.
          </p>
        </div>

        {/* Los 2 Casos en proporción 4:3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SITE_IMAGES.beforeAfter.map((item) => (
            <ComparisonSlider key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};
