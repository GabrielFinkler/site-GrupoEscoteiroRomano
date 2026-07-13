import { useEffect } from 'react'
import { INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../instagram-posts'

export default function Galeria() {
  useEffect(() => {
    // Carrega o script de embed do RSS.app
    const script = document.createElement('script')
    script.src = 'https://widget.rss.app/v1/imageboard.js'
    script.async = true
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="galeria" className="galeria">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Fotos</span>
          <h2>Nossa Galeria</h2>
          <p>Acompanhe nossos momentos mais recentes pelo Instagram</p>
        </div>

        <div className="galeria-widget" style={{ minHeight: '436px' }}>
          <div dangerouslySetInnerHTML={{ __html: '<rssapp-imageboard id="qJpwaPhtsy68OnWB"></rssapp-imageboard>' }} />
        </div>

        <div className="galeria-cta" style={{ marginTop: '40px' }}>
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