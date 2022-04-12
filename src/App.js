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


  const[image, setImage]=useState()
  const[allImages, setAllImages]=useState([])


  const handleUpload=()=> {
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "goseDruttGrodan11!")
    axios.post('https://api.cloudinary.com/v1_1/dgiq3zif9/image/upload',formData)
    .then(response=>{
      axios.post('http://localhost:8000/images',{
        url:response.data.url
      })
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
  }

  useEffect(() => {
   axios.get('http://localhost:8000/images')
   .then(res=>{
     setAllImages(res.data)
   }).catch(err=>console.log(err))
  }, [])
  

 
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
