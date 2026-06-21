import { skills } from '../data/skills.js'

export function renderSkills() {
  const bars = skills
    .map(s => `
      <div class="col-12 col-md-6 mb-4">
        <h5 class="text-secondary">${s.name}</h5>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
            role="progressbar"
            style="width: ${s.level}%"
            aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100">
            ${s.level}%
          </div>
        </div>
      </div>
    `)
    .join('')

  return `
    <button type="button" id="botonMostrarConocimientos" class="container-fluid btn-info" data-aos="zoom-in">
      <a href="#Conocimiento">
        <h3 class="conocimientos text-light my-3" id="Ocultar3">
          Conocimientos de programación adquiridos en el ultimo año
        </h3>
      </a>
    </button>

    <section id="Conocimiento" class="container text-center my-5">
      <h2 class="mb-4" style="color: whitesmoke;">Progreso de Conocimientos</h2>
      <i class="fas fa-brain fa-3x my-3" style="color: whitesmoke;"></i>
      <div class="row justify-content-center">
        ${bars}
      </div>
    </section>
  `
}
