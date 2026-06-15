export function renderFooter() {
  return `
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
            <a href="mailto:ichbinseiler@gmail.com" target="_blank" rel="noopener noreferrer">
              <span>Contactar por Gmail&nbsp;</span>
              <i class="fab fa-google fa-2x"></i>
            </a>
          </p>
          <p>©Jesús Seiler ${new Date().getFullYear()}. Todos los derechos reservados.</p>
        </footer>
      </div>
    </section>
  `
}
