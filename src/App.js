import React from "react";
import { HomePage } from "./routes/HomePage";
function App() {
  const API_KEY =  '?api_key=bdaaaa2b20c386f0be9d20b50bd8dbe3';
  const BASE_URL = 'https://api.themoviedb.org/3/';
  return (
    <HomePage
      API_KEY={API_KEY}
      BASE_URL={BASE_URL}
    />
  )
}

export default App;
