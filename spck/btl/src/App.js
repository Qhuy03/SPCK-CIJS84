import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Login/Register';
import Admin from './Admin/Admin';
import Home from './Home';
import Story from './Story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/story' element={<Story/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
