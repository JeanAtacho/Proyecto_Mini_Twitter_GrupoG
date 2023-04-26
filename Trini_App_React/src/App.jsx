///import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main.jsx'



function App() {
  return (
<>
<Routes>
        <Route path="/main" element={<Main />} />
</Routes>
</>
  );
}

export default App;
