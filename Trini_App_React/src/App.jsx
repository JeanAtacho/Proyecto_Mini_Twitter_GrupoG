///import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './views/Login'
import Index from './views/Aside'
import { PrivateRoutes } from './components/PrivateRoutes';
import Aside from './views/Aside';


function App() {
  return (
    <>
      <Aside />
      <Login/>

      <Routes>

        <Route path="/Index" element={<Index />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/profile" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
