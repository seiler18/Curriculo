(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(i){if(i.ep)return;i.ep=!0;const t=l(i);fetch(i.href,t)}})();const p=[{label:"Analizador de Imagen - Computer Vision (Azure)",href:"./AnalizadorImagen/analizador.html"},{label:"Registro Persona (Spring - Thymeleaf)",href:"https://stormy-taiga-93896-fe946738c15d.herokuapp.com/"},{label:"Registro Eventos (Spring - Thymeleaf)",href:"https://appmanageevents-6fe8c2902944.herokuapp.com/"},{label:"Aplicación para Documentos (Angular)",href:"https://seiler18.github.io/AngularCrud/"},{label:"Pokedex",href:"pokemon.html"},{label:"Lista ciudades",href:"ejemplos.html"},{label:"Buscador de Imagenes",href:"https://seiler18.github.io/RayenApp/"},{label:"Carrito de Compras",href:"https://seiler18.github.io/Carrito/"},{label:"Reserva Horas",href:"./ReservaHoras/index.html"},{label:"Validación de Registro",href:"./FormularioJAVASCRIPT/index.html"},{label:"Calculadora",href:"./CalculadoraJAVASCRIPT/index.html"},{label:"Diseño Di Buffala Page",href:"./Landing-Adalid-master/index.html"},{label:"Diseño Suricata Page",href:"./Desafio Suricata/index.html"},{label:"Diseño Couppon Page",href:"./Desafio Cuppon/index.html"},{label:"Diseño Coffe Page",href:"./Paginaweb/index.html"},{label:"Diseño Iguana Page",href:"./Iguana Page/index.html"},{label:"Aprendiendo Media Queries",href:"./desafio/index.html"}];function g(){return`
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
                ${p.map(a=>`<li><a class="btn nav-link text-light" href="${a.href}">${a.label}</a></li>`).join("")}
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
  `}const u=[{href:"https://seiler18.github.io/Curriculo/",img:"assets/img/LOGO JESUS SEILER.png",alt:"LogoJesusSeiler",cls:"logo"},{href:"https://www.youracclaim.com/badges/5c3ed424-4321-4dfa-b1c5-ec322c126595/embedded",img:"assets/img/logojava.png",alt:"Logo de Java - Certificación",cls:"logo2"},{href:"https://www.acreditta.com/credential/4476ddea-f09c-4e5b-93fa-e36f8cba5cb5",img:"assets/img/logodevops.webp",alt:"Logo de Fundamentos DevOps - Certificación",cls:"logo2"},{href:"https://www.acreditta.com/credential/9f3cf4aa-bd57-42ad-93ca-04ddf485d019",img:"assets/img/Salesforce.webp",alt:"Ver Insignia de certificación",cls:"logo2"},{href:"https://www.acreditta.com/credential/554fe7be-7150-43cb-8857-58be35c30b06",img:"assets/img/Voluntarios.webp",alt:"Ver Insignia de certificación",cls:"logo2"},{href:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=0EE370D017FDDE5093D72D0FAAA09E4B5AD04E6D9E4E32BFFC3537ECDA237F0B",img:"assets/img/OCI.png",alt:"Logo de OCI - Certificación",cls:"logo2"},{href:"https://acreditta.com/credential/09287278-a942-43df-aff2-141183913973?utm_source=copy&resource_type=badge&resource=09287278-a942-43df-aff2-141183913973",img:"assets/img/22301.webp",alt:"Logo de Auditor Interno 22301 - Certificación",cls:"logo2"},{href:"https://acreditta.com/credential/ad647a01-5241-4a19-82a6-f6aa62729776?utm_source=copy&resource_type=badge&resource=ad647a01-5241-4a19-82a6-f6aa62729776",img:"assets/img/20000-1.webp",alt:"Logo de Auditor Interno 20000-1 - Certificación",cls:"logo2"}];function f(){return`
    <header class="text-light pt-5 mt-5">
      <div class="container">
        <div class="logos-container">
          <div class="logos-carousel">
            ${u.map(a=>`
      <div class="logo-item">
        <a href="${a.href}" target="_blank" rel="noopener noreferrer">
          <img class="${a.cls}" src="${a.img}" alt="${a.alt}">
        </a>
      </div>
    `).join("")}
          </div>
          <button class="carousel-button prev">←</button>
          <button class="carousel-button next">→</button>
        </div>
        <h2 class="display-3 font-weight-bold text-center header-section1 my-4">
          Innovar es la clave del éxito
        </h2>
        <div class="text-center">
          <button type="button" id="mostrarProyectos" class="mt-5 btn btn-dark" style="background-color:black!important;">
            <a href="./ejemplos_index.html">
              <p class="conocimientos text-light my-4">
                Proyectos realizados aplicando los distintos conocimientos
              </p>
            </a>
          </button>
        </div>
      </div>
    </header>
  `}function b(){const e=document.querySelector(".logos-carousel"),a=document.querySelector(".carousel-button.prev"),l=document.querySelector(".carousel-button.next");if(!e||!a||!l)return;const s=e.querySelector(".logo-item").offsetWidth+20;a.addEventListener("click",()=>{e.scrollBy({left:-s,behavior:"smooth"})}),l.addEventListener("click",()=>{e.scrollBy({left:s,behavior:"smooth"})})}function v(){return`
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
  `}const h=[{name:"HTML5 & CSS3",level:100},{name:"Spring Framework & Spring Boot (Java)",level:100},{name:"JQuery & JavaScript",level:100},{name:"Bases de Datos SQL (Oracle y PostgreSQL)",level:100},{name:"React & NodeJS",level:100},{name:"XML",level:100},{name:"JSP & Servlets",level:100},{name:"Fundamentos DevOps",level:100},{name:"Salesforce Developer",level:100},{name:"Web Scraping con RocketBot",level:100}];function C(){return`
    <button type="button" id="botonMostrarConocimientos" class="container-fluid btn-info">
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
        ${h.map(a=>`
      <div class="col-12 col-md-6 mb-4">
        <h5 class="text-secondary">${a.name}</h5>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
            role="progressbar"
            style="width: ${a.level}%"
            aria-valuenow="${a.level}" aria-valuemin="0" aria-valuemax="100">
            ${a.level}%
          </div>
        </div>
      </div>
    `).join("")}
      </div>
    </section>
  `}const n=[{id:"banco",title:"Banco Venezolano de Credito",location:"Venezuela - Zulia",role:"Representante de Ventas / Cajero",img:"assets/img/card-5.jpg",imgAlt:"Banco",slide:0,modalTitle:"Banco Venezolano de Credito",position:"Representante de ventas / Cajero administrativo",duration:"6 meses",from:"Enero 2016",to:"Junio 2016",description:"Atención de los clientes con los distintos requerimientos que tengan, ofrecer los productos del banco (ofertas y servicios), recibir depositos, realizar pagos de servicios, facturaciones pendientes. Realizar y cobrar cheques de gerencia, entre otras funciones propias de un cajero."},{id:"lajorara",title:"La Jorara",location:"Colombia - Palomino - Santa Marta",role:"Administrador / Hoster.",img:"assets/img/card-3.jpg",imgAlt:"LaJorara",slide:0,modalTitle:"La Jorara",position:"Admnistrador / Hoster / Atención al cliente",duration:"2 años",from:"Julio 2016",to:"Junio 2018",description:"Check-in Check-out de los Clientes. Administración de ingresos y egresos. Generación de planillas Excel para el pago de nómina. Planificación y atención de eventos. Servicio al cliente."},{id:"lanegra",title:"La Negra Restobar",location:"Chile - Llanquihue",role:"Garzón - Atención al cliente.<br>Encargado de caja.",img:"assets/img/card-2.jpg",imgAlt:"LaNegraRestobar",slide:0,modalTitle:"La Negra Restobar",position:"Garzón - Atención al cliente / Encargado de caja",duration:"1 año",from:"Octubre 2018",to:"Octubre 2019",description:"Atención al cliente, recibir los pedidos y notificarlos a cocina. Procurar siempre dar el mejor trato para que la experiencia del cliente sea la mejor. Manejo del Inglés con los turistas."},{id:"mytrip",title:"My Trip Rent A Car",location:"Chile - Puerto Varas",role:"Administrador general / Agente de reservas.",img:"assets/img/card-1.png",imgAlt:"MyTripRentACar",slide:1,modalTitle:"Agente Reservas MyTripRentACar",position:"Administrador general / Agente de reservas.",duration:"6 meses",from:"Octubre 2019",to:"Marzo 2020",description:"Gestión sistema de reservas. Administración de la empresa. Reportes administrativos semanales. Atención al cliente. Gestión de proyectos."},{id:"AIEP",title:"AIEP",location:"Chile - Puerto Montt",role:"Coordinador de Curso",img:"assets/img/aiep.png",imgAlt:"AIEP",slide:1,modalTitle:"AIEP - Puerto Montt",position:"Coordinador de Curso",duration:"7 meses a Honorarios",from:"Junio 2020",to:"Diciembre 2020",description:"Gestionar todo el comienzo de curso, asi como su logistica. Estar pendiente del desarrollo de cada integrante, su avance en el curso y actividades pendientes. Tambien de resolver dudas en Ruby."},{id:"Nestle",title:"Nestlé",location:"Chile - Llanquihue",role:"Operario Especializado / Apoyo Logistico",img:"assets/img/card-4.jpg",imgAlt:"Nestle",slide:1,modalTitle:"Nestlé S.A",position:"Operario Especializado - Apoyo Logistico",duration:"3 años",from:"Julio 2020",to:"Julio 2023",description:"Operador de distinta maquinaria dentro de la fabrica de Nestlé Llanquihue, siguiendo los distintos protocolos de higiene y seguridad, así como los distintos estándares de calidad.",extra:"nestle"},{id:"Opciones",title:"Opciones SA",location:"Chile - Puerto Montt",role:"Ingeniero de Sistemas - Trainee",img:"assets/img/logo.png",imgAlt:"Opciones SA",slide:2,modalTitle:"Opciones SA - Puerto Montt",position:"Ingeniero de Sistemas - Trainee",duration:"Actualidad",from:"03 - Agosto 2023",to:"Actualidad",description:""}];function y(e){const a=e.extra==="nestle"?`
    <button type="button" id="botonMostrarNestle" class="container-fluid btn-info">
      <a href="#carta-trabajo">
        <h4 class="text-light my-2" id="OcultarCartaTrabajo">Carta de trabajo - Recomendación</h4>
      </a>
    </button>
    <p class="nestle" id="carta-trabajo">
      <a href="assets/certificados/REFERENCIA_LABORAL.pdf" target="_blank" download="Carta Recomendación Jesús Seiler - Nestle Llanquihue">
        <img class="img-fluid my-2" src="assets/img/IMGRL.png" alt="Carta Trabajo">
      </a>
    </p>
    <button type="button" class="container-fluid btn-info">
      <a href="#certificados-nestle">
        <h4 class="text-light my-3" id="OcultarCertificadosNestle">Certificados en Nestlé</h4>
      </a>
    </button>
    <p class="nestle" id="certificados-nestle">
      <a href="assets/certificados/diploma de honor.jpg" target="_blank" download="Diploma Jesus Seiler">
        <img class="img-fluid my-2" src="assets/certificados/diploma de honor.jpg" alt="diploma">
      </a>
      <a href="assets/certificados/CODIGO CONDUCTA Certificado Nestle .pdf" target="_blank" download="CODIGO CONDUCTA Certificado Nestle">
        <img class="img-fluid my-2" src="assets/img/CODIGO CONDUCTA Certificado Nestle .png" alt="diploma">
      </a>
      <a href="assets/certificados/Jesus Seiler Certificado.pdf" target="_blank" download="Jesus Seiler Certificado">
        <img class="img-fluid my-2" src="assets/img/Jesus Seiler Certificado.png" alt="diploma">
      </a>
      <a href="assets/certificados/Líderes operacionales 2025.pdf" target="_blank" download="Líderes operacionales 2025">
        <img class="img-fluid my-2" src="assets/img/Líderes operacionales 2025.png" alt="diploma">
      </a>
      <a href="assets/certificados/Jesús_Seiler_ES_Programa_Nestlé_Digital_Literacy.pdf" target="_blank" download="Nestlé_Digital_Literacy">
        <img class="img-fluid my-2" src="assets/img/Jesús_Seiler_ES_Programa_Nestlé_Digital_Literacy.png" alt="diploma">
      </a>
    </p>
  `:"";return`
    <div class="modal fade" id="${e.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><b><u>${e.modalTitle}</u></b></h5>
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
                  <th scope="row"><b>${e.position}</b></th>
                  <td>${e.duration}</td>
                  <td>${e.from}</td>
                  <td>${e.to}</td>
                  <td><p class="text-justify">${e.description}</p></td>
                </tr>
              </tbody>
            </table>
            ${a}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `}function d(e){return`
    <div class="card">
      <img class="card-img-top" src="${e.img}" alt="${e.imgAlt}">
      <div class="card-body">
        <h5 class="card-title"><b>${e.title}<br>${e.location}</b></h5>
        <p class="card-text text-justify">${e.role}</p>
        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#${e.id}">Ver más</button>
      </div>
    </div>
  `}function c(){return`
    <div class="card">
      <img class="card-img-top" src="assets/img/Ofbiz.png" alt="Opciones">
      <div class="card-body">
        <h5 class="card-title"><b><br></b></h5>
        <p class="card-text text-justify"></p>
      </div>
    </div>
  `}function S(){const e=[0,1,2].map((l,s)=>{const i=n.filter(o=>o.slide===l);let t;return l===2?t=`${c()}${d(i[0])}${c()}`:t=i.map(d).join(""),`
      <div class="carousel-item ${s===0?"active":""}">
        <div class="card-deck">
          ${t}
        </div>
      </div>
    `}),a=n.map(y).join("");return`
    <button type="button" id="botonMostrarExperiencias" class="container-fluid btn-info">
      <a href="#Experiencia">
        <div class="experiencias text-center text-light header-section1" id="Ocultar2">Mi experiencia laboral</div>
      </a>
    </button>

    <section class="container-fluid my-3 p-3 bg-dark" id="Experiencia">
      <div id="experienciaCarousel" class="carousel slide" data-ride="carousel" data-interval="5000">
        <div class="carousel-inner">
          ${e.join("")}
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

    ${a}
  `}const r=[{id:"JS",title:"Javascript 1",img:"assets/img/JS.jpg",type:"modal",modalTitle:"JavaScript 1",certHref:"assets/certificados/Certificado JS1.pdf",download:"Certificado JS1",slide:0,col:0},{id:"CSS",title:"CSS aplicado",img:"assets/img/CSS.jpg",type:"modal",modalTitle:"CSS Aplicado",certHref:"assets/certificados/Certificado CSS.pdf",download:"CSS Aplicado Jesus Seiler",slide:0,col:0},{id:"DesarrolloWeb",title:"Fundamento del desarrollo web",img:"assets/img/DesarrolloWeb.jpg",type:"modal",modalTitle:"Fundamento del desarrollo web (front - back)",certHref:"assets/certificados/FundamentosDelDesarrolloWeb.pdf",download:"FundamentosDelDesarrolloWeb",slide:0,col:0},{id:"JavaSpring",title:"Java Spring Framework",img:"assets/img/JavaSpring.jpg",type:"modal",modalTitle:"Java Spring Framework",certHref:"assets/certificados/JavaSpring.pdf",download:"JavaSpring",slide:0,col:0},{id:"Analistaweb",title:"Analista Web",img:"assets/img/Analistaweb.jpg",type:"modal",modalTitle:"Analista Web",certHref:"assets/certificados/Certificado Analista Web .pdf",download:"Analista web Jesus Seiler",slide:0,col:0},{id:"RocketBot1",title:"Rocket Bot RPA Nivel 1",img:"assets/certificados/RB1.jpeg",type:"modal",modalTitle:"Rocket Bot RPA Nivel 1",certHref:"assets/certificados/RB1.jpeg",download:"RocketBot Nivel 1",slide:0,col:0},{id:"AI22301",title:"Auditor Interno 22301",img:"assets/img/22301.png",type:"modal",modalTitle:"AUDITOR/A INTERNO/A EN SISTEMAS DE GESTIÓN DE LA CONTINUIDAD DE NEGOCIO. ISO 22301:2019",certHref:"assets/certificados/JS_22301.pdf",download:"Jesus Seiler Auditor Interno 22301",slide:0,col:0},{id:"AI27001",title:"Auditor Interno 27001",img:"assets/img/27001.png",type:"modal",modalTitle:"Auditor Interno de la Norma 27001:2022 Sistema de Gestión de la Seguridad de la Información",certHref:"assets/certificados/JS_27001.pdf",download:"Jesus Seiler Auditor Interno 27001",slide:0,col:0},{id:"aplicaciones",title:"Aplicaciones Moviles 1",img:"assets/img/aplicaciones1.jpg",type:"modal",modalTitle:"Desarrollo de Aplicaciones para telefonos",certHref:"assets/certificados/Certificado Aplicaciones Moviles 1.pdf",download:"Desarrollo aplicaciones moviles Jesus Seiler",slide:0,col:1},{id:"seguridad",title:"Ciberseguridad Ciudadana",img:"assets/img/seguridad.jpg",type:"modal",modalTitle:"Ciberseguridad Ciudadana",certHref:"assets/certificados/Certificado CiberSeguridad Septiembre.pdf",download:"CiberSeguridad Ciudadana Jesus Seiler",slide:0,col:1},{id:"ServicioCliente",title:"Servicio al Cliente",img:"assets/img/EspecialistaCliente.jpg",type:"modal",modalTitle:"Especialista en la atención del cliente",certHref:"assets/certificados/EspecialistaAtencionAlCliente.pdf",download:"EspecialistaAtencionAlCliente",slide:0,col:1},{id:"Vendedor",title:"Vendedor Certificado",img:"assets/img/Vendedor.jpg",type:"modal",modalTitle:"Especialista en ventas y trato al cliente",certHref:"assets/certificados/Vendedor.pdf",download:"Vendedor",slide:0,col:1},{id:"Marketing",title:"Estrategias de Marketing",img:"assets/img/Marketing.jpg",type:"modal",modalTitle:"Estrategias de Marketing",certHref:"assets/certificados/Certificado Estrategias de Marketing Online.pdf",download:"Marketing Digital Jesus Seiler",slide:0,col:1},{id:"RocketBot2",title:"Rocket Bot RPA Nivel 2",img:"assets/certificados/RB2.jpeg",type:"modal",modalTitle:"Rocket Bot RPA Nivel 2",certHref:"assets/certificados/RB2.jpeg",download:"RocketBot Nivel 2",slide:0,col:1},{id:"AI200001",title:"Auditor Interno 20000-1",img:"assets/img/20000-1.png",type:"modal",modalTitle:"AUDITOR/A INTERNO/A EN SISTEMAS DE GESTIÓN DEL SERVICIO ISO/IEC 20000-1:2018",certHref:"assets/certificados/JS_20000-1.pdf",download:"Jesus Seiler Auditor Interno 20000-1",slide:0,col:1},{id:"AI9001_14001_45001",title:"Auditor Interno 9001-14001-45001",img:"assets/img/9001_14001_45001.png",type:"modal",modalTitle:"Auditor Interno en Sistemas Integrados de Gestión ISO 9001:2015 – ISO 14001:2015 – ISO 45001:2018",certHref:"assets/certificados/JS_9001-14001-45001.pdf",download:"Jesus Seiler Auditor Interno 9001 14001 45001",slide:0,col:1},{id:"autocad",title:"Diseño en AutoCAD",img:"assets/img/autocad.jpg",type:"modal",modalTitle:"Diseño AutoCAD 2D",certHref:"assets/certificados/Certificado AUTOCAD.pdf",download:"Diseño AutoCAD 2D Jesus Seiler",slide:1,col:0},{id:"ingles",title:"Ingles Tecnico",img:"assets/img/ingles.jpg",type:"modal",modalTitle:"Ingles Técnico",certHref:"assets/certificados/Certificado Ingles Comunicativo .pdf",download:"Ingles Comunicativo Jesus Seiler",slide:1,col:0},{id:"ScrumMaster1",title:"Scrum Master 1",img:"assets/img/ScrumMaster1.jpg",type:"modal",modalTitle:"Scrum & proyectos ágiles",certHref:"assets/certificados/PlatziScrum.pdf",download:"PlatziScrum",slide:1,col:0},{id:"ScrumMaster2",title:"Scrum Master 2",img:"assets/img/ScrumMaster2.jpg",type:"modal",modalTitle:"Scrum Master",certHref:"assets/certificados/CertifiScrum.pdf",download:"CertifiScrum",slide:1,col:0},{id:"JSSence",title:"JavaScript",img:"assets/img/JSSence.jpg",type:"modal",modalTitle:"JavaScript SENCE",certHref:"assets/certificados/Certificado JavaScript Node.Js .pdf",download:"JavaScript Jesus Seiler",slide:1,col:0},{id:"FCResponsive",title:"Responsive Web Desing",img:"assets/certificados/FCResponsiveWeb.png",type:"link",url:"https://www.freecodecamp.org/certification/ichbinseiler/responsive-web-design",slide:1,col:0},{id:"FundamentosDevOps",title:"Fundamentos DevOps SENCE",img:"assets/img/FundamentosDevOps.png",type:"modal",modalTitle:"Fundamentos DevOps",certHref:"assets/certificados/Certificado DevOps.pdf",download:"Fundamentos del DevOps",slide:1,col:0},{id:"FundamentosDevOps2",title:"Fundamentos DevOps KIBERNUM",img:"assets/img/FundamentosDevOps2.png",type:"modal",modalTitle:"Fundamentos DevOps",certHref:"assets/certificados/FundamentosDevOps2.pdf",download:"Fundamentos del DevOps",slide:1,col:0},{id:"HazloConIA",title:"IAGen (IA Generativa) - Iniciativa #HazloConIA",img:"assets/img/HazloConIA.png",type:"modal",modalTitle:"IA Generativa",certHref:"assets/certificados/HazloConIA.pdf",download:"HazloConIA",slide:1,col:0},{id:"Programacion",title:"Programación Basica",img:"assets/img/programacion.jpg",type:"modal",modalTitle:"Introducción a la Programación",certHref:"assets/certificados/Certificado Introduccion a la programacion.pdf",download:"Introducción a la programación Jesus Seiler",slide:1,col:1},{id:"react",title:"React JS",img:"assets/img/react.jpg",type:"modal",modalTitle:"Desarrollo en React",certHref:"assets/certificados/Certificado React.pdf",download:"React Jesus Seiler",slide:1,col:1},{id:"FullStack",title:"Desarrollo Full Stack Java",img:"assets/img/FullStackJava.jpg",type:"modal",modalTitle:"Desarrollo de aplicaciones web full stack java",certHref:"assets/certificados/DesarrolloFullStackJava.pdf",download:"DesarrolloFullStackJava",slide:1,col:1},{id:"CienciaVentas",title:"Ciencia de Ventas",img:"assets/img/CienciaVentas.jpg",type:"modal",modalTitle:"Ciencias de las ventas",certHref:"assets/certificados/CienciaVentas.pdf",download:"CienciasDeVentas",slide:1,col:1},{id:"HTML5",title:"HTML5 y CSS",img:"assets/img/HTML5.jpg",type:"modal",modalTitle:"HTML5 y CSS",certHref:"assets/certificados/Certificado HTML5 CSS3.pdf",download:"HTML5 y CSS Jesus Seiler",slide:1,col:1},{id:"Inversiones",title:"Inversiones",img:"assets/img/InversionesIngles.png",type:"modal",modalTitle:"Inversiones en Ingles BC",certHref:"assets/certificados/InversionesIngles.pdf",download:"Inversiones Ingles Jesus Seiler",slide:1,col:1},{id:"LiderazgoEfectivo",title:"Liderazgo Efectivo",img:"assets/img/LiderazgoEfectivo.png",type:"modal",modalTitle:"Liderazgo Efectivo",certHref:"assets/certificados/LiderazgoEfectivo.pdf",download:"Liderazgo Efectivo",slide:1,col:1},{id:"FCJavaScript",title:"JavaScript Algorithms and Data Structures",img:"assets/certificados/FCJavaScriptAlgorithm.png",type:"link",url:"https://www.freecodecamp.org/certification/ichbinseiler/javascript-algorithms-and-data-structures",slide:1,col:1},{id:"OCI",title:"OCI Foundations",img:"assets/certificados/OCICertificado.png",type:"link",url:"https://catalog-education.oracle.com/pls/certview/sharebadge?id=0EE370D017FDDE5093D72D0FAAA09E4B5AD04E6D9E4E32BFFC3537ECDA237F0B",slide:1,col:1},{id:"HPCiberseguridad",title:"Fundamentos de Ciberseguridad",img:"assets/certificados/HPCiberseguridad.png",type:"modal",modalTitle:"Fundamentos de Ciberseguridad",certHref:"assets/certificados/HPCiberseguridad.pdf",download:"HPCiberseguridad",slide:1,col:1}];function A(e){return e.type==="link"?`<button type="button" class="btn btn-outline-info" onclick="window.open('${e.url}','_blank')">Ver Certificado</button>`:`<button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#${e.id}">Ver Certificado</button>`}function w(e){return e.type==="link"?"":`
    <div class="modal fade" id="${e.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">${e.modalTitle}</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <a href="${e.certHref}" target="_blank" download="${e.download}">
              <img class="img-fluid mb-3" src="${e.img}" alt="${e.title}">
            </a>
            <p><b>Presione imagen para descargar el certificado</b></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `}function m(e){return`
    <img class="card-img-top" src="${e.img}" alt="${e.title}">
    <div class="card-body">
      <h6 class="card-title text-center"><b>${e.title}</b></h6>
      <div class="text-center">${A(e)}</div>
    </div>
  `}function I(){const e=[...new Set(r.map(s=>s.slide))].length,a=[];for(let s=0;s<e;s++){const i=r.filter(o=>o.slide===s&&o.col===0),t=r.filter(o=>o.slide===s&&o.col===1);a.push(`
      <div class="carousel-item ${s===0?"active":""}">
        <div class="card-deck">
          <div class="card">${i.map(m).join("")}</div>
          <div class="card">${t.map(m).join("")}</div>
        </div>
      </div>
    `)}const l=r.map(w).join("");return`
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
            ${a.join("")}
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

    ${l}
  `}function k(){return`
    <section id="contact">
      <div class="container-footer text-light">
        <footer class="text-center my-5 text-light" id="footer">
          <h1 class="font-weight-bold">Mis redes sociales</h1>
          <p>
            <a href="https://www.facebook.com/IchBinSeiler" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook"></i> <span>Facebook&nbsp;</span>
            </a>
            <a href="https://www.twitter.com/Ich_BinSeiler" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter"></i> <span>Twitter&nbsp;</span>
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/ichbinseiler" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i> <span>Instagram&nbsp;</span>
            </a>
            <a href="https://gitlab.com/seiler18" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-gitlab"></i> <span>Gitlab&nbsp;</span>
            </a>
          </p>
          <a href="https://github.com/seiler18" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> <span>Github&nbsp;</span>
          </a>
          <a href="https://www.linkedin.com/in/ichbinseiler/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i> <span>LinkedIn&nbsp;</span>
          </a>
          <br>
          <a href="https://api.whatsapp.com/send?phone=+56953292612" target="_blank" rel="noopener noreferrer">
            <span>Contactar via WhatsApp&nbsp;</span>
            <i class="fab fa-whatsapp fa-2x"></i>
          </a>
          <p>
            <a href="mailto:ichbinseiler@gmail.com" target="_blank">
              <span>Contactar por Gmail&nbsp;</span>
              <i class="fab fa-google fa-2x"></i>
            </a>
          </p>
          <p>©Jesús Seiler 2025. Todos los derechos reservados.</p>
        </footer>
      </div>
    </section>
  `}const x=document.getElementById("app");x.innerHTML=g()+f()+v()+C()+S()+I()+k();b();$("#Conocimiento").hide();$("#Ocultar3").on("click",()=>$("#Conocimiento").toggle());$("#mostrarConocimiento").on("click",()=>$("#Conocimiento").toggle());$("#Experiencia").hide();$("#Ocultar2").on("click",()=>$("#Experiencia").toggle());$("#mostrarExperiencia").on("click",()=>$("#Experiencia").toggle());$("#Certificados").hide();$("#Ocultar").on("click",()=>$("#Certificados").toggle());$("#mostrarCertificados").on("click",()=>$("#Certificados").toggle());$("#carta-trabajo").hide();$("#OcultarCartaTrabajo").on("click",()=>$("#carta-trabajo").toggle());$("#certificados-nestle").hide();$("#OcultarCertificadosNestle").on("click",()=>$("#certificados-nestle").toggle());
