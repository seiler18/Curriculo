export function renderAbout() {
  return `
    <section id="about" class="container text-center my-5">
      <h2 class="display-3 text-light font-weight-bold my-4">Acerca de mí</h2>
      <p class="my-4 text-light font-weight-bold">
        Persona enfocada en el éxito de la empresa.<br>
        Destacar y buscar siempre la mejor manera de hacer las cosas.
      </p>
      <div class="row">
        <div class="col-md-4">
          <i class="fas fa-address-card fa-3x my-3" style="color:whitesmoke"></i>
          <h3 class="my-3 text-light font-weight-bold">Datos</h3>
          <ul class="text-light font-weight-bold">
            <li>Nombres : Jesús Enrique</li>
            <li>Apellidos : Seiler Velasquez</li>
            <li>Edad : 30 años</li>
            <li>Dirección : Puerto Montt - Ana Gonzalez Olea 3034</li>
            <li>Estudios : Ingeniero Civil en la Universidad del Zulia-Venezuela
              <a class="titulo" href="assets/certificados/Titulo.pdf" target="_blank" download="Titulo">(DESCARGAR TITULO)</a>
            </li>
            <li>Técnico de nivel superior en programación y análisis de sistemas en el IP AIEP - Chile
              <a class="titulo" href="assets/certificados/Titulo2.pdf" target="_blank" download="Titulo2">(DESCARGAR TITULO)</a>
            </li>
            <li>Certificación Desarrollo de aplicaciones full stack java.</li>
            <li>Certificación Fundamentos de DevOps</li>
          </ul>
        </div>
        <div class="col-md-4">
          <i class="fas fa-child fa-3x my-3" style="color:whitesmoke"></i>
          <h3 class="my-3 text-light font-weight-bold">Objetivos</h3>
          <ul class="text-light font-weight-bold">
            <li>Desempeñarme de la mejor manera en el trabajo asignado.</li>
            <li>Procurar un ambiente de trabajo cómodo y agradable.</li>
            <li>Ser amable y respetuoso con la clientela</li>
            <li>Aprender y mejorar cada día.</li>
          </ul>
        </div>
        <div class="col-md-4">
          <i class="fas fa-clipboard-check fa-3x my-3" style="color:whitesmoke"></i>
          <h3 class="my-3 text-light font-weight-bold">Conocimientos Generales</h3>
          <ul class="text-light font-weight-bold">
            <li>Manejo de Software de Hoteles : OptilodgingPlus, Arawak, Lobby</li>
            <li>Curso de Primeros Auxilios</li>
            <li>Ingles Avanzado 40 horas Universidad del Zulia</li>
            <li>Ingles C1 (EFSET)
              <a class="titulo" href="assets/certificados/EF SET Certificate.pdf" target="_blank" download="EF SET Certificate"><br>(DESCARGAR CERTIFICADO)</a>
            </li>
            <li>Conocimiento Avanzado en Herramientas Office (365)</li>
            <li>Conocimientos en Transacciones SAP
              <button type="button" class="btn btn-outline-info hero-section titulo"
                data-toggle="modal" data-target="#SAPConocimientos">(Click para ver)</button>
            </li>
            <li>Gestión y desarrollo del Capital humano.</li>
            <li>RocketBot Nivel 2 RPA</li>
            <li>Salesforce Developer (Nociones basicas)</li>
            <li>ERP Ofbiz Framework</li>
          </ul>
        </div>
      </div>
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
