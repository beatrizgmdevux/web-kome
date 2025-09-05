# 🍗 Asador Kome Kome 🍔

¡Bienvenidos al proyecto web del **Asador Kome Kome**! 🔥  

Una asador de pollos de toda la vida con un toque moderno y mucho que ofrecer, que quiere su carta digital y su hueco en el mundo de internet. Este proyecto ha sido realizado para un **cliente real** con necesidades específicas y mucho sabor. 😋

---

## 📋 Descripción del Proyecto

La web tiene como objetivo principal mostrar de forma clara y accesible:

- 📝 La **carta digital** del asador, organizada por secciones.
- 📱 Una experiencia **responsive** adaptada a móviles y tablets.
- 🍔 Un **menú hamburguesa interactivo** para facilitar la navegación.
- 📍 Información útil para el cliente como ubicación y contacto.

Está desarrollada en **Astro**, con HTML, CSS y algo de JavaScript para lograr una navegación suave y actual.

---

## ✨ Características

- **Astro 5 + SCSS (Dart Sass)** con arquitectura por **base / theme / layout / components**.
- **Navegación responsive** con toggler accesible (`aria-expanded`, `Escape`, click-outside).
- **Menú (“Carta”)** generado desde JSON (categorías ordenadas, precios simples y múltiples).
- **Reviews de Google** vía **Netlify Function** (`/.netlify/functions/reviews`) con fallback a API legacy.
- **Imágenes optimizadas**: con `astro:assets` (`<Image />` / `<Picture />`) con `widths`, `formats` y `sizes`.
- Buenas prácticas: **focus ring** visible, **reduced motion**, **lazy loading** en imágenes no LCP.

[![Astro](https://img.shields.io/badge/astro-5.x-BC52EE?logo=astro)](https://astro.build/)
[![Sass](https://img.shields.io/badge/Sass-dart--sass-CC6699?logo=sass&logoColor=fff)](https://sass-lang.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/<NETLIFY_BADGE_ID>/deploy-status)](https://app.netlify.com/sites/<NETLIFY_SITE_NAME>/deploys)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#-licencia)

---

## 🗂️ Estructura del proyecto

```bash
/
├─ netlify/
│  └─ functions/
│     └─ reviews.js           # Función serverless: Google Places API → JSON de reseñas
├─ public/                    # Estáticos "tal cual" (favicon, iconos raster, etc.)
│  ├─ instagram.png
│  └─ ...
├─ src/
│  ├─ assets/                 # Imágenes fuente para astro:assets
│  ├─ components/
│  │  ├─ Button.astro
│  │  ├─ Card.astro
│  │  ├─ Footer.astro
│  │  ├─ Nav.astro
│  │  ├─ Reviews.astro
│  │  └─ Welcome.astro
│  ├─ data/
│  │  └─ menu.json            # Datos de la carta (categorías, items, precios)
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ carta.astro
│  │  ├─ contacto.astro
│  │  └─ trabajo.astro
│  └─ scss/
│     ├─ main.scss            # Punto de entrada global
│     ├─ base/
│     │  ├─ _global.scss
│     │  └─ _typography.scss
│     ├─ theme/
│     │  ├─ _variables.scss   # colores, tipografías, spacing...
│     │  └─ _mixins.scss      # container, focus-ring, mq-*, card mixin...
│     ├─ layout/
│     │  ├─ _header.scss
│     │  ├─ _nav.scss
│     │  └─ _footer.scss
│     ├─ pages/
│     │  ├─ _contact.scss
│     │  ├─ _home.scss
│     │  ├─ _jobs.scss
│     │  └─ _menu.scss
│     └─ components/
│        ├─ _buttons.scss
│        ├─ _cards.scss
│        ├─ _hero.scss
│        ├─ _menu.scss
│        ├─ _reviews.scss
│        ├─ _contact.scss
│        └─ _jobs.scss
│  └─ utils/
│     ├─ slugify.js
├─ .env                       # Variables locales (NO commitear)
├─ netlify.toml               # Config Netlify (functions, imagen CDN, etc.)
├─ astro.config.mjs
├─ package.json
├─ package-lock.json
├─ README.md
└─ tsconfig.json

---

## 🧪 Estado del Proyecto

⚙️ Proyecto en proceso de mejora
🚀 Desplegado en Netlify 
📱 Totalmente responsive

---

## 🚀 Despliegue
dev (HMR para Astro+SCSS)
dev:host (prueba en móvil en la red local)
dev:nf (HMR + Functions (/.netlify/functions/*))
serve (build + preview (producción))

---

## 📸 Captura de Pantalla

*Próximamente una imagen del diseño final aquí...*

---

## 👩🏻‍💻 Autora

Desarrollado por **Beatriz García Muñoz**  
🔗 [Kome-Kome](https://github.com/beatrizgmdevux/web-kome.git)

---

## 📄 Licencia

Este proyecto es de uso exclusivo para el cliente **Asador Kome Kome**.  
**No está permitido su uso, distribución ni modificación sin autorización previa.**  
Todos los derechos reservados © Beatriz García Muñoz.

---

¡Gracias por visitar!  👋🏼
