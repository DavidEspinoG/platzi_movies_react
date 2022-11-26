import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { MovieDetail } from "./routes/MovieDetail";
function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/detail" element={<MovieDetail/>}/>
        <Route path="*" element={<p>Not found</p>}/>
      </Routes>
    </HashRouter>
    
  )
}

export default App;
