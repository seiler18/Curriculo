import '../assets/css/style.css'

import { renderNavbar } from './components/navbar.js'
import { renderHero, initHero } from './components/hero.js'
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

// Initialize hero logo carousel
initHero()

// Toggle sections: hidden by default, shown on button or nav link click
$('#Conocimiento').hide()
$('#Ocultar3').on('click', () => $('#Conocimiento').toggle())
$('#mostrarConocimiento').on('click', () => $('#Conocimiento').toggle())

$('#Experiencia').hide()
$('#Ocultar2').on('click', () => $('#Experiencia').toggle())
$('#mostrarExperiencia').on('click', () => $('#Experiencia').toggle())

$('#Certificados').hide()
$('#Ocultar').on('click', () => $('#Certificados').toggle())
$('#mostrarCertificados').on('click', () => $('#Certificados').toggle())

// Nestlé modal internal toggles
$('#carta-trabajo').hide()
$('#OcultarCartaTrabajo').on('click', () => $('#carta-trabajo').toggle())

$('#certificados-nestle').hide()
$('#OcultarCertificadosNestle').on('click', () => $('#certificados-nestle').toggle())
