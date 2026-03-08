
import './App.css'
import Hero from './components/Hero'
import Portfolio from './components/portfolio'
import Services from './components/Services'
import { categoriesSections, person, services } from './services/data'

function App() {

  return (
    <>
      <Hero person={person} />
      <Services services={services} />
      <Portfolio categories={categoriesSections} />
      <Services services={services} />
    </>
  )
}

export default App
