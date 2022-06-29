import React from "react";

//importing the use of route and routes for pages
import { Route, Routes } from "react-router-dom";


import Store from "./routes/Store";
import Merch from "./routes/Merch"
import Bodega from "./routes/Bodega"
import Team from "./routes/Team"
import RoadMap from "./routes/RoadMap"

function App() {
  return (
    <div>
     <Routes>
       <Route path="/" element={<Store /> } />
       <Route path="/Merch" element={<Merch /> } />
       <Route path="/RoadMap" element={<RoadMap /> } />
       <Route path="/Team" element={<Team />} />
       <Route path="/Bodega" element={<Bodega />} />
     </Routes>
    </div>
  );
}

export default App;
