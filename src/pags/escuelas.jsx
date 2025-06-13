import React, { useRef, useState } from "react";
import {Container} from "@mui/material";
import './escuela.css'; // Import the CSS file for styling

function Escuelas () {
    return (
    <Container maxWidth="false" disableGutters>
      <main className="main">
        <section className="portada">
          <img src="/images/Escuela.png" alt="Imagen Escuelas" className="imagen-portada"/>
          <div className="banner">
            <p className="banner-texto1">¡Trae a tus estudiantes a vivir la experiencia Caracol!</p>
            <p className="banner-texto2">Martes a Domingo <br /> 9:00 am a 4:00 pm</p>
          </div>
        </section>

        <section className="visita-caracol">
          <img src="/images/VISITA-CARACOL.png" alt="Visita Caracol" className="visita"/>
          <p className="texto-visita">Descubre todas nuestras salas de exhibicion con un recorrido completo del mundo</p>
          
          <div className="salas-container">
            <img src="/images/Sala-Tierra.png" alt="Sala de la Tierra" className="sala-tierra"/>
            <img src="/images/Sala-Cielo.png" alt="Sala del Cielo" className="sala-cielo"/>
            <img src="/images/Sala-Mar.png" alt="Sala del Mar" className="sala-mar"/>
            <img src="/images/Planetario.png" alt="Planetario" className="planetario"/>
          </div>
          <p className="texto-visita2">* Nuestro recorrido cuenta con una duración aproximada de 3 horas</p>
          <p className="texto-visita3">Y exploren con sensorama</p>
          <div className="sensorama-container">
            <img src="/images/Sensorama.png" alt="Sensorama" className="sensorama"/>
            <div className="texto-sensorama-container">
              <p className="texto-sensorama">Sensorama es una experiencia inmersiva que combina imágenes, sonidos y efectos especiales para sumergir a los visitantes en un mundo de sensaciones.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2023 Caracol Museo de Ciencias S.A. Todos los derechos reservados.</p>
        </div>
      </footer>
    </Container>
  );
}

export default Escuelas;