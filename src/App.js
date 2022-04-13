import React, {useState, useEffect} from 'react';
import './App.css';
import axios from'axios';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Tjanster from './Components/Tjanster/Tjanster';
import Produkter from './Components/Produkter/Produkter';
import Omoss from './Components/Omoss/Omoss';
import Kontakt from './Components/Kontakt/Kontakt';
import DataFetching from './DataFetching';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {


  

 
  return (
    <div>
      
      <BrowserRouter>

         <Header />
     
      <Routes>

        <Route path="/tjanster" element={<Tjanster />}/>
        <Route path="/produkter" element={<Produkter />}/>
        <Route path="/datafetching" element={<DataFetching />}/>
        <Route path="/omoss" element={<Omoss />}/>
        <Route path='/kontakt' element={<Kontakt />}/>
        <Route path="/" element={<Home />}/>
        

      </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );

}

export default App;
