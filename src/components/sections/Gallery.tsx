import React, { useState } from 'react';
import { Camera, ZoomIn, MessageCircle } from 'lucide-react';
import { SITE_IMAGES, CatalogItem } from '../../config/images';
import { LightboxModal } from '../common/LightboxModal';
import { getWhatsAppUrl } from '../../config/constants';

export const Gallery: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const showPrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => 
      prev === 0 ? SITE_IMAGES.catalog.length - 1 : (prev! - 1)
    );
  };

  const showNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => 
      prev === SITE_IMAGES.catalog.length - 1 ? 0 : (prev! + 1)
    );
  };

  const currentItem = selectedItemIndex !== null ? SITE_IMAGES.catalog[selectedItemIndex] : null;

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#101217] text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado sin conteo de fotos */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-4">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Portafolio de Trabajos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-50">
            Galería de trabajos entregados
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Una muestra de muebles fabricados y restaurados en nuestro taller con dedicación artesanal y acabados de lujo.
          </p>
        </div>

        {/* Cuadrícula Editorial Minimalista de Imágenes (Proporción 4:3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SITE_IMAGES.catalog.map((item: CatalogItem, index: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-[#15171e] rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-amber-500/50 shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Contenedor de Imagen con Aspect Ratio 4:3 Limpio */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
                <img
                  src={item.imageUrl}
                  alt="Trabajo de tapicería y restauración"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Degradado suave inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />

                {/* Contenido en Overlay al Hover */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {/* Tag superior discreto */}
                  <div className="flex justify-between items-center">
                    {item.tag ? (
                      <span className="bg-[#0d0e12]/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.tag}
                      </span>
                    ) : <span />}
                    <div className="w-8 h-8 rounded-full bg-zinc-900/80 text-white flex items-center justify-center border border-zinc-700">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Botón flotante para cotizar este modelo específico */}
                  <div className="pt-2">
                    <a
                      href={getWhatsAppUrl(`Hola Don Humberto, vi la foto de "${item.tag || 'un mueble'}" en su catálogo web y me interesa cotizar un trabajo similar.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-xs shadow-lg transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-zinc-950" />
                      <span>Cotizar este estilo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Conversión: Envío de fotos por WhatsApp */}
        <div className="mt-16 text-center bg-gradient-to-b from-[#15171e] to-[#0d0e12] border border-amber-500/20 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-50">
            ¿Tienes un mueble en mente que deseas tapizar o refaccionar?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto">
            Envíanos una foto por WhatsApp para darte una cotización exacta y asesorarte con el muestrario de telas y acabados.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={getWhatsAppUrl('Hola Don Humberto, quiero enviar fotos de mi mueble para una cotización exacta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-zinc-950" />
              <span>Enviar fotos por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* Modal Lightbox */}
      <LightboxModal
        isOpen={selectedItemIndex !== null}
        item={currentItem}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
};
