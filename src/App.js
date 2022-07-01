import React from "react";

//importing the use of route and routes for pages
import { Route, Routes, Navigate} from "react-router-dom";


import Main from "./routes/Main"
import Merch from "./routes/Merch"
import Bodega from "./routes/Bodega"
import Transition from "./routes/Transition"
import Team from "./routes/Team"
import RoadMap from "./routes/RoadMap"

function App() {
  return (
    <div>
     <Routes>
       <Route path="/" element={<Main /> } />
       <Route path="/Merch" element={<Merch /> } />
       <Route path="/RoadMap" element={<RoadMap /> } />
       <Route path="/Team" element={<Team />} />
       <Route path="/Bodega" element={<Bodega />} />
       <Route path="/Bodega2" element={<Navigate to="/Store"/>} />
       <Route path="/Store" element={<Transition />} />
     </Routes>
    </div>
  );
}

export default App;
