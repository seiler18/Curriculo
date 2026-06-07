import { certificates } from '../data/certificates.js'

function certButton(cert) {
  if (cert.type === 'link') {
    return `<button type="button" class="btn btn-outline-info" onclick="window.open('${cert.url}','_blank')">Ver Certificado</button>`
  }
  return `<button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#${cert.id}">Ver Certificado</button>`
}

function certModal(cert) {
  if (cert.type === 'link') return ''
  return `
    <div class="modal fade" id="${cert.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">${cert.modalTitle}</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <a href="${cert.certHref}" target="_blank" download="${cert.download}">
              <img class="img-fluid mb-3" src="${cert.img}" alt="${cert.title}">
            </a>
            <p><b>Presione imagen para descargar el certificado</b></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `
}

function certEntry(cert) {
  return `
    <img class="card-img-top" src="${cert.img}" alt="${cert.title}">
    <div class="card-body">
      <h6 class="card-title text-center"><b>${cert.title}</b></h6>
      <div class="text-center">${certButton(cert)}</div>
    </div>
  `
}

export function renderCertificates() {
  const numSlides = [...new Set(certificates.map(c => c.slide))].length
  const slides = []

  for (let s = 0; s < numSlides; s++) {
    const leftCerts = certificates.filter(c => c.slide === s && c.col === 0)
    const rightCerts = certificates.filter(c => c.slide === s && c.col === 1)

    slides.push(`
      <div class="carousel-item ${s === 0 ? 'active' : ''}">
        <div class="card-deck">
          <div class="card">${leftCerts.map(certEntry).join('')}</div>
          <div class="card">${rightCerts.map(certEntry).join('')}</div>
        </div>
      </div>
    `)
  }

  const modals = certificates.map(certModal).join('')

  return `
    <button type="button" id="botonMostrarCertificados" class="container-fluid">
      <a href="#Certificados">
        <div class="certificados text-center font-weight-bold text-light header-section1" id="Ocultar">
          Certificados Obtenidos
        </div>
      </a>
    </button>

    <section class="container-fluid my-3 p-3 bg-dark" id="Certificados">
      <div class="card-deck">
        <div id="experienciaCarousel2" class="carousel slide" data-ride="carousel" data-interval="5000">
          <div class="carousel-inner">
            ${slides.join('')}
          </div>
          <a class="carousel-control-prev" href="#experienciaCarousel2" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#experienciaCarousel2" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>

    ${modals}
  `
}
