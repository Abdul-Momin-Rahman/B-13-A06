import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Ready from './Components/Ready'
import Stats from './Components/Stats'
import StepsSection from './Components/StepsSection'


function App() {

  return (
    <>

      <Navbar />
      <Banner />
      <Stats />


      <StepsSection/>
      <Pricing/>
      <Ready/>
      <Footer/>

    </>
  )
}

export default App
