import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { MovieProvider } from './hooks/MovieProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>
);

