import React, { useState } from 'react';
import { X } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/constants';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Tooltip flotante limpio y sutil (sin parpadeo ni rebotes) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#15171e]/95 backdrop-blur-md text-stone-100 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-zinc-700/60">
          <span className="w-2 h-2 rounded-full bg-[#25D366]" />
          <span className="font-medium text-stone-200">
            ¿Cotizamos tu mueble hoy?
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-stone-200 ml-1 p-0.5 transition-colors"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón Flotante con Logotipo Oficial de WhatsApp (Sin animate-ping) */}
      <a
        href={getWhatsAppUrl('Hola Don Humberto, quiero cotizar un mueble con usted por WhatsApp.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chatear por WhatsApp directamente con Don Humberto"
      >
        {/* Logotipo Vectorial Oficial de WhatsApp */}
        <svg 
          className="w-8 h-8 sm:w-9 sm:h-9 fill-white" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.776.88 2.796.88 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.768-5.767zm7.531 5.766c-.002 4.148-3.375 7.521-7.531 7.521-1.31 0-2.593-.343-3.719-.991l-4.312 1.131 1.15-4.204c-.718-1.168-1.097-2.515-1.097-3.908.002-4.148 3.375-7.521 7.531-7.521 4.156 0 7.529 3.373 7.531 7.521z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.661 1.436 5.176L2 22l4.981-1.398A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.063c-1.642 0-3.17-.468-4.471-1.28l-.32-.2-3.327.933.95-3.238-.21-.334A8.026 8.026 0 014 12c0-4.411 3.589-8.063 8-8.063s8 3.652 8 8.063-3.589 8.063-8 8.063z" />
        </svg>
      </a>

    </div>
  );
};
