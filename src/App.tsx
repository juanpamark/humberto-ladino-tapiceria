import React from 'react';
import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Gallery } from './components/sections/Gallery';
import { Process } from './components/sections/Process';
import { Services } from './components/sections/Services';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d0e12] text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950">
      {/* 1. Cinta Superior de Anuncios */}
      <TopBar />

      {/* 2. Barra de Navegación Sticky */}
      <Header />

      {/* 3. Contenido Principal con flujo de conversión optimizado */}
      <main className="flex-1">
        {/* Hero: Propuesta de valor (+50 años de experiencia) */}
        <Hero />

        {/* 1er Impacto Visual: Antes y Después */}
        <BeforeAfter />

        {/* Portafolio: Catálogo de trabajos entregados */}
        <Gallery />

        {/* ¿Cómo Funciona? Proceso en 3 pasos simples puerta a puerta */}
        <Process />

        {/* Servicios: Técnicas, materiales y recogida a domicilio */}
        <Services />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Botón Flotante Oficial de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
