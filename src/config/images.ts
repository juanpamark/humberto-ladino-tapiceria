/**
 * CENTRAL DE IMÁGENES - HUMBERTO LADINO TAPICERÍA
 * 
 * Enlaces reales de Cloudinary configurados:
 * - hero: 1 foto principal
 * - beforeAfter: 2 casos reales (4 fotos comparativas)
 * - catalog: 10 fotos de muebles reales entregados por el taller
 */

export interface BeforeAfterPair {
  id: string;
  tag: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface CatalogItem {
  id: string;
  imageUrl: string;
  tag?: string;
}

export const SITE_IMAGES = {
  // 1. HERO PRINCIPAL
  hero: {
    url: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790974137/Gemini_Generated_Image_pjalpmpjalpmpjal.jpg',
    alt: 'Taller de tapicería y restauración en Bogotá Humberto Ladino',
  },

  // 2. ANTES Y DESPUÉS (4 FOTOS = 2 PARES EN 4:3)
  beforeAfter: [
    {
      id: 'caso-1',
      tag: 'Sala Seccional en L',
      beforeUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790973919/Gemini_Generated_Image_36us5j36us5j36us.jpg',
      afterUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790974080/Gemini_Generated_Image_twu61ntwu61ntwu6.jpg',
    },
    {
      id: 'caso-2',
      tag: 'Sofá Esquinero Modular',
      beforeUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790974053/Gemini_Generated_Image_ufv64pufv64pufv6.jpg',
      afterUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790974073/Gemini_Generated_Image_7e85n67e85n67e85.jpg',
    }
  ] as BeforeAfterPair[],

  // 3. CATÁLOGO / PORTAFOLIO DE TRABAJOS ENTREGADOS (10 FOTOS)
  catalog: [
    {
      id: 'cat-1',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790974544/WhatsApp_Image_2026-10-02_at_15.55.20.jpg',
      tag: 'Sofá Modular con Puff'
    },
    {
      id: 'cat-2',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790974591/IMG_20221001_112332.jpg',
      tag: 'Sofá Clásico Curvo'
    },
    {
      id: 'cat-3',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790975432/20251218_120504_1.jpg',
      tag: 'Juego de Sala Contemporáneo'
    },
    {
      id: 'cat-4',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790975439/20251218_120407.jpg',
      tag: 'Sofá de Líneas Rectas'
    },
    {
      id: 'cat-5',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790976166/Gemini_Generated_Image_qee67hqee67hqee6_1.jpg',
      tag: 'Sala Curva Orgánica'
    },
    {
      id: 'cat-6',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790976246/20251204_093958_1.jpg',
      tag: 'Silla de Estilo Bergère'
    },
    {
      id: 'cat-7',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790976450/20260503_121459_1.jpg',
      tag: 'Sofá Confort y Cojinería'
    },
    {
      id: 'cat-8',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790976411/20250912_131609_1.jpg',
      tag: 'Sofá Chesterfield en Terciopelo'
    },
    {
      id: 'cat-9',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790977001/Gemini_Generated_Image_9bjldm9bjldm9bjl_1.jpg',
      tag: 'Cabeceros Acolchados'
    },
    {
      id: 'cat-10',
      imageUrl: 'https://res.cloudinary.com/xdjdubsz/image/upload/v1790977454/Gemini_Generated_Image_appn6bappn6bappn.jpg',
      tag: 'Sofá con Cabeceros Ajustables'
    },
  ] as CatalogItem[],
};
