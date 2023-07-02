import logo from './logo.svg';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Login/Register';

import Home from './Home';
import Story from './Story';
import { Link, useNavigate } from "react-router-dom";
import TinTuc from './BangTin/TinTuc';
import AppCong from './BangTin/AppCong';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        
        <Route path='/story' element={<Story/>}/>
        <Route path='/tin' element={<TinTuc/>}/>
        <Route path='/app-cong' element={<AppCong/>}/>
      </Routes>
      
    </div>
  );
  }

export default App;
