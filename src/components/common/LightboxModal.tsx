import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { CatalogItem } from '../../config/images';
import { getWhatsAppUrl } from '../../config/constants';

interface LightboxModalProps {
  item: CatalogItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Botón Cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-zinc-900/90 text-stone-300 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-700/60 shadow-xl"
        aria-label="Cerrar visor"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Botón Anterior */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-zinc-900/80 text-stone-300 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-700/50 shadow-xl"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-zinc-900/80 text-stone-300 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-700/50 shadow-xl"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Contenedor Modal */}
      <div 
        className="relative max-w-4xl w-full bg-[#15171e] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen en grande con aspect-ratio limpio */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
          <img
            src={item.imageUrl}
            alt="Trabajo artesanal entregado"
            className="w-full h-full object-contain sm:object-cover"
          />
          {item.tag && (
            <div className="absolute top-3 left-3 bg-[#0d0e12]/80 text-amber-300 border border-amber-500/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
              {item.tag}
            </div>
          )}
        </div>

        {/* Barra de acción directa a WhatsApp */}
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#101217]">
          <p className="text-xs sm:text-sm text-stone-300 font-light text-center sm:text-left">
            Trabajo 100% artesanal realizado con acabados de alta calidad.
          </p>

          <a
            href={getWhatsAppUrl(`Hola Don Humberto, vi la foto de "${item.tag || 'un mueble'}" en su catálogo web y me interesa cotizar un trabajo similar.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-zinc-950" />
            <span>Cotizar este mueble por WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
