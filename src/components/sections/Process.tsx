import React from 'react';
import { Camera, Truck, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/constants';

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  detail: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: Camera,
    title: 'Envíanos una foto',
    description: 'Escríbenos por WhatsApp con una o varias fotos del mueble que deseas transformar.',
    detail: 'Te damos un presupuesto preliminar y asesoría en minutos, sin ningún compromiso.',
  },
  {
    number: '02',
    icon: Truck,
    title: 'Visita con muestrario',
    description: 'Vamos hasta tu casa u oficina en Bogotá con el catálogo físico de telas, cueros y colores.',
    detail: 'Eliges el material en la iluminación de tu propio espacio y recogemos el mueble con cuidado.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Entrega impecable',
    description: 'En nuestro taller realizamos el trabajo 100% artesanal y te lo devolvemos como nuevo.',
    detail: 'Entrega en la puerta de tu hogar con total garantía en costuras, espumas y maderas.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-20 sm:py-24 bg-[#0d0e12] text-stone-100 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Fácil, Rápido y Seguro
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-50 mt-4">
            ¿Cómo trabajamos? En 3 pasos
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Sin complicaciones de transporte ni pérdidas de tiempo. Nos encargamos de todo el proceso de puerta a puerta en Bogotá.
          </p>
        </div>

        {/* Las 3 Columnas del Proceso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {STEPS.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative bg-[#15171e] rounded-2xl p-7 sm:p-8 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Número de Paso y Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-serif font-extrabold text-amber-400/30 group-hover:text-amber-400/60 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-serif font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p className="mt-3 text-sm text-stone-300 font-light leading-relaxed">
                    {step.description}
                  </p>

                  {/* Detalle de valor */}
                  <p className="mt-3 text-xs text-amber-300/80 font-medium">
                    ✓ {step.detail}
                  </p>
                </div>

                {/* Flecha conectora en desktop */}
                {index < 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-amber-500/40">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* CTA Directo del Proceso */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl('Hola Don Humberto, quiero enviar fotos de mi mueble para comenzar el proceso de cotización.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-zinc-950" />
            <span>Enviar fotos por WhatsApp ahora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
