import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-700">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/about" element={<div>About</div>}/>
        <Route path="/contact" element={<div>Contact</div>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
