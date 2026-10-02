import React from 'react';
import { Armchair, Wrench, Paintbrush, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/constants';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: Armchair,
    title: 'Tapicería en Cuero y Tela',
    subtitle: 'Acabados de lujo y máxima durabilidad',
    description: 'Retapizado integral de salas, sofás seccionales, poltronas y comedores. Amplio catálogo de cueros legítimos, sintéticos de alto tráfico y telas antifluido y antirrasguño.',
    highlights: ['Costuras reforzadas a mano', 'Espumas de alta densidad (Penta)', 'Capitoné tradicional y moderno'],
    ctaMessage: 'Hola Don Humberto, quiero cotizar la tapicería de mi mueble.',
  },
  {
    icon: Wrench,
    title: 'Refacción y Restauración General',
    subtitle: 'Rescate estructural de maderas nobles',
    description: 'Diagnóstico y reparación completa de esqueletos de madera quebrados o desajustados. Cambio de resortes, cinchas elásticas y nivelación de estructuras sin alterar su diseño original.',
    highlights: ['Ajuste de espigas y uniones', 'Refuerzo de cinchas y resortes', 'Conservación de muebles antiguos'],
    ctaMessage: 'Hola Don Humberto, quiero cotizar la refacción y reparación de mi mueble.',
  },
  {
    icon: Paintbrush,
    title: 'Pintura y Lacado de Muebles',
    subtitle: 'Belleza renovada para tus maderas',
    description: 'Procesos profesionales de pulido, tinte, sellado y lacado en poliuretano o laca catalizada. Acabados en mate, satinado, brillante, decapée y pátinas artesanales.',
    highlights: ['Tratamiento anticarcoma y antipolilla', 'Lacado en poliuretano de alta resistencia', 'Corrección de manchas y rayones'],
    ctaMessage: 'Hola Don Humberto, quiero cotizar la pintura o lacado de mi mueble.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#101217] text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Servicios Especializados
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-50 mt-4">
            Maestría en cada detalle
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Más de cinco décadas perfeccionando el arte de transformar y devolverle la vida a tus muebles más queridos.
          </p>
        </div>

        {/* Las 3 Columnas / Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-[#15171e] hover:bg-[#1a1d26] rounded-2xl p-7 sm:p-8 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Icono con brillo dorado */}
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300 mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Título & Subtítulo */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-1 uppercase tracking-wider">
                    {service.subtitle}
                  </p>

                  {/* Descripción */}
                  <p className="mt-4 text-sm text-stone-300 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Puntos Clave */}
                  <ul className="mt-6 space-y-2.5">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-stone-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Cotizar por Servicio */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80">
                  <a
                    href={getWhatsAppUrl(service.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-zinc-900/90 hover:bg-amber-500 text-stone-200 hover:text-zinc-950 text-xs sm:text-sm font-semibold border border-zinc-700/60 hover:border-amber-400 transition-all group/btn"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover/btn:text-zinc-950 group-hover/btn:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota Visible Destacada: Servicio a Domicilio en Bogotá */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-amber-950/40 via-zinc-900 to-amber-950/40 border border-amber-500/30 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100">
                ¡No te preocupes por el transporte de tus muebles!
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 font-light mt-0.5">
                Contamos con servicio especializado de recogida y entrega a domicilio en toda la ciudad de Bogotá.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Hola Don Humberto, quiero programar una recogida o cotización a domicilio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 text-center"
          >
            Agendar a domicilio
          </a>
        </div>

      </div>
    </section>
  );
};
