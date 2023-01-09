import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import Projects from '../pages/Projects';
import Skills from "../pages/Skills";

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={ Home() } />
      <Route path='/skills' element={ Skills() } />
      <Route path='/projects' element={ Projects() } />
      <Route path='/contacts' element={ Contacts() } />
    </Routes>
  )
}
