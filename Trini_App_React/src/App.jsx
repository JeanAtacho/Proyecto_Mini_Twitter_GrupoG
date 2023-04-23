///import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import logo from '../src/image/twitter-rosa.png'
import Login from './views/login'
import Index from './views/index'


function App() {
  return (
    <>
      <h1>Aqui comienza nuestro primer proyecto</h1>
      <img className='logo' src={logo} alt='logo twitter' /> 
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {/* {home}
      {sidebar}       */}
    </>    
  )
}

export default App
