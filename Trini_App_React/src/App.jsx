import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { DataContext } from './contexts/DataContext'
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Login from './views/login'
import Register from './views/Register';
import Home from './views/Home';
import { PrivateRoutes } from './components/PrivateRoutes';
import HomeUser from './views/HomeUser';
import UserProfile from './views/UserProfile';
import UserOtherProfile from './views/UserOtherProfile';

function App() {
  const [data, setData] = useState(null);

  return (
    <>
      <div className="grid-container">
      <DataContext.Provider value={{ data, setData }}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/homeuser" element={<HomeUser />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/otherprofile" element={<UserOtherProfile />} />
            </Route>

        </Routes>
        </DataContext.Provider>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
