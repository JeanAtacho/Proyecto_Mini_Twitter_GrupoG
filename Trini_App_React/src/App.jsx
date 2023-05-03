///import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './views/login'
import Register from './views/register';
import Home from './views/Home';
import { PrivateRoutes } from './components/PrivateRoutes';
import HomeUser from './views/HomeUser';
import UserProfile from './views/UserProfile';


function App() {
  return (
    <>
      <div className="grid-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeUser" element={<HomeUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          

          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/homeUser" />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
