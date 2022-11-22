import React from "react";
import { TrendingMovies } from "./components/TrendingMovies"
function App() {
  const API_KEY =  '?api_key=bdaaaa2b20c386f0be9d20b50bd8dbe3';
  const BASE_URL = 'https://api.themoviedb.org/3/';
  
  
  return (
    <TrendingMovies
    url={BASE_URL}
    apiKey={API_KEY}
    />
  )
}

export default App;
