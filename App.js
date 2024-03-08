import './App.css';
import React from 'react';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Skills from './Router/Skills'
import Project from './Router/Project'
import Contact from './Router/Contact/Contact'
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Skills" element={<Skills/>}/>
       <Route path="/Project" element={<Project/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       </Routes>
    </BrowserRouter>

  )

}

export default App;
