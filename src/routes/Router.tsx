import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from '../pages/Projects';
import Skills from "../pages/Skills";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ Home() }/>
        <Route path='/about' element={ About() }/>
        <Route path='/skills' element={ Skills() }/>
        <Route path='/projects' element={ Projects() }/>
      </Routes>
    </BrowserRouter>
  )
}
