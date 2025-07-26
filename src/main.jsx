import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App.jsx'

import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    
    {/* <div className='mt-1 py-2 sticky-top bg-white shadow-sm'>
        <Navbar />
    </div> */}

      <HelmetProvider>
    <App />
  </HelmetProvider>
    
    <div>
        <Footer />
    </div>
    </Router>
  </StrictMode>,
)
