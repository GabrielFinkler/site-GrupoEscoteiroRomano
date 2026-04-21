export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <img src="/logo.png" alt="Logo GE Romano" className="hero-logo" />
        <div className="hero-badge">⚜️ Grupo Escoteiro Romano 350/RS</div>
        <h2>
          Formando jovens<br />
          <span className="highlight">para a vida</span>
        </h2>
        <p>Aventura, amizade e aprendizado. Há mais de 50 anos construindo caráter e cidadania.</p>
        <div className="hero-buttons">
          <a href="#contato" className="btn btn-primary">Quero participar</a>
          <a href="#sobre" className="btn btn-secondary">Conheça o grupo</a>
        </div>
      </div>
    </section>
  )
}