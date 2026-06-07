import { projects } from '../data/projects.js'

export function renderNavbar() {
  const projectLinks = projects
    .map(p => `<li><a class="btn nav-link text-light" href="${p.href}">${p.label}</a></li>`)
    .join('')

  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="background-color:black!important;">
      <div class="container-fluid">
        <h1>
          <a class="display-6 font-weight-bold bienvenidosTEXT text-light" href="./ejemplos_index.html" id="Index">
            <img class="bienvenidosIMG" alt="Bienvenidos" src="assets/img/vector.png">Bienvenidos
          </a>
        </h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#about">Acerca de mí</a>
            </div>
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#Experiencia" id="mostrarExperiencia">Experiencia</a>
            </div>
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#Conocimiento" id="mostrarConocimiento">Conocimientos</a>
            </div>
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#contact">Contacto</a>
            </div>
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#Certificados" id="mostrarCertificados">Certificados</a>
            </div>
            <div class="dropdown text-light">
              <a href="#" class="dropdown-toggle nav-link text-light" data-toggle="dropdown">Mis proyectos</a>
              <ul class="dropdown-menu text-light text-center">
                ${projectLinks}
              </ul>
            </div>
            <div class="dropdown text-light">
              <a href="#" class="dropdown-toggle nav-link text-light" data-toggle="dropdown">Descargar Curriculo</a>
              <ul class="dropdown-menu text-light text-center">
                <li>
                  <a class="nav-link hero-section text-light" target="_blank" href="CurriculoIngles.pdf" download="Curriculo Jesus Seiler">
                    <b>Curriculo Ingles</b>
                  </a>
                </li>
                <li>
                  <a class="nav-link hero-section text-light" target="_blank" href="Curriculo.pdf" download="Curriculo Jesus Seiler">
                    <b>Curriculo Español</b>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div id="google_translate_element" class="nav-link hero-section text-light google"></div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  `
}
