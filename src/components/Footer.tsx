import { INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../instagram-posts'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>
              <img src="/logo.png" alt="Logo" className="footer-logo" />
              GE Romano 350/RS
            </h3>
            <p>
              Formando jovens para a vida através do escotismo.
              Aventura, amizade e aprendizado desde sempre.
            </p>
          </div>
          <div className="footer-links">
            <h4>Navegação</h4>
            <nav aria-label="Navegação do rodapé">
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#ramos">Seções</a></li>
                <li><a href="#galeria">Galeria</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a
                href={INSTAGRAM_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Grupo Escoteiro Romano 350/RS — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}