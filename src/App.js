import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Escuelas from './pags/Escuelas/escuelas.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/escuelas" element={<Escuelas />} />
      </Routes>
    </Router>
  );
}

export default App;
