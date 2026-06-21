# Contexto del proyecto — Curriculum Web de Jesús Seiler

## ¿Qué es este proyecto?
Sitio web de curriculum personal desplegado en GitHub Pages.
URL en producción: https://seiler18.github.io/Curriculo/

## Stack tecnológico
- **Build tool:** Vite 6 (migrado desde un index.html monolítico de 2043 líneas; Dependabot lo actualizó de v4 a v6 automáticamente)
- **Frontend:** HTML/CSS/JS vanilla + Bootstrap 4.2.1 (CDN) + jQuery 3.3.1 (CDN)
- **Animaciones:** AOS (Animate On Scroll) — dependencia npm, importada y bundleada por Vite en `main.js`
- **Iconos:** Font Awesome 5.6.3 (CDN) + Font Awesome 6.1.1 (local en assets/css/all.css)
- **Fuentes:** Google Fonts Raleway
- **Deploy:** GitHub Actions → rama `gh-pages` → GitHub Pages

## Herramientas de desarrollo (MCP)
- **Playwright MCP** (`@playwright/mcp`): configurado en scope local del proyecto (`~/.claude.json`).
  Permite a Claude Code abrir el sitio en un navegador real, tomar capturas, probar responsive
  y verificar animaciones/modales en vivo. Requiere reiniciar Claude Code para activarse.

## Estructura de archivos clave

```
Curriculo/
├── CLAUDE.md                   ← Este archivo (contexto para Claude Code)
├── GUIA.md                     ← Guía de mantenimiento para el usuario
├── index.html                  ← Shell HTML mínimo (~50 líneas). No contiene secciones.
├── vite.config.js              ← base: '/Curriculo/'
├── package.json                ← type: "module", scripts: dev/build/preview
├── .github/workflows/deploy.yml ← CI/CD: push a main → build → deploy a gh-pages
│
├── src/
│   ├── main.js                 ← Entry point: importa CSS, renderiza componentes, inicializa jQuery toggles
│   ├── data/                   ← FUENTE DE VERDAD del contenido
│   │   ├── experience.js       ← Array de 7 trabajos con campos: id, title, location, role, img, slide, modalTitle, position, duration, from, to, description
│   │   ├── certificates.js     ← Array de 31 certificados con campos: id, title, img, type ('modal'|'link'), slide (0|1), col (0|1)
│   │   ├── skills.js           ← Array de skills con { name, level }
│   │   └── projects.js         ← Array de proyectos del dropdown navbar con { label, href }
│   └── components/             ← Cada componente exporta una función render() que retorna HTML string
│       ├── navbar.js           ← Genera navbar con dropdown de proyectos desde projects.js
│       ├── hero.js             ← Header con carrusel de logos + initHero() para scroll
│       ├── about.js            ← Sección "Acerca de mí" + modal SAP hardcodeado
│       ├── skills.js           ← Barras de progreso generadas desde data/skills.js
│       ├── experience.js       ← Carrusel Bootstrap + modales de trabajo generados desde data/experience.js
│       ├── certificates.js     ← Carrusel Bootstrap + modales de certificados generados desde data/certificates.js
│       └── footer.js           ← Sección contacto y redes sociales
│
├── assets/
│   ├── css/
│   │   ├── style.css           ← Estilos principales (fondo negro, animación header, carruseles, responsive)
│   │   └── all.css             ← Font Awesome 6.1.1 local
│   ├── img/                    ← Imágenes: logos, headers (header1-4.jpg), fotos de cards de experiencia
│   ├── certificados/           ← PDFs y JPGs de certificados descargables
│   └── webfonts/               ← Fuentes de Font Awesome
│
├── scripts/
│   └── copy-assets.js          ← Post-build: copia assets/img, assets/certificados, assets/js, assets/css,
│                                  assets/webfonts, todos los sub-proyectos y archivos raíz al dist/
│
├── Curriculo.pdf               ← CV en español (se copia a dist/ en el build)
├── CurriculoIngles.pdf         ← CV en inglés (se copia a dist/ en el build)
├── ejemplos.html               ← Lista de ciudades (sub-proyecto)
├── ejemplos_index.html         ← Índice de proyectos del portfolio
├── pokemon.html                ← Pokedex (sub-proyecto)
│
└── [sub-proyectos/]            ← ReservaHoras/, FormularioJAVASCRIPT/, CalculadoraJAVASCRIPT/,
                                   AnalizadorImagen/, Desafio Cuppon/, Desafio Grilla/,
                                   Desafio Suricata/, Iguana Page/, Paginaweb/,
                                   Landing-Adalid-master/, desafio/
```

## Decisiones de arquitectura importantes

### Por qué Vite y no otra cosa
El `index.html` original tenía 2043 líneas con todo inline. Se migró a Vite para separar datos de presentación. Se eligió Vite sobre un framework (React/Vue) para mantener el stack vanilla que el usuario ya conoce.

### Por qué los assets no están en public/
Las imágenes de CSS (`url('../img/header1.webp')`) son procesadas por Vite automáticamente cuando se importa `style.css` desde `main.js`. Las imágenes referenciadas en HTML strings (componentes JS) no las procesa Vite, por eso el script `copy-assets.js` las copia manualmente a `dist/` después del build.

### Cómo funciona el deploy
1. `git push origin main` dispara GitHub Actions
2. Actions ejecuta `npm install && npm run build`
3. `npm run build` = `vite build` + `node scripts/copy-assets.js`
4. El contenido de `dist/` se sube a la rama `gh-pages`
5. GitHub Pages sirve `gh-pages` en `seiler18.github.io/Curriculo/`

### Sistema de animaciones (AOS + reveal manual)
Hay DOS mecanismos de animación, por una razón concreta:
1. **AOS** (`data-aos="fade-up|zoom-in"`, `data-aos-delay`) se usa SOLO en contenido
   **siempre visible** (hero, about, badges, botones-banner, footer). Se inicializa en
   `main.js` con `AOS.init({ once:true, ... })` y respeta `prefers-reduced-motion`.
2. **`.section-reveal`** (animación CSS `sectionReveal` en `style.css`) se usa en las
   secciones que están `display:none` y se despliegan con botón (`#Conocimiento`,
   `#Experiencia`, `#Certificados`). AOS NO funciona ahí porque marca los elementos con
   `opacity:0` y se quedan invisibles si el scroll ya pasó. La función `setupToggle()` en
   `main.js` añade la clase al hacer visible la sección (con reflow forzado para re-disparar)
   y llama `AOS.refresh()`.
**Regla:** nunca pongas `data-aos` dentro de una sección oculta por toggle; usa el reveal CSS.
Los badges de tecnología llevan `style="--i:N"` para escalonar su entrada vía CSS puro.

### jQuery y Bootstrap como globals
jQuery y Bootstrap JS se cargan como scripts CDN en `index.html` ANTES del módulo Vite. Los componentes usan `$` como global. Esto funciona porque `<script type="module">` es diferido (deferred) y los scripts CDN son síncronos, por lo tanto jQuery siempre está disponible cuando el módulo ejecuta.

### Google Translate
La función `googleTranslateElementInit` está en `index.html` con una guarda `if (!el) return`. El div `#google_translate_element` lo renderiza `navbar.js`. El script de translate usa `async` para evitar bloquear si el elemento aún no existe.

## Historial laboral del usuario (para referencia)
Jesús Seiler — Full Stack Developer e Ingeniero Civil
1. Banco Venezolano de Crédito (Venezuela, 2016)
2. La Jorara (Colombia, 2016-2018)
3. La Negra Restobar (Chile, 2018-2019)
4. My Trip Rent A Car (Chile, 2019-2020)
5. AIEP — Coordinador de Curso (Chile, 2020)
6. Nestlé — Operario Especializado (Chile, 2020-2023)
7. Opciones SA — Ingeniero de Sistemas Trainee (Chile, 2023-actualidad)

## Comandos frecuentes

```bash
npm run dev      # Servidor local → http://localhost:5173/Curriculo/
npm run build    # Build de producción en dist/
git add . && git commit -m "mensaje" && git push origin main  # Deploy
```

## Problemas resueltos en el historial de esta migración
- `ERR_CERT_DATE_INVALID` en consola → eliminado script de youracclaim.com (dominio muerto)
- Warnings de preload → eliminados los `<link rel="preload">` del index.html (Vite renombra los archivos con hash)
- PDFs del CV no descargaban → faltaban en el script copy-assets.js (corregido)
- Sub-proyectos daban 404 → sus carpetas no se copiaban al dist/ (corregido)
- `ejemplos_index.html` no abría en dev → faltaba espacio entre atributos HTML en línea 59 (corregido)
- SSL en npm install → `npm config set strict-ssl false` (red corporativa con proxy)
