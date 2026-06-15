const techBadges = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Vue.js',
  'Java', 'Spring Boot', 'Groovy', 'OFbiz',
  'Docker', 'Jenkins', 'Maven', 'Git', 'SharePoint',
  'MySQL', 'PostgreSQL', 'Oracle',
  'SAP', 'RPA RocketBot', 'Office 365', 'Gestión de Servicios TI', 'Gestión Active Directory','GPOs', 'Entra ID','Gestión BitDefender',
  'ISO 9001', 'ISO 27001', 'ISO 22301', 'ISO 20000-1', 'ITIL', 'SGSI',
]

export function renderAbout() {
  const badges = techBadges
    .map(b => `<span class="tech-badge">${b}</span>`)
    .join('')

  return `
    <section id="about" class="container text-center my-5">
      <h2 class="display-3 text-light font-weight-bold my-4">Acerca de mí</h2>
      <p class="about-intro mx-auto my-4">
        <strong>Analista Administrativo y de Sistemas</strong> especializado en gestión integrada de
        sistemas ISO, seguridad de la información y continuidad del negocio. Ingeniero Civil reconvertido
        en profesional TI, con enfoque en <strong>automatización, mejora continua y transformación digital</strong>.
      </p>

      <div class="row">
        <!-- Datos y formación -->
        <div class="col-md-4 mb-4">
          <i class="fas fa-id-card fa-3x my-3"></i>
          <h3 class="my-3 text-light font-weight-bold">Datos &amp; Formación</h3>
          <ul class="text-light text-left">
            <li>Jesús Enrique Seiler Velasquez</li>
            <li>32 años — Puerto Montt, Chile</li>
            <li>Analista Administrativo &amp; de Sistemas en <strong>OPCIONES S.A.</strong></li>
            <li>Ingeniero Civil — Universidad del Zulia (Venezuela)
              <a class="titulo" href="assets/certificados/Titulo.pdf" target="_blank" rel="noopener noreferrer" download="Titulo">(Descargar título)</a>
            </li>
            <li>Técnico de Nivel Superior en Programación y Análisis de Sistemas — IP AIEP (Chile)
              <a class="titulo" href="assets/certificados/Titulo2.pdf" target="_blank" rel="noopener noreferrer" download="Titulo2">(Descargar título)</a>
            </li>
            <li>Idiomas: Español (Nativo) · Inglés Avanzado C1
              <a class="titulo" href="assets/certificados/EF SET Certificate.pdf" target="_blank" rel="noopener noreferrer" download="EF SET Certificate">(Descargar certificado)</a>
            </li>
          </ul>
        </div>

        <!-- Perfil profesional -->
        <div class="col-md-4 mb-4">
          <i class="fas fa-briefcase fa-3x my-3"></i>
          <h3 class="my-3 text-light font-weight-bold">Perfil Profesional</h3>
          <ul class="text-light text-left">
            <li>Gestión de sistemas integrados ISO 9001, 14001, 45001, 27001, 22301 y 20000-1</li>
            <li>Administrador de SharePoint — repositorio central de documentación</li>
            <li>Implementación y mantenimiento de SGSI (ISO/IEC 27001)</li>
            <li>Continuidad del negocio (ISO 22301) y gestión de servicios TI (ISO 20000-1)</li>
            <li>Auditor Interno en Normas ISO</li>
            <li>Automatización de procesos y desarrollo de soluciones administrativas</li>
            <li>Experiencia previa en gestión SAP y operaciones logísticas (Nestlé Chile)</li>
          </ul>
        </div>

        <!-- Habilidades técnicas -->
        <div class="col-md-4 mb-4">
          <i class="fas fa-laptop-code fa-3x my-3"></i>
          <h3 class="my-3 text-light font-weight-bold">Habilidades Técnicas</h3>
          <ul class="text-light text-left">
            <li><strong>Web:</strong> HTML, CSS, JavaScript, React, Node.js, Vue.js</li>
            <li><strong>Backend:</strong> Java, Spring Boot, Groovy, OFbiz</li>
            <li><strong>Seguridad &amp; Gestión:</strong> SGSI, Auditoría ISO, Gestión de Riesgos, ITIL</li>
            <li><strong>DevOps &amp; Herramientas:</strong> Docker, Jenkins, Maven, Git, SharePoint</li>
            <li><strong>Bases de datos:</strong> MySQL, PostgreSQL, Oracle</li>
            <li><strong>ERP &amp; Ofimática:</strong> SAP, OFbiz, Office 365, RPA RocketBot Nivel 2</li>
            <li>Conocimientos en Transacciones SAP
              <button type="button" class="btn btn-outline-info btn-sm ml-1"
                data-toggle="modal" data-target="#SAPConocimientos">Click para ver</button>
            </li>
          </ul>
        </div>
      </div>

      <h3 class="text-light font-weight-bold mt-4 mb-3">Stack &amp; Tecnologías</h3>
      <div class="tech-badges">
        ${badges}
      </div>

      <p class="about-interests mx-auto mt-4">
        <i class="fas fa-lightbulb"></i>
        <strong>Intereses:</strong> automatización de procesos, transformación digital, sistemas integrados,
        seguridad de la información, continuidad del negocio y mejora continua.
      </p>
    </section>

    <!-- Modal SAP -->
    <div class="modal fade" id="SAPConocimientos" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><b><u>Conocimientos en SAP (Mi periodo de trabajo en Nestlé)</u></b></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <b>PO_VAR:</b> Trata de desviaciones de producción (ver perdidas o ganancias de una o varias OP)<br>
            <b>LS26:</b> Stock en almacen por material (Ver la cantidad de un determinado material por su # de identificación, a su vez ver su ubicación en una determinada PSA)<br>
            <b>COID:</b> Detalles de ordenes de procesos<br>
            <b>COR3:</b> Visualizar ordenes de procesos<br>
            <b>LB11:</b> Visualizar necesidad de orden de transporte / anulaciónes pendientes<br>
            <b>LT10:</b> Crear instrucción de moviento interno, crear una OT (orden de transporte)<br>
            <b>ME23N:</b> Visualización y creación de pedidos para despachar cualquier materia entre una fabrica y otra.<br>
            <b>MB1A:</b> Realización de consumos/producción/anulación (101-261/102-262) de cualquier material en ordenes de procesos<br>
            <b>MB5T:</b> Revisión de ordenes de pedidos de traslado entre una fabrica y otra.<br>
            <b>Fiabilidad:</b> Tratar / Visualizar todos los reportes de linea, su desempeño %AI, %PNP, %PP, sus desviaciones. Permite medir el desempeño de toda la fabrica exportando los resultados en un excel, aplicando distintas opciones de filtrado.<br>
            <b>FEAT:</b> Aplicación web usada para hacer consumo / declaración de un determinado PRODUCTO/MATERIAL, dando como finalidad una transacción que se envia a SAP.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `
}
