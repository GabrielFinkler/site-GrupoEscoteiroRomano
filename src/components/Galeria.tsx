import { useEffect } from 'react'
import { INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../instagram-posts'

declare global {
  interface Window {
    __bhldScript?: boolean
  }
}

// Criamos um componente wrapper para evitar o erro do TypeScript com custom elements
const BeholdWidget = 'behold-widget' as any;

export default function Galeria() {
  useEffect(() => {
    if (window.__bhldScript) return
    window.__bhldScript = true
    const d = document, s = d.createElement('script')
    s.type = 'module'
    s.src = 'https://w.behold.so/widget.js'
    setTimeout(() => {
      d.head.append(s)
    }, 0)
  }, [])

  return (
    <section id="galeria" className="galeria">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Fotos</span>
          <h2>Veja o Escotismo em Ação</h2>
          <p>Acampamentos, trilhas, projetos e desafios fazem parte da nossa história, 
            confira um pouco do que vivemos juntos e acompanhe nossas aventuras pelo instagram!</p>
        </div>

        <div className="galeria-behold" style={{ margin: '3rem 0' }}>
          <BeholdWidget feed-id="ILkIU9IXQxYCUdZoTaQD"></BeholdWidget>
        </div>

        <div className="galeria-cta">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-btn"
          >
            📷 Seguir {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  )
}