import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Contato() {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')

  const whatsappNumber = '5551936183496' // Trocar pelo número real do grupo

  const handleWhatsApp = (e: FormEvent) => {
    e.preventDefault()
    const text = `Olá! Meu nome é ${nome}. ${mensagem}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Fale conosco</span>
          <h2>Contato</h2>
          <p>Tem alguma dúvida? Entre em contato com a gente!</p>
        </div>
        <div className="contato-grid">
          <address className="contato-info">
            <a 
              href="mailto:350rs@escoteiros.org.br"
              className="contato-item"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="contato-item-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>350rs@escoteiros.org.br</p>
              </div>
            </a>
            <div className="contato-item">
              <div className="contato-item-icon">📱</div>
              <div>
                <h4>WhatsApp</h4>
                <p>(51) 93618-3496</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Rua+Noel+Rosa,+225,+Jardim+Itu,+Porto+Alegre+-+RS,+91210-110" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contato-item"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="contato-item-icon">📍</div>
              <div>
                <h4>Localização</h4>
                <p>Rua Noel Rosa, 225. Colégio Romano Senhor Bom Jesus - Jardim Itu, Porto Alegre - RS, 91210-110.</p>
              </div>
            </a>
            <div className="contato-item">
              <div className="contato-item-icon">🕐</div>
              <div>
                <h4>Atividades</h4>
                <p>Sábados, das 14h às 17h.</p>
              </div>
            </div>
          </address>

          <form className="contato-form" onSubmit={handleWhatsApp}>
            <h3>Envie uma mensagem</h3>
            <div className="form-group">
              <label htmlFor="nome">Seu nome</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                placeholder="Escreva sua mensagem..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-whatsapp">
              💬 Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}