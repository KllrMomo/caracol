import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Escuelas from './pags/escuelas.tsx';


function App() {
  return (
    <Router>
      <navBar />
      <Routes>
        <Route path="/" element={<Escuelas />} />
      </Routes>
    </Router>
  );
}

export default App;
