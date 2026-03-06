
import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'
import { person, services } from './services/data'

function App() {

  return (
    <>
      <Hero person={person} />
      <Services services={services} />
    </>
  )
}

export default App
