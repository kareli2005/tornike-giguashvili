import React, { useEffect, useState, useRef } from 'react'
import './Header.css'

const Header = () => {
  const [homeActive, setHomeActive] = useState(true)
  const [isFixed, setIsFixed] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.getBoundingClientRect().height
        setIsFixed(window.scrollY >= headerHeight)

        const gallery = document.getElementById('gallery')
        if (gallery) {
          const galleryTop = gallery.getBoundingClientRect().top + window.scrollY
          if (galleryTop - headerHeight <= window.scrollY) {
            setHomeActive(false)
          } else {
            setHomeActive(true)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handlePages = (bool) => {
    setHomeActive(bool)

    const headerHeight = headerRef.current.getBoundingClientRect().height
    const gallery = document.getElementById('gallery')
    if (gallery) {
      const galleryTop = gallery.getBoundingClientRect().top + window.scrollY
      const scrollPosition = bool
        ? 0
        : galleryTop - headerHeight

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <div
        ref={headerRef}
        className={`w-full flex justify-center bg-gray-950 z-[1000] text-slate-400 md:text-xl lg:text-2xl duration-300`}
      >
        <div className='w-full h-full max-w-[1280px] flex justify-between items-center p-4 md:py-8 md:px-8 xl:px-0'>
          <p className='w-full sm:w-auto text-start'>
            Tornike Giguashvili <span className='photo-span'>&#183; Photographer</span>
          </p>
          <div className='flex gap-2 md:gap-4 lg:gap-6'>
            <div
              onClick={() => handlePages(true)}
              className={`${homeActive && 'text-white'} flex flex-col gap-2 cursor-pointer hover:text-white py-2`}
            >
              <p>home</p>
              <div className={`${!homeActive && 'hidden'} w-full bg-white h-[2px]`} />
            </div>
            <div
              onClick={() => handlePages(false)}
              className={`${!homeActive && 'text-white'} flex flex-col gap-2 cursor-pointer hover:text-white py-2`}
            >
              <p>gallery</p>
              <div className={`${homeActive && 'hidden'} w-full bg-white h-[2px]`} />
            </div>
          </div>
        </div>
      </div>
      {isFixed && (
        <div className='w-full flex justify-center bg-gray-950 z-[2000] text-slate-400 md:text-xl lg:text-2xl duration-300 fixed-header border-b border-slate-400'>
          <div className='w-full h-full max-w-[1280px] flex justify-between items-center p-4 md:py-8 md:px-8 xl:px-0'>
            <p className='w-full sm:w-auto text-start'>
              Tornike Giguashvili <span className='photo-span'>&#183; Photographer</span>
            </p>
            <div className='flex gap-2 md:gap-4 lg:gap-6'>
              <div
                onClick={() => handlePages(true)}
                className={`${homeActive && 'text-white'} flex flex-col gap-2 cursor-pointer hover:text-white py-2`}
              >
                <p>home</p>
                <div className={`${!homeActive && 'hidden'} w-full bg-white h-[2px]`} />
              </div>
              <div
                onClick={() => handlePages(false)}
                className={`${!homeActive && 'text-white'} flex flex-col gap-2 cursor-pointer hover:text-white py-2`}
              >
                <p>gallery</p>
                <div className={`${homeActive && 'hidden'} w-full bg-white h-[2px]`} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
