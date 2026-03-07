import { Routes, Route } from 'react-router-dom'
import './App.css'
import { business } from "./config/business"
import { Hero } from "./sections/Hero"
import { Trust } from './sections/Trust'
import { Services } from './sections/Services'
import { FinalCTA } from './sections/FinalCTA'
import DatosBancarios from './pages/DatosBancarios'

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <div className=''>
          <Hero
            title={business.hero.title}
            subtitle={business.hero.subtitle}
            phone={business.contact.phone}
            message={business.contact.trackingMessages.instant}
          />
          <Trust />
          <Services />
          <FinalCTA phone={business.contact.phone}
            message={business.contact.trackingMessages.instant} />
        </div>
      } />
      <Route path="/datos-bancarios" element={<DatosBancarios />} />
    </Routes>
  )
}

export default App
