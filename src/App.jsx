
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Portfolio from './components/portfolio'
import Propos from './components/Propos'
import Services from './components/Services'
import { categoriesSections, person, services } from './services/data'

function App() {

  return (
    <>
      <Hero person={person} />
      <Services services={services} />
      <Portfolio categories={categoriesSections} />
      <Propos />
      <Contact person={person} />
      <Footer person={person} /> 
    </>
  )
}

export default App
