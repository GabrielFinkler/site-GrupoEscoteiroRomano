import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header>
      <div className="header-inner">
        <div className="logo">
          <img src="/logo.png" alt="Logo GE Romano" className="logo-img" />
          <h1>GE Romano 350/RS</h1>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? 'open' : ''}>
          <a href="#inicio" onClick={handleLinkClick}>Início</a>
          <a href="#sobre" onClick={handleLinkClick}>Sobre</a>
          <a href="#atividades" onClick={handleLinkClick}>Atividades</a>
          <a href="#galeria" onClick={handleLinkClick}>Galeria</a>
          <a href="#contato" onClick={handleLinkClick}>Contato</a>
          <a href="#contato" className="cta-nav" onClick={handleLinkClick}>Participar</a>
        </nav>
      </div>
    </header>
  )
}