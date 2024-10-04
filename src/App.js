import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Products from './components/Products.jsx'
import Features from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/products' element = {<Products/>}/>
      <Route path = '/features' element = {<Features/>}/>
      <Route path = '/footer' element = {<Footer/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
