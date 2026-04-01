
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Digital from './Components/Digital'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import ProductSection from './Components/ProductSection'
import Ready from './Components/Ready'
import Stats from './Components/Stats'
import StepsSection from './Components/StepsSection'
import { Suspense, useState } from 'react'


const getCard = async () => {
  const res = await fetch('/data.json')
  return res.json();
}

const dataPromise = getCard();

function App() {

  const [activeTab, setActiveTab] = useState('products')

  const [cart, SetCart] = useState([])

  return (
    <>

      <Navbar cart={cart} />
      <Banner />
      <Stats />

      <Digital activeTab={activeTab} setActiveTab={setActiveTab} cart={cart} />


      {
        activeTab === "products" ?

          <div>
            <Suspense fallback={<div className='flex justify-center'><span className=" loading loading-spinner loading-xl"></span></div>}>
              <ProductSection cart={cart} SetCart={SetCart} dataPromise={dataPromise} />
            </Suspense>

            <StepsSection />
            <Pricing />
            <Ready />

          </div>
          : <Cart cart={cart} SetCart={SetCart} />
      }



      <Footer />

      <ToastContainer />

    </>
  )
}

export default App
