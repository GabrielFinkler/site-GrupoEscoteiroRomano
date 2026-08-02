export default function Ramos() {
  const ramos = [
    {
      nome: 'Alcateia Apennine',
      idade: '6,5 a 10 anos',
      descricao: 'Onde a aventura começa! Aprender brincando em um ambiente inspirado nas histórias do Livro da Selva.',
      imagem: '/alcateia.png',
      link: 'https://www.escoteiros.org.br/ramo-lobinho/'
    },
    {
      nome: 'Tropa Escoteira Centúria',
      idade: '11 a 14 anos',
      descricao: 'Vida ao ar livre, acampamentos, sistema de patrulhas e o desenvolvimento do espírito de equipe.',
      imagem: '/escoteira.png',
      link: 'https://www.escoteiros.org.br/ramo-escoteiro/'
    },
    {
      nome: 'Tropa Sênior Coliseu',
      idade: '15 a 17 anos',
      descricao: 'Desafios físicos e mentais, superação de limites e atividades de grande aventura.',
      imagem: '/senior.png',
      link: 'https://www.escoteiros.org.br/ramo-senior/'
    },
    {
      nome: 'Clã Pioneiro Pantheon',
      idade: '18 a 22 anos',
      descricao: 'Foco no serviço ao próximo, projetos solidários e preparação ativa para a vida adulta.',
      imagem: '/cla.png',
      link: 'https://www.escoteiros.org.br/ramo-pioneiro/'
    }
  ]

  return (
    <section id="ramos" className="ramos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Faixas Etárias</span>
          <h2>Ramos do Escotismo</h2>
          <p>O Movimento Escoteiro é dividido por faixas etárias para garantir que as atividades sejam perfeitas para o desenvolvimento de cada jovem.</p>
        </div>

        <div className="ramos-grid">
          {ramos.map((ramo, i) => (
            <a href={ramo.link} target="_blank" rel="noopener noreferrer" className="ramo-card" key={i}>
              <div className="ramo-imagem">
                <img src={ramo.imagem} alt={`Logo ${ramo.nome}`} />
              </div>
              <h3>{ramo.nome}</h3>
              <span className="ramo-idade">{ramo.idade}</span>
              <p className="ramo-desc">{ramo.descricao}</p>
            </a>
          ))}
        </div>

        <div className="baden-powell-quote">
          <div className="quote-content">
            <p className="quote-text">Não há ensino que se<br/>compare ao exemplo.</p>
            <img src="/assinatura-bp.png" alt="Assinatura Baden Powell of Gilwell" className="bp-signature" />
          </div>
        </div>
      </div>
    </section>
  )
}
