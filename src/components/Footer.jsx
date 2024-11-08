import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gray-950 flex flex-col justify-center items-center border-slate-400 border-t text-slate-400 duration-300'>
      <div className='w-full max-w-[1280px] flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 p-4 md:py-8 md:px-8 xl:px-0'>
        <div className='flex flex-col items-start justify-start w-full md:w-1/2 lg:w-1/3'>
          <h1 className='text-2xl text-white text-center md:text-start w-full uppercase'>
            About Me
          </h1>
          <div className='w-full flex justify-center py-4'>
            <div className='h-[2px] w-full bg-slate-400' />
          </div>
          <p className='text-justify'>I’m Tornike Giguashvili, a passionate photographer with a love for capturing life's most memorable moments. With over 5 years of experience in photography, I specialize in portrait and event photography. I’m dedicated to creating stunning visuals that tell a story, and I'm always eager to explore new creative challenges. When I’m not behind the lens, you can find me exploring the outdoors or experimenting with new photography techniques.          </p>
        </div>
        <div className='flex flex-col items-start justify-start w-full md:w-1/2 lg:w-1/3'>
          <h1 className='text-2xl text-white text-center md:text-start w-full uppercase'>
            Contact Information
          </h1>
          <div className='w-full flex justify-center py-4'>
            <div className='h-[2px] w-full bg-slate-400' />
          </div>
          <p className='uppercase'>WhatsApp - <a rel='noreferrer' target='_blank' href='https://wa.me/598587540' className='cursor-pointer hover:underline hover:text-white duration-300 lowercase'>+995 598 58 75 40</a></p>
          <p className='uppercase'>Facebook - <a rel='noreferrer' target='_blank' href='https://www.facebook.com/profile.php?id=100010649565476&mibextid=ZbWKwL' className='cursor-pointer hover:underline hover:text-white duration-300 lowercase'>თორნიკე გიგუაშვილი</a></p>
          <p className='uppercase'>Instagram - <a rel='noreferrer' target='_blank' href='https://www.instagram.com/tjpo404/profilecard/?igsh=bndjMXBubXlvMXdn' className='cursor-pointer hover:underline hover:text-white duration-300 lowercase'>tjpo404</a></p>
          <p className='uppercase'>Email - <a rel='noreferrer' target='_blank' href='mailto:giguashvilitornike9@gmail.com' className='cursor-pointer hover:underline hover:text-white duration-300 lowercase'>giguashvilitornike9@gmail.com</a></p>
        </div>
      </div>
      <div className='w-full flex justify-center py-4'>
        <div className='h-[2px] w-full max-w-[1280px] bg-slate-400' />
      </div>
      <div className='w-full max-w-[1280px] flex items-center py-4 uppercase flex-col md:flex-row justify-between gap-4 text-sm md:text-base px-4 md:px-8 xl:px-0'>
        <p className='text-center md:text-start'>
          ©2024 Tornike Giguashvili. All Rights Reserved.
        </p>
        <div className='w-full flex justify-center py-4 md:hidden'>
          <div className='h-[2px] w-full max-w-[1280px] bg-slate-400' />
        </div>
        <p className='text-slate-400 text-center md:text-end'>
          website by <a rel='noreferrer' target='_blank' href='https://github.com/kareli2005' className='cursor-pointer hover:text-white hover:underline duration-300'>Tsotne Kareli</a>
        </p>
      </div>
    </div>
  )
}

export default Footer