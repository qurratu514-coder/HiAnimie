import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./Style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Component/Main/MainPage.jsx';
import HomePage from './Component/Pages/Homepage.jsx';
import MoviePage from './Component/Pages/MoviePage.jsx';
import TVSeriesPage from './Component/Pages/TVSeriesPage.jsx';
import PopularPage from './Component/Pages/Popularpage.jsx';
import TopAiringPage from './Component/Pages/TopAiringPage.jsx';
import WatchPage from './Component/Watch/WatchPage.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Movie" element={<MoviePage />} />
        <Route path="/TV Series" element={<TVSeriesPage />} />
        <Route path="/Most Popular" element={<PopularPage />} />
        <Route path="/Top Airing" element={<TopAiringPage />} />
         <Route path="/watch/:slug" element={<WatchPage />} />
      </Routes>
    </BrowserRouter>



    
    
  </StrictMode>,
)
