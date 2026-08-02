export default function Hero() {
  return (
    <main>
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1 className="sr-only">Grupo Escoteiro Romano 350/RS</h1>
          <img src="/logo.png" alt="Logo do Grupo Escoteiro Romano 350/RS - Flor de Lis" className="hero-logo" />

          <h2>
            <span className="highlight">Grupo Escoteiro Romano</span>
          </h2>
          <p>Aventura, amizade e aprendizado. Há mais de 5 anos construindo caráter e cidadania em Porto Alegre.</p>
          <div className="hero-buttons">
            <a href="#contato" className="btn btn-primary">Quero participar</a>
            <a href="#sobre" className="btn btn-secondary">Conheça o grupo</a>
          </div>
        </div>
      </section>
    </main>
  )
}