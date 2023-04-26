///import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './views/login'
import Index from './views/index'
import { PrivateRoutes } from './components/PrivateRoutes';
import Aside from './views/Aside';


function App() {
  return (
    <>
      <Aside />
      <Routes>

        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/profile" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
