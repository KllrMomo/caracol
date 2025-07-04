import React, { useRef, useState } from "react";
import {Container} from "@mui/material";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import Filtro from "../../components/filtro.jsx";
import Catalogoparaescuelas2025 from "../../docs/Catalogoparaescuelas2025.pdf";
import './escuela.css';

function Escuelas () {
    return (
    <Container maxWidth="false" disableGutters>
     
      <main className="main">

        <header className="header"> 
          <Header />
        </header>

        <div className="iconos-container">
          <div className="iconos">
            <div className="icon-wrapper">
              <img src="images/Boletos.png" alt="boletos" className="boleto" />
              <span className="tooltip">Boletos</span>
            </div>
            <div className="icon-wrapper">
              <img src="images/Cielo.png" alt="cielo" className="cielo" />
              <span className="tooltip">Sala del <br />Cielo</span>
            </div>
            <div className="icon-wrapper">
              <img src="images/Tierra.png" alt="tierra" className="tierra" />
              <span className="tooltip">Sala de la <br />Tierra</span>
            </div>
            <div className="icon-wrapper">
              <img src="images/Mar.png" alt="mar" className="mar" />
              <span className="tooltip">Sala del <br />Mar</span>
            </div>
          </div>
        </div>

        
        <section className="portada">
          <img src="/images/Escuela.png" alt="Imagen Escuelas" className="imagen-portada"/>
          <div className="banner">
            <div className="banner-texto">
              <h1 className="banner-texto1">¡Trae a tus estudiantes a <br /> vivir la experiencia <br /> Caracol!</h1>
              <p className="banner-texto2">Martes a Domingo <br /> 9:00 am a 4:00 pm</p>
            </div>
          </div>
        </section>

        <Filtro className="filtro" />

        <section className="visita-caracol">
          <img src="/images/VISITA-CARACOL.png" alt="Visita Caracol" className="visita"/>
          <p className="texto-visita">Descubre las maravillas de la península de Baja California a través de nuestras salas de exhibición. </p>
          
          <div className="salas-container">
            <img src="/images/Sala-Tierra.png" alt="Sala de la Tierra" className="sala-tierra"/>
            <img src="/images/Sala-Cielo.png" alt="Sala del Cielo" className="sala-cielo"/>
            <img src="/images/Sala-Mar.png" alt="Sala del Mar" className="sala-mar"/>
            <img src="/images/Planetario.png" alt="Planetario" className="planetario"/>
            <img src="/images/Dinosaurios.png" alt="Dinosaurios" className="dinosaurios"/>
          </div>
          <p className="texto-visita2">* Nuestro recorrido cuenta con una duración aproximada de 3 horas</p>
          <p className="texto-visita3">Y exploren con sensorama</p>
          <div className="sensorama-container">
            <img src="/images/Sensorama.png" alt="Sensorama" className="sensorama"/>
            <div className="texto-sensorama-container">
              <p className="texto-sensorama">Explora seres vivos, elementos de la naturaleza y objetos que tenemos en el museo, utilizando solamente tu tacto. <br />
              ¿Qué habrá ahí? ¿Será un alga o piel de serpiente? Descúbrelo en este divertido taller. </p>

              <p className="texto-sensorama2">Incluido en tu visita para escuelas con más de 180 alumnos</p>
            </div>
          </div>

          <p className="recorrido">¡PROGRAMA TU RECORRIDO!</p>
        </section>

        <section className="ciencia-aire-libre">
          <img src="/images/CIENCIA-LIBRE.png" alt="Ciencia al Aire Libre" className="ciencia"/>

          <p className="texto-ciencia">Descubre las maravillas de nuestros ecosistemas y aprende sobre su flora y fauna en los <br />recorridos interpretativos que tenemos para tus alumnos.</p>
          <p className="texto-ciencia2">*Mínimo 30 alumnos</p>

          <div className="paseo-bahia-container">
            <img src="/images/Bahia.jpg" alt="Paseo por la Bahía" className="paseo-bahia" />
            
            <div className="paseo-texto">
              <p className="titulo-paseo">PASEO EN LA BAHÍA</p>
              <p className="texto-paseo1">
                Embárcate en una emocionante experiencia en barco <br /> mientras
                observas y conoces las maravillas del mar.
              </p>
              <p className="texto-paseo2">
                <span className="duracion-label">DURACIÓN</span> 
                <i className="ri-time-line"></i> 1.5 horas aprox.
              </p>
            </div>
          </div>


          <div  className="bufadora-container">
            <img src="/images/Bufadora.jpg" alt="Bufadora" className="bufadora"/>
            
            <div className="bufadora-texto">
              <p className="titulo-bufadora">LA BUFADORA DESDE <br /> EL MAR</p>
              <p className="texto-bufadora1">Disfruta la mejor vista de la Bufadora mientras navegas y <br />aprendes  sobre las criaturas que habitan nuestras costas.</p>
              <p className="texto-bufadora2">
                <span className="duracion-label">DURACIÓN</span> 
                <i className="ri-time-line"></i> 4 horas aprox.
              </p>
            </div>
          </div>

          <div className="avistamiento-de-ballenas">
            <img src="/images/Ballenas.jpg" alt="Avistamiento de Ballenas" className="ballenas"/>
            
            <div className="ballenas-texto"> 
              <p className="titulo-ballenas">AVISTAMIENTO DE <br />BALLENAS</p>
              <p className="texto-ballenas1">Conoce la flora y fauna de la región, mientras aprendes sobre <br /> los ecosistemas que nos rodean.</p>
              <p className="texto-ballenas2">
                <span className="duracion-label">DURACIÓN</span> 
                <i className="ri-time-line"></i> 1.5 horas aprox.
              </p>
              <p className="texto-ballenas2">
                <i class="ri-search-line"></i> Únicamente en temporada de migración
              </p>
            </div>
          </div>

          <p className="sumergete">Sumérgete en esta experiencia única y conecta con la naturaleza</p>
        </section>

        {/*<section className="final">
          <p className="texto-final">Todas nuestras exhibiciones/actividades están disponibles para los niveles de preescolar hasta universidad.</p>

          <img src="images/perder.png" alt="Nadie se tiene que perder de la diversión"  className="perder"/>

          <img src="images/Perder-movil.png" alt="Nadie se tiene que perder de la diversión"  className="perder-movil"/>

          <p className="texto-final2">(restricciones aplican)</p>

        </section>*/}

        <section className="mas-informacion">
          <p className="info1">Para más información no dudes en contactarnos</p>
          <div className="mas-informacion-container">
            <div className="telefono-text">
              <p className="tel">Teléfono</p>
              <p><a  href="tel:6461770897" className="tel1">(646) 177-0897</a></p>
              <p><a href="tel:6461521993" className="tel2">(646) 152-1993</a></p>
            </div>
            <div className="correo-text">
              <p className="correo">Correo Electrónico</p>
              <p><a href="mailto:paola@caracolbc.org" className="correo1">paola@caracolbc.org</a></p>
            </div>
            <div className="whatsapp-text">
              <p className="whatsapp">WhatsApp</p>
              <p><a className="whattel" href="https://wa.me/526464130544"> (646) 413-0544</a></p>
            </div>
          </div>
        </section>

        <section className="documentos">
            <h3 className="doc-title">Documentos</h3>
          <div className="documentos-container">
              <div className="documento-item">
                <p className="documento">Catalogo Oficial 2025</p>
                <a href={Catalogoparaescuelas2025} target="_blank" className="download-link" rel="noopener noreferrer">
                    <i className="ri-download-line"></i>
                    Descargar
                  </a>
              </div>
          </div>
        </section>

        <footer>
          <Footer />
        </footer>

      </main>
    </Container>
  );
}

export default Escuelas;