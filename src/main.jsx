import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './Game';
import WhopCallback from './pages/whop/callback';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/whop/callback" element={<WhopCallback />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
