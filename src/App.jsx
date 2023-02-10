import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, WallPapers } from "./components/index";
import { About, NotFound, Anime, Home } from "./pages";
import { AnimeProvider } from "./context/AnimeContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/anime/Alert";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <AnimeProvider>
    <ToastContainer />
        <AlertProvider>
          <BrowserRouter>
            <div className='flex  flex-col justify-between h-screen'>
              <Navbar />
              <div className='flex  flex-col justify-between h-screen'>
                <main className='container  mx-auto px-3 pb-12'>
                  <Alert />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/:id' element={<Anime />} />
                    {/* <Route path='/wallpapers' element={<WallPapers  />} /> */}
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/*' element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </AlertProvider>
      </AnimeProvider>
    </>
  );
};

export default App;
