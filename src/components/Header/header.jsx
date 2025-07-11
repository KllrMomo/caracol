import React from "react";
import "./header.css";
import Horario from "../Horario/horario.jsx";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/Logo.png" alt="Logo Caracol" className="logo" />
      </div>
      <div className="header-container">
        <nav className="nav-bar">
            <li className="nav-item"><a href="/">Inicio</a></li>
            <li className="nav-item"><a href="/quienes-somos">Conócenos</a></li>
            <li className="nav-item"><a href="/visita">Visítanos</a></li>
            <li className="nav-item"><a href="/contacto">Descubre</a></li>
            <li className="nav-item"><a href="/donativos">Dona</a></li>
            <li className="nav-item dropdown">
              <a href="/escuelas" className="active">Escuelas</a>
              <ul className="dropdown-menu">
                <li className="dropdown-item"><a href="#section1">Visita Caracol</a></li>
                <li className="dropdown-item"><a href="#section2">Ciencia al Aire Libre</a></li>
                <li className="dropdown-item"><a href="#section3">Contactos</a></li>
                <li className="dropdown-item"><a href="#section4">Agenda tu cita</a></li>
                <li className="dropdown-item"><a href="#section5">Docuementos</a></li>
                
              </ul>
            </li>

            <div className="container-all">
            <div className="social-icons">
                <a href="https://www.facebook.com/museocaracol" target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-line social-icon" title="Facebook"></i>
                </a>
                <a href="https://x.com/MuseoCaracol" target="_blank" rel="noopener noreferrer">
                <i className="ri-twitter-line social-icon" title="Twitter"></i>
                </a>
                <a href="https://www.instagram.com/museocaracol/?hl=en" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line social-icon" title="Instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCAaBLwSMnaplsTDWlXOlhWw/featured" target="_blank" rel="noopener noreferrer">
                <i className="ri-youtube-line social-icon" title="YouTube"></i>
                </a>
                <a href="https://www.tiktok.com/@museocaracol" target="_blank" rel="noopener noreferrer">
                <i className="ri-tiktok-fill social-icon" title="TikTok"></i>
                </a>
            </div>

            <Horario />

            <div className="boletos">
                <a href="">
                <i className="ri-ticket-line"></i>
                <span className="boletos-text">Boletos</span>
                </a>
            </div>
            </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
