import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Products } from './components/products'
import { About } from './components/about'
import { Gallery } from './components/gallery'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Contact } from './components/contact'
import { MissionVision } from './components/missionvision'
import { Stores } from './components/stores'
import { WhatsAppButton } from './components/whatsappbutton'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Stores />
      <About data={landingPageData.About} />
      <MissionVision data={landingPageData.MissionVision} />
      <Products data={landingPageData.Products} />
      <Gallery />
      <Contact data={landingPageData.Contact} />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
