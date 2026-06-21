const logos = [
  {
    href: "https://seiler18.github.io/Curriculo/",
    img: "assets/img/LOGO JESUS SEILER.png",
    alt: "LogoJesusSeiler",
    cls: "logo",
  },
  {
    href: "https://www.youracclaim.com/badges/5c3ed424-4321-4dfa-b1c5-ec322c126595/embedded",
    img: "assets/img/logojava.png",
    alt: "Logo de Java - Certificación",
    cls: "logo2",
  },
  {
    href: "https://www.acreditta.com/credential/4476ddea-f09c-4e5b-93fa-e36f8cba5cb5",
    img: "assets/img/logodevops.webp",
    alt: "Logo de Fundamentos DevOps - Certificación",
    cls: "logo2",
  },
  {
    href: "https://www.acreditta.com/credential/9f3cf4aa-bd57-42ad-93ca-04ddf485d019",
    img: "assets/img/Salesforce.webp",
    alt: "Ver Insignia de certificación",
    cls: "logo2",
  },
  {
    href: "https://www.acreditta.com/credential/554fe7be-7150-43cb-8857-58be35c30b06",
    img: "assets/img/Voluntarios.webp",
    alt: "Ver Insignia de certificación",
    cls: "logo2",
  },
  {
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0EE370D017FDDE5093D72D0FAAA09E4B5AD04E6D9E4E32BFFC3537ECDA237F0B",
    img: "assets/img/OCI.png",
    alt: "Logo de OCI - Certificación",
    cls: "logo2",
  },
  {
    href: "https://acreditta.com/credential/09287278-a942-43df-aff2-141183913973?utm_source=copy&resource_type=badge&resource=09287278-a942-43df-aff2-141183913973",
    img: "assets/img/22301.webp",
    alt: "Logo de Auditor Interno 22301 - Certificación",
    cls: "logo2",
  },
  {
    href: "https://acreditta.com/credential/ad647a01-5241-4a19-82a6-f6aa62729776?utm_source=copy&resource_type=badge&resource=ad647a01-5241-4a19-82a6-f6aa62729776",
    img: "assets/img/20000-1.webp",
    alt: "Logo de Auditor Interno 20000-1 - Certificación",
    cls: "logo2",
  },
];

export function renderHero() {
  const logoItems = logos
    .map(l => `
      <div class="logo-item">
        <a href="${l.href}" target="_blank" rel="noopener noreferrer">
          <img class="${l.cls}" src="${l.img}" alt="${l.alt}">
        </a>
      </div>
    `)
    .join('')

  return `
    <header class="text-light pt-5 mt-5">
      <div class="container">
        <div class="logos-container">
          <div class="logos-carousel">
            ${logoItems}
          </div>
          <button class="carousel-button prev">←</button>
          <button class="carousel-button next">→</button>
        </div>
        <h2 class="display-3 font-weight-bold text-center header-section1 my-4"
          data-aos="fade-up" data-aos-delay="150">
          Innovar es la clave del éxito
        </h2>
        <div class="text-center" data-aos="fade-up" data-aos-delay="300">
          <button type="button" id="mostrarProyectos" class="mt-5 btn btn-dark">
            <a href="./ejemplos_index.html">
              <p class="conocimientos text-light my-4">
                Proyectos realizados aplicando los distintos conocimientos
              </p>
            </a>
          </button>
        </div>
      </div>
    </header>
  `
}

export function initHero() {
  const carousel = document.querySelector('.logos-carousel')
  const prevButton = document.querySelector('.carousel-button.prev')
  const nextButton = document.querySelector('.carousel-button.next')
  if (!carousel || !prevButton || !nextButton) return

  const itemWidth = carousel.querySelector('.logo-item').offsetWidth + 20

  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' })
  })
  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: itemWidth, behavior: 'smooth' })
  })
}
