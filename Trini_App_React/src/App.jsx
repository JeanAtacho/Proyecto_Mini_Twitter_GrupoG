///import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './views/Main.jsx'



function App() {
  return (
<>
<Routes>
        <Route path="/Main" element={<Main />} />
</Routes>
</>
  );
}

export default App;
