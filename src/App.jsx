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
      <About data={landingPageData.About} />
      <Products data={landingPageData.Products} />
      <Gallery />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  )
}

export default App
