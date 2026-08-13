export default function Ramos() {
  const ramos = [
    {
      nome: 'Alcateia Apennine',
      idade: '6,5 a 10 anos',
      descricao: 'Onde a aventura começa. Por meio de brincadeiras, histórias e jogos, os lobinhos desenvolvem curiosidade, amizade e cooperação.',
      imagem: '/alcateia.png',
      link: 'https://www.escoteiros.org.br/ramo-lobinho/'
    },
    {
      nome: 'Tropa Escoteira Centúria',
      idade: '11 a 14 anos',
      descricao: ' Explorar, aprender e superar desafios. Através do contato com a natureza, sistema de patrulhas e aventura, os escoteiros aprendem habilidades, autonomia e compromisso.',
      imagem: '/escoteira.png',
      link: 'https://www.escoteiros.org.br/ramo-escoteiro/'
    },
    {
      nome: 'Tropa Sênior Coliseu',
      idade: '15 a 17 anos',
      descricao: 'Momentos que inspiram crescimento. Por meio de expedições, expêriencia e desafios, os sêniores ampliam sua responsabilidade, liderança e confiança.',
      imagem: '/senior.png',
      link: 'https://www.escoteiros.org.br/ramo-senior/'
    },
    {
      nome: 'Clã Pioneiro Pantheon',
      idade: '18 a 21 anos',
      descricao: 'Servir, liderar e transformar. Através de projetos, voluntariado e ações na comunidade, os pioneiros desenvolvem protagonismo, independência e maturidade.',
      imagem: '/cla.png',
      link: 'https://www.escoteiros.org.br/ramo-pioneiro/'
    }
  ]

  return (
    <section id="ramos" className="ramos">
      <div className="container">
        <div className="section-header">
          <h2>Ramos do Escotismo</h2>
          <p>As atividades são organizadas por faixas etárias, respeitando as necessidades, interesses e desafios de cada fase da vida para oferecer experiências adequadas ao desenvolvimento de cada um.</p>
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
