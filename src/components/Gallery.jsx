import React, { useEffect, useState, useRef } from 'react'
import { imagesData } from '../loadAssets'
import './Gallery.css'

const Gallery = () => {
  const [category, setCategory] = useState('all')
  const [numOfImages, setNumOfImages] = useState(20)
  const imageRefs = useRef([])

  const filteredImages = category === 'all' 
    ? imagesData.slice(0, numOfImages) 
    : imagesData.filter(item => item.category === category).slice(0, numOfImages)

  useEffect(() => {
    setNumOfImages(20)
  }, [category])

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight
          if (isVisible) {
            ref.classList.add('enter-animation')
          }
        }
      })
    }

    imageRefs.current.forEach(ref => {
      if (ref) {
        ref.classList.remove('enter-animation')
      }
    })

    window.addEventListener('scroll', handleScroll)
    handleScroll() 

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [filteredImages])

  useEffect(() => {
    imageRefs.current.forEach(ref => {
      if (ref) {
        ref.classList.remove('enter-animation')
      }
    })

    setTimeout(() => {
      window.dispatchEvent(new Event('scroll'))
    }, 100)
  }, [category])

  const handleImageClick = (path, e) => {
    const parentOpacity = window.getComputedStyle(e.currentTarget.parentElement).opacity
    if (parentOpacity === '1') {
      window.open(path, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div id='gallery' className='w-full h-auto bg-gray-950 text-slate-400 flex flex-col items-center justify-start pt-8'>
      <div className='flex flex-col justify-center items-center gap-4 p-4 md:p-8 max-w-[1024px]'>
        <h1 className='text-2xl leading-[27px] sm:text-4xl sm:leading-[35px] md:text-[54px] md:leading-[56px] text-slate-200 text-center uppercase'>
          Welcome To Gallery
        </h1>
        <p className='uppercase text-xs md:text-xl md:leading-[22px] text-center'>
          Most popular Photos by me
        </p>
      </div>
      
      <div className='w-full flex justify-center p-4'>
        <div className='h-[2px] w-1/2 md:w-1/3 bg-slate-400' />
      </div>

      <div className='w-full max-w-[1280px] py-4 md:py-8 px-4 flex flex-col gap-4 md:gap-8 justify-center items-center md:px-8 xl:px-0 duration-300'>
        <div className='text-xs md:text-sm lg:text-base w-full flex flex-wrap justify-start items-center gap-2 md:gap-4'>
          <button
            onClick={() => setCategory('all')} 
            className={`${category === 'all' ? 'border-white text-white font-bold' : 'border-slate-400'} duration-300 hover:border-white hover:text-white cursor-pointer uppercase px-4 py-2 border rounded-md`}>
              all
          </button>
          <button
            onClick={() => setCategory('portrait')} 
            className={`${category === 'portrait' ? 'border-white text-white font-bold' : 'border-slate-400'} duration-300 hover:border-white hover:text-white cursor-pointer uppercase px-4 py-2 border rounded-md`}>
              portrait
          </button>
          <button
            onClick={() => setCategory('wedding')} 
            className={`${category === 'wedding' ? 'border-white text-white font-bold' : 'border-slate-400'} duration-300 hover:border-white hover:text-white cursor-pointer uppercase px-4 py-2 border rounded-md`}>
              wedding
          </button>
          <button
            onClick={() => setCategory('family')} 
            className={`${category === 'family' ? 'border-white text-white font-bold' : 'border-slate-400'} duration-300 hover:border-white hover:text-white cursor-pointer uppercase px-4 py-2 border rounded-md`}>
              family
          </button>
        </div>

        <div className='images-container text-xs md:text-sm lg:text-base'>
          {filteredImages.length === 0 ? (
            <div className='w-full col-span-full flex justify-center items-center py-10 md:py-20 lg:py-30 xl:py-40 uppercase text-xs md:text-xl duration-300'>
              No Images To Show
            </div>
          ) : (
            filteredImages.map((item, key) => (
              <div 
                key={key} 
                ref={el => (imageRefs.current[key] = el)}
                className='image-div relative opacity-0'>
                <div className='bg-gray-950 bg-opacity-70 image-hover-div'>
                  <button
                    onClick={(e) => handleImageClick(item.path, e)} 
                    className='duration-300 hover:border-white hover:text-white border-slate-400 uppercase px-4 py-2 border rounded-md'>
                      view original size
                  </button>
                </div>
                <img className='object-cover w-full h-full rounded-md duration-300' src={item.path} alt={item.name} />
              </div>
            ))
          )}
        </div>

        {
          numOfImages <= filteredImages.length ? 
            <button onClick={() => setNumOfImages(prev => prev + 20)} className='hover:text-white duration-300 my-4 md:my-8 text:sm md:text-lg'>
              see more...
            </button>
            : numOfImages > 20 &&
              <button onClick={() => setNumOfImages(20)} className='hover:text-white duration-300 my-4 md:my-8 text:sm md:text-lg'>
                show less
              </button>
        }
      </div>
    </div>
  )
}

export default Gallery
