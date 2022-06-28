import React from "react";
import { Route, Routes } from "react-router-dom";


import Store from "./routes/Store";
import Merch from "./routes/Merch"
function App() {
  return (
    <div>
     <Routes>
       <Route path="/" element={<Store /> } />
       <Route path="/Merch" element={<Merch /> } />
     </Routes>
    </div>
  );
}

export default App;
