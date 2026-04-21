import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Sobre from './components/Sobre.tsx'
import Atividades from './components/Atividades.tsx'
import Galeria from './components/Galeria.tsx'
import ComoEntrar from './components/ComoEntrar.tsx'
import Contato from './components/Contato.tsx'
import Footer from './components/Footer.tsx'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Atividades />
      <Galeria />
      <ComoEntrar />
      <Contato />
      <Footer />
    </>
  )
}

export default App