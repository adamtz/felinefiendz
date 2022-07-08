import React from "react";

//importing the use of route and routes for pages
import { Route, Routes} from "react-router-dom";


import Main from "./routes/Main"
import Merch from "./routes/Merch"
import Bodega from "./routes/Bodega"
import Team from "./routes/Team"
import RoadMap from "./routes/RoadMap"
import Traits from "./routes/Traits"

function App() {
  return (
    <div>
     <Routes>
       <Route path="/" element={<Main /> } />
       <Route path="/Merch" element={<Merch /> } />
       <Route path="/RoadMap" element={<RoadMap /> } />
       <Route path="/Team" element={<Team />} />
       <Route path="/Bodega" element={<Bodega />} />
       <Route path="/Traits" element={<Traits />} />
     </Routes>
    </div>
  );
}

export default App;
