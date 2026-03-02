
import './App.css'
import Hero from './components/Hero'
import { person } from './services/data'

function App() {

  return (
    <>
      <Hero person={person} />
    </>
  )
}

export default App
