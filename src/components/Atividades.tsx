export default function Atividades() {
  const atividades = [
    {
      icon: '🏕️',
      titulo: 'Acampamento',
      data: '12-14 Maio',
      descricao: 'Acampamento de integração com atividades de sobrevivência e fogueira.'
    },
    {
      icon: '🥾',
      titulo: 'Trilha',
      data: '20 Maio',
      descricao: 'Trilha ecológica com foco em conservação ambiental e orientação.'
    },
    {
      icon: '🤝',
      titulo: 'Reunião Semanal',
      data: 'Todo sábado',
      descricao: 'Atividades educativas, jogos e desenvolvimento de habilidades.'
    },
  ]

  return (
    <section id="atividades" className="atividades">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Calendário</span>
          <h2>Próximas Atividades</h2>
          <p>Confira o que vem por aí no nosso grupo</p>
        </div>
        <div className="cards">
          {atividades.map((atv, i) => (
            <div className="card" key={i}>
              <span className="card-icon">{atv.icon}</span>
              <h3>{atv.titulo}</h3>
              <span className="card-date">📅 {atv.data}</span>
              <p className="card-desc">{atv.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}