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
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#atividades">Atividades</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/escoteirosromano"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                📷
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