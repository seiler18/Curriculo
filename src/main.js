import '../assets/css/style.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

import { renderNavbar } from './components/navbar.js'
import { renderHero } from './components/hero.js'
import { renderAbout } from './components/about.js'
import { renderSkills } from './components/skills.js'
import { renderExperience, initExperience } from './components/experience.js'
import { renderCertificates } from './components/certificates.js'
import { renderFooter } from './components/footer.js'

const app = document.getElementById('app')

app.innerHTML =
  renderNavbar() +
  renderHero() +
  renderAbout() +
  renderSkills() +
  renderExperience() +
  renderCertificates() +
  renderFooter()

// Dispara una animación de entrada (fadeInUp) cada vez que una sección oculta
// se hace visible. AOS no sirve aquí porque los elementos están display:none,
// así que usamos una clase CSS reiniciable. Reflow forzado para re-disparar.
function revealSection($el) {
  if (!$el.is(':visible')) return
  const node = $el[0]
  node.classList.remove('section-reveal')
  void node.offsetWidth
  node.classList.add('section-reveal')
  AOS.refresh()
}

// Toggle sections: hidden by default, shown on button or nav link click
function setupToggle(targetSel, triggerSels) {
  const $target = $(targetSel).hide()
  triggerSels.forEach(sel =>
    $(sel).on('click', () => {
      $target.toggle()
      revealSection($target)
    })
  )
}

setupToggle('#Conocimiento', ['#Ocultar3', '#mostrarConocimiento'])
setupToggle('#Experiencia', ['#Ocultar2', '#mostrarExperiencia'])
setupToggle('#Certificados', ['#Ocultar', '#mostrarCertificados'])

// Nestlé modal internal toggles
$('#carta-trabajo').hide()
$('#OcultarCartaTrabajo').on('click', () => $('#carta-trabajo').toggle())

$('#certificados-nestle').hide()
$('#OcultarCertificadosNestle').on('click', () => $('#certificados-nestle').toggle())

// Animaciones al hacer scroll (AOS) sobre el contenido siempre visible.
// once:true → la animación se dispara una sola vez; respeta prefers-reduced-motion.
// IMPORTANTE: se inicializa DESPUÉS de ocultar las secciones toggle. Si se
// iniciara antes, AOS calcularía las posiciones con la página "larga" (secciones
// desplegadas) y, al colapsarse, el footer y los botones de más abajo quedarían
// con puntos de disparo erróneos → nunca se revelarían (se quedan en opacity:0).
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
  disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
})

// Recalcula posiciones cuando todo (fuentes, imágenes, carruseles) terminó de
// cargar, por si el layout cambió de altura después de AOS.init.
window.addEventListener('load', () => AOS.refresh())

// Google Translate: elimina el banner superior que tapa el navbar y evita
// que la página se desplace hacia abajo cuando se traduce. Se ejecuta cada
// vez que Google inserta o modifica algo (a prueba de reinserciones).
function fixGoogleTranslate() {
  document
    .querySelectorAll('.goog-te-banner-frame, iframe.skiptranslate')
    .forEach(el => el.style.setProperty('display', 'none', 'important'))
  if (document.body.style.top && document.body.style.top !== '0px') {
    document.body.style.setProperty('top', '0px', 'important')
  }
}
const gtObserver = new MutationObserver(fixGoogleTranslate)
gtObserver.observe(document.documentElement, { childList: true, subtree: true })
gtObserver.observe(document.body, { attributes: true, attributeFilter: ['style'] })
