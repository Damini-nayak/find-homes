import react from 'react';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Error from './pages/Error404';

export default function routes(){
    return(
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/> 
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/*' element={<Error/>}/> 
      </Routes>
    )
}