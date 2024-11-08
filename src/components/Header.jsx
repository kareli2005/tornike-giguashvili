import React, { useRef, useState } from 'react';

const Header = () => {


  return (
    <div
      className='w-full bg-gray-950 text-slate-400 md:text-xl lg:text-2xl duration-300 border-b border-slate-400 sticky top-0 z-[2000]'
    >
      <div className='w-full h-full max-w-[1280px] flex justify-between items-center p-4 md:py-8 md:px-8 xl:px-0 mx-auto'>
        <p className='text-start'>
          Tornike Giguashvili <span className='photo-span'>&#183; Photographer</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
