import './App.css'
import { business } from "./config/business"
import { Hero } from "./sections/Hero"
import { Trust } from './sections/Trust'
import { Services } from './sections/Services'
import { FinalCTA } from './sections/FinalCTA'

function App() {

  return (
    <>
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


    </>
  )
}

export default App
