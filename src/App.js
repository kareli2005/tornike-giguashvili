import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Gallery from './components/Gallery'
import Footer from './components/Footer'



const App = () => {

  return (
    <div className='w-full h-auto min-h-screen overflow-y-auto bg-white font-mono select-none'>
      <Header />
      <Slider />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App