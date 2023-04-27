///import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './views/login'
import Home from './views/Home';
import { PrivateRoutes } from './components/PrivateRoutes';
import Aside from './views/aside';
import Header from './components/Header';


function App() {
  return (
    <>
      <div className="grid-container">
        <Header />
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/profile" />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
