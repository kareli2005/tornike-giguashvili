import React, { useEffect, useState } from 'react'
import { imagesData, categoriesData } from '../loadPhotos'
import './Gallery.css'
import LoadingImage from './LoadingImage'

const Gallery = () => {
  const [currentCategory, setCurrentCategory] = useState('all')
  const [loadingImages, setLoadingImages] = useState(false)
  const [numOfImages, setNumOfImages] = useState(20)
  const [lastLoadedIndex, setLastLoadedIndex] = useState(0)

  const filteredImages = currentCategory === 'all' 
    ? imagesData.slice(0, numOfImages) 
    : imagesData.filter(item => item.category === currentCategory).slice(0, numOfImages)

  useEffect(() => {
    setLoadingImages(true)
    const timer = setTimeout(() => {
      setLoadingImages(false)
    }, 300)
  
    return () => clearTimeout(timer)
  }, [currentCategory])

  useEffect(() => {
    const newImages = document.querySelectorAll('.gallery-image');
    newImages.forEach((img, index) => {
      if (index >= lastLoadedIndex) {
        img.classList.add('enter-image')
        setTimeout(() => {
          img.classList.remove('enter-image')
        }, 1000)
      }
    })
  }, [numOfImages, currentCategory])

  const handleImageClick = (path) => {
    window.open(path, '_blank', 'noopener,noreferrer')
  }

  const handleShowMore = () => {
    setLastLoadedIndex(numOfImages)
    setNumOfImages(prev => prev + 20)
  }

  return (
    <div className='w-full h-auto flex flex-col justify-start items-center py-4 md:py-8 border-slate-400 border-t'>
      <div className='w-full max-w-[1280px] flex justify-center items-center flex-col gap-4'>
        <h1 className='text-2xl leading-[27px] sm:text-4xl sm:leading-[35px] md:text-[54px] md:leading-[56px] text-slate-200 text-center uppercase'>
          Welcome To Gallery
        </h1>
        <p className='uppercase text-xs md:text-xl md:leading-[22px] text-center'>
          The most popular Photos by me
        </p>

        <div className='w-full flex justify-center'>
          <div className='h-[1px] w-1/2 md:w-full bg-slate-400' />
        </div>

        <div className='w-full flex flex-col justify-start items-center gap-4'>
          <div className='px-4 md:px-8 xl:px-0 flex flex-wrap gap-4 items-center justify-start w-full'>
            <button
               onClick={() => setCurrentCategory('all')} 
               className={`${currentCategory === 'all' ? 'border-white text-white font-bold' : 'border-slate-400'} duration-300 hover:border-white hover:text-white cursor-pointer uppercase px-2 py-1 text-sm md:text-base md:px-4 md:py-2 border rounded-md`}
            >
              all
            </button>
            {
              categoriesData.map((category, index) => (
                <button
                  key={index} 
                  className={`${currentCategory === category ? 'border-white text-white font-bold' : 'hover:text-white hover:border-white'} px-2 py-1 text-sm md:text-base md:px-4 md:py-2 border border-slate-400 rounded-md uppercase duration-300`}
                  onClick={() => {
                    setNumOfImages(20)
                    setCurrentCategory(category)
                  }}
                >
                  {category}
                </button>
              ))
            }
          </div>

          <div className='flex px-4 md:px-8 xl:px-0 flex-wrap justify-start items-center gap-4'>
            {
              filteredImages.length === 0 ? 
                <div className='w-full col-span-full flex justify-center items-center py-10 md:py-20 lg:py-30 xl:py-40 uppercase text-xs md:text-xl duration-300'>
                  No Images To Show
                </div>
                 :
              filteredImages.map((item, index) => (
                <div key={index} className='gallery-image h-[150px] md:h-[200px] w-auto overflow-hidden rounded-md relative duration-300'>
                  {console.log(item.path)}
                  {loadingImages ? 
                    <LoadingImage /> 
                      : 
                    <div className='w-full h-full absolute z-10 opacity-0 hover:opacity-100 hover:bg-opacity-70 bg-gray-950 duration-300 flex justify-center items-center'>
                      <button
                        onClick={() => handleImageClick(item.path)} 
                        className='px-2 py-1 text-sm md:text-base md:px-4 md:py-2 border border-slate-400 rounded-md uppercase duration-300 hover:text-white hover:border-white'>
                          view original size
                      </button>
                    </div>}
                  <img src={item.path} alt={item.name} className='w-full h-full' />
                </div>
              ))
            }
          </div>

          <div className='w-full px-4 md:px-8 xl:px-0 flex justify-center items-center'>
            {
              numOfImages <= filteredImages.length ? 
                <button onClick={handleShowMore}>show more...</button>
                  :
                numOfImages > 20 &&
                <button onClick={() => setNumOfImages(20)}>show less..</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
