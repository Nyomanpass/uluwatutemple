import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import './App.css';

import Map from './pages/map';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Kecak from './pages/Kecak';
import Contact from './pages/Contact';
import Prewedding from './pages/Prewedding';
import Tutorial from './pages/Tutorial';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function App() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
   <>
    <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/map' element={<Map/>}/>
           <Route path='/rules' element={<Rules/>}/>
           <Route path='/kecak-schedule' element={<Kecak/>}/>
           <Route path='/urgent-contact' element={<Contact/>}/>
           <Route path='/venuerental' element={<Prewedding/>}/>
           <Route path='/tutorial' element={<Tutorial/>}/>
        </Routes>
      </Router>
   </>
  );
}