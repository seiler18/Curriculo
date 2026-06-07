// Copies static asset directories into dist/ after Vite build.
// Images and PDFs referenced as string paths in JS components are not
// processed by Vite, so they need to be copied manually.
import { cpSync, mkdirSync } from 'fs'
import { join } from 'path'

const staticDirs = ['assets/img', 'assets/certificados']

for (const dir of staticDirs) {
  const dest = join('dist', dir)
  mkdirSync(dest, { recursive: true })
  cpSync(dir, dest, { recursive: true })
  console.log(`✓ Copied ${dir} → ${dest}`)
}
