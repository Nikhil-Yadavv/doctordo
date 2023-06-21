import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route, Routes, } from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Review from './Review';
import Books from './Books';
import Footer from './Footer';
import Doctors from './Doctors';
import Navbar from '../src/Component/Navbar';

const App = () =>{
  return (
    <>
    <Navbar/>
    <Routes> 
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/service" element={<Services/>} />
      <Route exact path="/review" element={<Review/>} />
      <Route exact path="/books" element={<Books/>} />
      <Route exact path="/doctors" element={<Doctors/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

