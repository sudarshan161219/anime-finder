import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar, Footer} from './components/index'
import { About,  NotFound, Anime, Home  } from './pages';
import { AnimeProvider } from './context/AnimeContext';

const App = () => { 
  return (
    <AnimeProvider>
    <BrowserRouter>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
<div className='flex flex-col justify-between h-screen'>
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/:id' element={<Anime />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
</div>
    </div>
  </BrowserRouter>
</AnimeProvider>

  )
}

export default App