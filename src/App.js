import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Bodega from "./routes/Bodega"

function App() {
  return (
    <div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Bodega" element={<Bodega />} />
     </Routes>
    </div>
  );
}

export default App;
