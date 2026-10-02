import React from 'react';
import { Truck, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../../config/constants';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-950/80 via-zinc-950 to-amber-950/80 text-amber-200/90 text-xs sm:text-sm py-2 px-4 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Anuncio Principal de Domicilio */}
        <div className="flex items-center gap-2 overflow-hidden">
          <Truck className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="truncate text-xs sm:text-sm font-medium tracking-wide">
            {BUSINESS_CONFIG.deliveryBannerText}
          </span>
        </div>

        {/* CTA "Cotiza ya" directo a WhatsApp (sin exponer el número telefónico) */}
        <div className="shrink-0">
          <a
            href={getWhatsAppUrl('Hola Don Humberto, quiero cotizar un trabajo desde el banner superior.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-amber-100 border border-amber-400/40 text-xs font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Cotiza ya</span>
          </a>
        </div>

      </div>
    </div>
  );
};
