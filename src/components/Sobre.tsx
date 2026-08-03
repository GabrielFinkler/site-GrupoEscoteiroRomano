export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <article className="sobre-grid">
          <div className="sobre-text">
            <h2>Quem somos</h2>
            <p>
              Há mais de cinco anos, por meio do método escoteiro, aplicamos um projeto 
              educativo que desenvolve crianças, 
              adolescentes e jovens para a vida. Através de uma 
              proposta baseada em desafios, experiências e aprendizado, 
              acreditamos que cada atividade é uma oportunidade para promover liderança, 
              responsabilidade, cuidado com a natureza e espírito de serviço à comunidade.
            </p>
            <p>
              Mais do que ensinar habilidades, buscamos formar pessoas autônomas, preparadas para fazer a diferença e contribuir com um mundo melhor!
            </p>
            <div className="sobre-stats" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Anos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Ramos</span>
              </div>
            </div>
          </div>
          <div className="sobre-image"></div>
        </article>
      </div>
    </section>
  )
}