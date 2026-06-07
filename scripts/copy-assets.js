import { cpSync, mkdirSync, copyFileSync, existsSync } from 'fs'
import { join } from 'path'

// Carpetas que se copian completas a dist/
const dirs = [
  // Assets del sitio principal
  'assets/img',
  'assets/certificados',
  'assets/js',
  'assets/css',
  'assets/webfonts',
  // Sub-proyectos del portfolio
  'ReservaHoras',
  'FormularioJAVASCRIPT',
  'CalculadoraJAVASCRIPT',
  'AnalizadorImagen',
  'Desafio Cuppon',
  'Desafio Grilla',
  'Desafio Suricata',
  'Iguana Page',
  'Paginaweb',
  'Landing-Adalid-master',
  'desafio',
]

// Archivos sueltos en la raíz que también deben estar en dist/
const rootFiles = [
  'Curriculo.pdf',
  'CurriculoIngles.pdf',
  'ejemplos.html',
  'ejemplos_index.html',
  'pokemon.html',
]

for (const dir of dirs) {
  if (!existsSync(dir)) {
    console.warn(`⚠  No encontrado: ${dir}`)
    continue
  }
  const dest = join('dist', dir)
  mkdirSync(dest, { recursive: true })
  cpSync(dir, dest, { recursive: true })
  console.log(`✓ Copied ${dir} → ${dest}`)
}

for (const file of rootFiles) {
  if (!existsSync(file)) {
    console.warn(`⚠  No encontrado: ${file}`)
    continue
  }
  copyFileSync(file, join('dist', file))
  console.log(`✓ Copied ${file} → dist/${file}`)
}
