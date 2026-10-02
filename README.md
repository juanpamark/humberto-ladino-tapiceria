# Humberto Ladino - Tapicería Artesanal

Landing page de alta conversión para taller artesanal de tapicería, refacción y restauración de muebles en Bogotá, Colombia (+50 años de experiencia).

## 🚀 Tecnologías

- **React 18** + **TypeScript**
- **Vite** (bundler ultrarrápido)
- **Tailwind CSS** (diseño responsive y estético dark/gold)
- **Lucide React** (iconografía)
- **Cloudinary** (alojamiento optimizado de imágenes)

## 📦 Estructura del Proyecto

- `src/components/layout/`: Barra superior de cobertura, encabezado glassmorphic y footer.
- `src/components/sections/`: Hero, Antes y Después interactivo, Galería de trabajos, Cómo trabajamos (3 pasos) y Servicios.
- `src/components/common/`: Botón flotante oficial de WhatsApp y Visor modal Lightbox.
- `src/config/images.ts`: Configuración centralizada de URLs de Cloudinary y etiquetas.
- `public/_redirects`: Regla de redirección SPA para despliegue en Netlify.

## 🛠️ Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción
npm run build

# Previsualizar compilación
npm run preview
```

## 🌐 Despliegue en Netlify

- **Build command**: `npm run build`
- **Publish directory**: `dist`
