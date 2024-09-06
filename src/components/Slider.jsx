import React, { useEffect, useState } from 'react'
import { sliderData } from '../loadPhotos'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'
import './Slider.css'
import LoadingImage from './LoadingImage'
 
const Slider = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [firstRender, setFirstRender] = useState(true)
  const [forwardSwipe, setForwardSwipe] = useState(false)
  const [showArrows, setShowArrows] = useState(false)
  const [isButtonActive, setIsButtonActive] = useState(true) 
  const [loadingImages, setLoadingImages] = useState(true)

  useEffect(() => {
    setLoadingImages(true)
    const timer = setTimeout(() => {
      setLoadingImages(false)
    }, 1000)
  
    return () => clearTimeout(timer)
  }, [])

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
    <div onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)} className='w-full h-auto bg-black select-none overflow-hidden flex justify-center items-center'>
      <div className='duration-300 aspect-video md:aspect-[5/2] xl:aspect-[10/4] relative flex justify-center items-center w-full max-w-[1920px] max-h-[600px] overflow-hidden'>  
        <div className={`${showArrows ? 'opacity-100' : 'opacity-0'} h-8 w-8 md:w-10 md:h-10 bg-white absolute top-[calc(50%-20px)] left-4 md:left-8 lg:left-16 rounded-full z-[100] duration-300 text-slate-400 hover:text-[#5e5e5e] cursor-pointer text-3xl`}>
          <MdOutlineNavigateBefore onClick={() => handleSlideDirection(false)} className='w-full h-full text-center' />
        </div>
        <div className={`${showArrows ? 'opacity-100' : 'opacity-0'} h-8 w-8 md:w-10 md:h-10 bg-white absolute top-[calc(50%-20px)] right-4 md:right-8 lg:right-16 rounded-full z-[100] duration-300 text-slate-400 hover:text-[#5e5e5e] cursor-pointer text-3xl`}>
          <MdOutlineNavigateNext onClick={() => handleSlideDirection(true)} className='w-full h-full text-center' />
        </div>

        <div className='w-full aspect-video relative max-w-[1280px]'>
          {
            sliderData.map((item, key) =>  (
                <div key={key} className={`${currentSlide === key ? (firstRender ? 'landing-slide' : (forwardSwipe ? 'enter-slide' : 'reverse-enter-slide')) : (prevSlide === key ? (forwardSwipe ? 'leave-slide' : 'reverse-leave-slide') : 'opacity-0')} h-full w-full absolute overflow-hidden`}>
                  {loadingImages && <LoadingImage />} 
                  <img src={item.path} alt={item.alt} className='w-full h-full object-cover duration-300' />
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Slider