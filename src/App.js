import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-950 text-slate-400 font-mono'>
      <Header />
      <main className='flex-1'>
        <Slider />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
