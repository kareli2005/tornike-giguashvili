import React, { useEffect, useState } from 'react'
import { sliderData } from '../loadAssets'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'
import './Slider.css'
 
const Slider = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [firstRender, setFirstRender] = useState(true)
  const [forwardSwipe, setForwardSwipe] = useState(false)
  const [showArrows, setShowArrows] = useState(false)
  const [isButtonActive, setIsButtonActive] = useState(true) 

  const handleSlideDirection = (bool) => {
    if (!isButtonActive) return

    setFirstRender(false)
    setPrevSlide(currentSlide)
    bool? setForwardSwipe(true) : setForwardSwipe(false)
    bool? setCurrentSlide(prev => (prev + 1) % sliderData.length) : setCurrentSlide(prev => (prev - 1 + sliderData.length) % sliderData.length)

    setIsButtonActive(false)
    setTimeout(() => {
      setIsButtonActive(true)
    }, 1000)
  }

  return (
    <div 
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
      className='w-full max-h-[500px] lg:max-h-[80vh] duration-300 aspect-video bg-black relative flex justify-center items-center'>

      {/* navigation */}
      <div className={`${showArrows ? 'opacity-100' : 'opacity-0'} h-10 w-10 bg-white absolute top-[calc(50%-20px)] left-4 md:left-8 lg:left-16 rounded-full z-[100] duration-300 text-slate-400 hover:text-[#5e5e5e] cursor-pointer text-3xl`}>
        <MdOutlineNavigateBefore onClick={() => handleSlideDirection(false)} className='w-full h-full text-center' />
      </div>
      <div className={`${showArrows ? 'opacity-100' : 'opacity-0'} h-10 w-10 bg-white absolute top-[calc(50%-20px)] right-4 md:right-8 lg:right-16 rounded-full z-[100] duration-300 text-slate-400 hover:text-[#5e5e5e] cursor-pointer text-3xl`}>
        <MdOutlineNavigateNext onClick={() => handleSlideDirection(true)} className='w-full h-full text-center' />
      </div>

      {/* slider */}
      <div className='w-full h-full flex justify-center items-center relative overflow-hidden'>
        {
          sliderData.map((item, key) =>  (
              <div key={key} className={`${currentSlide === key ? (firstRender ? 'landing-slide' : (forwardSwipe ? 'enter-slide' : 'reverse-enter-slide')) : (prevSlide === key ? (forwardSwipe ? 'leave-slide' : 'reverse-leave-slide') : 'opacity-0')} h-full w-full absolute`}>
                <img className='h-full w-full object-cover' src={item.path} alt={item.name} />
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Slider