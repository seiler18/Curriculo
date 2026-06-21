import { experiences } from '../data/experience.js'

function workModal(exp) {
  const extraContent = exp.extra === 'nestle' ? `
    <button type="button" id="botonMostrarNestle" class="container-fluid btn-info">
      <a href="#carta-trabajo">
        <h4 class="text-light my-2" id="OcultarCartaTrabajo">Carta de trabajo - Recomendación</h4>
      </a>
    </button>
    <p class="nestle" id="carta-trabajo">
      <a href="assets/certificados/REFERENCIA_LABORAL.pdf" target="_blank" rel="noopener noreferrer" download="Carta Recomendación Jesús Seiler - Nestle Llanquihue">
        <img class="img-fluid my-2" src="assets/img/IMGRL.png" alt="Carta Trabajo">
      </a>
    </p>
    <button type="button" class="container-fluid btn-info">
      <a href="#certificados-nestle">
        <h4 class="text-light my-3" id="OcultarCertificadosNestle">Certificados en Nestlé</h4>
      </a>
    </button>
    <p class="nestle" id="certificados-nestle">
      <a href="assets/certificados/diploma de honor.jpg" target="_blank" rel="noopener noreferrer" download="Diploma Jesus Seiler">
        <img class="img-fluid my-2" src="assets/certificados/diploma de honor.jpg" alt="diploma">
      </a>
      <a href="assets/certificados/CODIGO CONDUCTA Certificado Nestle .pdf" target="_blank" rel="noopener noreferrer" download="CODIGO CONDUCTA Certificado Nestle">
        <img class="img-fluid my-2" src="assets/img/CODIGO CONDUCTA Certificado Nestle .png" alt="diploma">
      </a>
      <a href="assets/certificados/Jesus Seiler Certificado.pdf" target="_blank" rel="noopener noreferrer" download="Jesus Seiler Certificado">
        <img class="img-fluid my-2" src="assets/img/Jesus Seiler Certificado.png" alt="diploma">
      </a>
      <a href="assets/certificados/Líderes operacionales 2025.pdf" target="_blank" rel="noopener noreferrer" download="Líderes operacionales 2025">
        <img class="img-fluid my-2" src="assets/img/Líderes operacionales 2025.png" alt="diploma">
      </a>
      <a href="assets/certificados/Jesús_Seiler_ES_Programa_Nestlé_Digital_Literacy.pdf" target="_blank" rel="noopener noreferrer" download="Nestlé_Digital_Literacy">
        <img class="img-fluid my-2" src="assets/img/Jesús_Seiler_ES_Programa_Nestlé_Digital_Literacy.png" alt="diploma">
      </a>
    </p>
  ` : ''

  return `
    <div class="modal fade" id="${exp.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><b><u>${exp.modalTitle}</u></b></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-responsive">
              <thead class="thead-dark text-center">
                <tr>
                  <th>Cargo / Puesto asignado</th>
                  <th>Duración del trabajo</th>
                  <th>Desde</th>
                  <th>Hasta</th>
                  <th>Funciones o tareas realizadas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><b>${exp.position}</b></th>
                  <td>${exp.duration}</td>
                  <td>${exp.from}</td>
                  <td>${exp.to}</td>
                  <td><p class="text-justify">${exp.description}</p></td>
                </tr>
              </tbody>
            </table>
            ${extraContent}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `
}

function experienceCard(exp) {
  return `
    <div class="card">
      <img class="card-img-top" src="${exp.img}" alt="${exp.imgAlt}">
      <div class="card-body">
        <h5 class="card-title"><b>${exp.title}<br>${exp.location}</b></h5>
        <p class="card-text text-justify">${exp.role}</p>
        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#${exp.id}">Ver más</button>
      </div>
    </div>
  `
}

function emptyCard() {
  return `
    <div class="card">
      <img class="card-img-top" src="assets/img/Ofbiz.png" alt="Opciones">
      <div class="card-body">
        <h5 class="card-title"><b><br></b></h5>
        <p class="card-text text-justify"></p>
      </div>
    </div>
  `
}

export function renderExperience() {
  const slides = [0, 1, 2].map((slideIndex, i) => {
    const slideExps = experiences.filter(e => e.slide === slideIndex)
    let cardsHtml

    if (slideIndex === 2) {
      cardsHtml = `${emptyCard()}${experienceCard(slideExps[0])}${emptyCard()}`
    } else {
      cardsHtml = slideExps.map(experienceCard).join('')
    }

    return `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <div class="card-deck">
          ${cardsHtml}
        </div>
      </div>
    `
  })

  const modals = experiences.map(workModal).join('')

  return `
    <button type="button" id="botonMostrarExperiencias" class="container-fluid btn-info" data-aos="zoom-in">
      <a href="#Experiencia">
        <div class="experiencias text-center text-light header-section1" id="Ocultar2">Mi experiencia laboral</div>
      </a>
    </button>

    <section class="container-fluid my-3 p-3 bg-dark" id="Experiencia">
      <div id="experienciaCarousel" class="carousel slide" data-ride="carousel" data-interval="5000">
        <div class="carousel-inner">
          ${slides.join('')}
        </div>
        <a class="carousel-control-prev" href="#experienciaCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#experienciaCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>

    ${modals}
  `
}

export function initExperience() {
  // Nestlé modal internal toggles
  $('#carta-trabajo').hide()
  $('#OcultarCartaTrabajo').on('click', function () {
    $('#carta-trabajo').toggle()
  })

  $('#certificados-nestle').hide()
  $('#OcultarCertificadosNestle').on('click', function () {
    $('#certificados-nestle').toggle()
  })
}
