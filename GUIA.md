# Guía de mantenimiento — Curriculum Web

Guía práctica para modificar, agregar contenido y desplegar el sitio.

---

## Estructura del proyecto

```
Curriculo/
├── index.html                  ← Shell HTML mínimo (no tocar salvo casos puntuales)
├── vite.config.js              ← Configuración del build
├── package.json                ← Dependencias y scripts
│
├── src/
│   ├── main.js                 ← Punto de entrada, importa todo
│   ├── data/                   ← AQUÍ VIVE EL CONTENIDO
│   │   ├── experience.js       ← Historial laboral
│   │   ├── certificates.js     ← Todos los certificados
│   │   ├── skills.js           ← Habilidades con porcentaje
│   │   └── projects.js         ← Links del dropdown "Mis proyectos"
│   └── components/             ← Estructura visual de cada sección
│       ├── navbar.js
│       ├── hero.js
│       ├── about.js
│       ├── skills.js
│       ├── experience.js
│       ├── certificates.js
│       └── footer.js
│
├── assets/
│   ├── css/style.css           ← Estilos del sitio
│   ├── img/                    ← Imágenes (logos, fotos de cards)
│   └── certificados/           ← PDFs e imágenes de certificados
│
└── scripts/
    └── copy-assets.js          ← Copia automática de assets al build
```

**Regla general:** para cambiar contenido, edita los archivos dentro de `src/data/`. Para cambiar estructura o diseño, edita `src/components/`.

---

## Comandos del día a día

```bash
# Ver el sitio en local mientras editas
npm run dev
# Abre http://localhost:5173/Curriculo/

# Construir para producción (verificar antes de subir)
npm run build

# Publicar cambios (esto dispara el deploy automático)
git add .
git commit -m "descripción del cambio"
git push origin main
```

---

## Modificar texto existente

| Qué cambiar | Archivo |
|---|---|
| Nombre, edad, dirección, estudios | `src/components/about.js` |
| Objetivos y conocimientos generales | `src/components/about.js` |
| Texto SAP (modal) | `src/components/about.js` |
| Frase del hero "Innovar es la clave..." | `src/components/hero.js` |
| Logos del carrusel del hero | `src/components/hero.js` → array `logos` |
| Redes sociales, email, WhatsApp | `src/components/footer.js` |
| Links del dropdown "Mis proyectos" | `src/data/projects.js` |

---

## Agregar o editar una habilidad

Archivo: **`src/data/skills.js`**

```js
export const skills = [
  { name: 'HTML5 & CSS3', level: 100 },
  { name: 'React & NodeJS', level: 100 },
  // Agrega al final:
  { name: 'Docker', level: 80 },
]
```

El número en `level` es el porcentaje de la barra de progreso (1-100).

---

## Agregar un certificado nuevo

### Paso 1 — Agregar los archivos
- Imagen del certificado (JPG/PNG) → `assets/img/`
- PDF del certificado → `assets/certificados/`

### Paso 2 — Registrar en el archivo de datos

Archivo: **`src/data/certificates.js`**

**Si tiene PDF descargable:**
```js
{
  id: 'NombreUnico',          // ID único sin espacios ni tildes
  title: 'Nombre del curso',  // Texto que aparece en la card
  img: 'assets/img/NombreUnico.jpg',
  type: 'modal',
  modalTitle: 'Título completo del certificado',
  certHref: 'assets/certificados/NombreUnico.pdf',
  download: 'NombreUnico',    // Nombre del archivo al descargar
  slide: 1,   // 0 = primera página del carrusel | 1 = segunda
  col: 0,     // 0 = columna izquierda | 1 = columna derecha
},
```

**Si es certificado externo (FreeCodeCamp, Oracle, etc.):**
```js
{
  id: 'NombreUnico',
  title: 'Nombre del curso',
  img: 'assets/img/NombreUnico.png',
  type: 'link',
  url: 'https://url-del-certificado.com',
  slide: 1,
  col: 1,
},
```

> **Nota sobre slide/col:**
> El carrusel tiene 2 páginas (slide 0 y slide 1), y cada página tiene 2 columnas (col 0 y col 1).
> Agrega al slide/col que tenga menos elementos para mantener balance.

---

## Agregar una experiencia laboral

### Paso 1 — Agregar la imagen de la empresa
Guarda el logo o foto en `assets/img/`

### Paso 2 — Registrar en el archivo de datos

Archivo: **`src/data/experience.js`**

```js
{
  id: 'NombreEmpresa',              // ID único, sin espacios
  title: 'Nombre de la Empresa',
  location: 'País - Ciudad',
  role: 'Cargo que tuve',
  img: 'assets/img/logo-empresa.png',
  imgAlt: 'Descripción imagen',
  slide: 2,                         // 0, 1 o 2 (ver nota abajo)
  modalTitle: 'Nombre Empresa - Ciudad',
  position: 'Cargo completo',
  duration: '1 año',
  from: 'Enero 2025',
  to: 'Actualidad',                 // O 'Diciembre 2025'
  description: 'Descripción de las funciones realizadas.',
},
```

> **Nota sobre slide:**
> El carrusel de experiencia tiene 3 slides:
> - `slide: 0` → Banco, La Jorara, La Negra (3 cards)
> - `slide: 1` → MyTrip, AIEP, Nestlé (3 cards)
> - `slide: 2` → Opciones SA (centrada sola)
>
> Para agregar un trabajo nuevo, usa `slide: 2` y se mostrará junto a Opciones SA,
> o crea un `slide: 3` si prefieres una nueva página.

---

## Publicar cambios — flujo completo

```bash
# 1. Ver los cambios antes de subir (opcional)
git status

# 2. Agregar todos los archivos modificados
git add .

# 3. Crear el commit con descripción
git commit -m "agrego certificado Docker"

# 4. Subir a GitHub → el deploy es automático
git push origin main
```

En aproximadamente 2 minutos el sitio en `https://seiler18.github.io/Curriculo/` se actualiza.

Si el `push` falla con error "non-fast-forward", significa que hay cambios en GitHub que no tienes local. Solución:
```bash
git pull origin main
git push origin main
```

---

## Instalar el proyecto en un PC nuevo

Requisitos previos: tener instalado **Git** y **Node.js** (versión 16 o superior).

```bash
# 1. Clonar el repositorio
git clone git@github.com:seiler18/Curriculo.git

# 2. Entrar a la carpeta
cd Curriculo

# 3. Instalar dependencias (solo la primera vez)
npm install

# 4. Levantar el servidor local
npm run dev
```

Si `npm install` da error de SSL (redes corporativas con proxy):
```bash
npm config set strict-ssl false
npm install
```

---

## Solución de problemas frecuentes

| Problema | Causa | Solución |
|---|---|---|
| `git push` rechazado | Hay commits en GitHub que no tienes | `git pull origin main` luego `git push` |
| Imagen no aparece en el sitio | Ruta incorrecta o archivo no subido | Verificar que el archivo esté en `assets/img/` y el nombre coincida exactamente (mayúsculas/minúsculas) |
| El sitio no se actualiza | El build de GitHub Actions falló | Ir a GitHub → Actions y revisar el error |
| Vim se abre al hacer `git pull` | Git pide mensaje de merge | Escribir `:wq` y presionar Enter |
| Cambios locales que no quiero subir | Archivos modificados por error | `git checkout -- nombre-del-archivo` |
