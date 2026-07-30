export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <article className="sobre-grid">
          <div className="sobre-text">
            <span className="section-tag">Quem somos</span>
            <h2>Grupo Escoteiro Romano 350/RS</h2>
            <p>
              O Grupo Escoteiro Romano 350/RS é um grupo escoteiro de Porto Alegre
              dedicado ao desenvolvimento de jovens através de atividades ao ar livre,
              liderança e trabalho em equipe no bairro Jardim Itu.
            </p>
            <p>
              Baseados nos valores do Movimento Escoteiro mundial e vinculados aos
              Escoteiros do Brasil, formamos cidadãos conscientes, responsáveis e
              prontos para contribuir com a sociedade gaúcha.
            </p>
            <div className="sobre-stats" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Anos de história</span>
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