import { useEffect, useRef } from 'react'
import { INSTAGRAM_POSTS, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../instagram-posts'

export default function Galeria() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Carrega o script de embed do Instagram
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="galeria" className="galeria">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Fotos</span>
          <h2>Nossa Galeria</h2>
          <p>Acompanhe nossos momentos pelo Instagram</p>
        </div>

        <div className="galeria-grid" ref={containerRef}>
          {INSTAGRAM_POSTS.map((url, i) => (
            <div className="galeria-embed" key={i}>
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  margin: 0,
                  maxWidth: '100%',
                  width: '100%',
                  padding: 0,
                }}
              />
            </div>
          ))}
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