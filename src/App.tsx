import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Sobre from './components/Sobre.tsx'
import Ramos from './components/Ramos.tsx'
import Galeria from './components/Galeria.tsx'
import ComoEntrar from './components/ComoEntrar.tsx'
import Contato from './components/Contato.tsx'
import Footer from './components/Footer.tsx'
import './index.css'
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Ramos />
      <Galeria />
      <ComoEntrar />
      <Contato />
      <Footer />
      <Analytics />
    </>
  )
}

export default App