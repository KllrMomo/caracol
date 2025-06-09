import React, { useRef, useState } from "react";
import {Container} from "@mui/material";
import './escuela.css'; // Import the CSS file for styling

function Escuelas () {
    return (
    <Container maxWidth="false" disableGutters>
      <main className="main">
        <section className="portada">
          <img src="/images/Escuela.png" alt="Imagen Escuelas" className="imagen-portada"/>
          <img src="/images/Banner.png" alt="Banner" className="banner"/>
        </section>

        <section className="visita-caracol">
          <img src="/images/VISITA-CARACOL.png" alt="Visita Caracol" className="visita"/>
          <img src="/images/texto-visita.png" alt="visita" className="texto-visita"/>
          <img src="images/Imagines-Salas.png" alt="Salas" className="salas"/>
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