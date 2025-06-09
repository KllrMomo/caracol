import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <navBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/articulos" element={<ArticulosSearch />} />
        <Route path="/articulos/:id" element={<ArtOpen />} /> {/* ruta dinámica */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/autor" element={<MoreAutores />} />
      </Routes>
    </Router>
  );
}

export default App;
