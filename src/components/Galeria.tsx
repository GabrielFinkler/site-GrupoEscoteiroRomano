import { useEffect } from 'react'
import { POSTS, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../instagram-posts'

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export default function Galeria() {
  useEffect(() => {
    const scriptId = 'instagram-embed-script'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    } else {
      window.instgrm?.Embeds.process()
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

        <div className="galeria-grid">
          {POSTS.map((postUrl, index) => (
            <div key={index} className="galeria-embed">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={postUrl}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  margin: '0',
                  padding: 0,
                  minWidth: '100%',
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