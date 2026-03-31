import './App.css'
import Banner from './Components/Banner'
import Digital from './Components/Digital'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import ProductSection from './Components/ProductSection'
import Ready from './Components/Ready'
import Stats from './Components/Stats'
import StepsSection from './Components/StepsSection'
import { Suspense } from 'react'


const getCard = async () => {
  const res = await fetch('/data.json')
  return res.json();
}


function App() {

  const dataPromise = getCard();
  // console.log(Promise);

  return (
    <>

      <Navbar />
      <Banner />
      <Stats />

      <Digital />
      
      <Suspense  fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <ProductSection dataPromise={dataPromise}/>
      </Suspense>

      <StepsSection/>
      <Pricing/>
      <Ready/>
      <Footer/>

    </>
  )
}

export default App
