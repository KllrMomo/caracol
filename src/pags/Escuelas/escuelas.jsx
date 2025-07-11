import React, { useRef, useState } from "react";
import {Container} from "@mui/material";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import CalendarForm from "../../components/Calendar/calendar.jsx"
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
              <a href="https://www.caracolbc.org/Visitanos#section1" target="_blank" rel="noopener noreferrer"><img src="images/Boletos.png" alt="boletos" className="boleto" />
              <span className="tooltip">Boletos</span></a>
            </div>

            <div className="icon-wrapper">
              <a href="https://www.caracolbc.org/salas#section1" target="_blank" rel="noopener noreferrer"><img src="images/Cielo.png" alt="cielo" className="cielo" />
              <span className="tooltip">Sala del <br />Cielo</span></a>
            </div>

            <div className="icon-wrapper">
              <a href="https://www.caracolbc.org/salas#section2" target="_blank" rel="noopener noreferrer"><img src="images/Tierra.png" alt="tierra" className="tierra" />
              <span className="tooltip">Sala de la <br />Tierra</span></a>
            </div>

            <div className="icon-wrapper">
              <a href="https://www.caracolbc.org/salas#section3" target="_blank" rel="noopener noreferrer"><img src="images/Mar.png" alt="mar" className="mar" />
              <span className="tooltip">Sala del <br />Mar</span></a>
            </div>
          </div>
        </div>

        
        <section className="portada">
          <img src="/images/Escuela.jpg" alt="Imagen Escuelas" className="imagen-portada"/>
          <div className="banner">
            <div className="banner-texto">
              <h1 className="banner-texto1">¡Trae a tus estudiantes a <br /> vivir la experiencia <br /> Caracol!</h1>
              <p className="banner-texto2">Conoce todo lo que tenemos disponible para tu grupo escolar.</p>
            </div>
          </div>
        </section>
        
        <section id="section1" className="visita-caracol">
          <img src="/images/VISITA-CARACOL.png" alt="Visita Caracol" className="visita"/>

          <p className="texto-visita">Descubre las maravillas de la península de Baja California a través de nuestras salas de exhibición. </p>
          
          <div className="salas-container2">
            <li className="item">
              <a href="https://www.caracolbc.org/salas#section2" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Tierra.jpg" alt="Sala de la Tierra" className="sala-tierra" />
                <span className="hover-text">Sala de la Tierra</span>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#section1" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Cielo.jpg" alt="Sala del Cielo" className="sala-cielo" />
                <span className="hover-text">Sala del Cielo</span>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#section3" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Mar.jpg" alt="Sala del Mar" className="sala-mar" />
                <span className="hover-text">Proyecto Sala del Mar</span>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#sectionplanetario" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Planetario.jpg" alt="Planetario" className="planetario" />
                <span className="hover-text">Planetario</span>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#section5" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Dinosaurios.jpg" alt="Dinosaurios" className="dinosaurios" />
                <span className="hover-text">Dinosaurios</span>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#section4" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/temporal.jpg" alt="Sala Temporal" className="temporal2" />
                <span className="hover-text">Sala Temporal: Aleta Azul, el Atún del Pacífico</span>
              </a>
            </li>
          </div>

          <p className="texto-visita2">*Nuestro recorrido cuenta con una duración aproximada de 3 horas</p>
          <p className="texto-visita3">Y exploren con sensorama</p>

          <div className="sensorama-container">
            <img src="/images/sensorama.png" alt="Sensorama" className="sensorama" />

            <div className="sensorama-texto">
              <p className="texto-sensorama">
                Explora seres vivos, elementos de la naturaleza y objetos que tenemos  en el museo,<br /> utilizando solamente tu tacto.  <br />
                ¿Qué habrá ahí? ¿Será un alga o piel de serpiente? <br /> <br /> Descúbrelo en este divertido taller.
              </p>
              <p className="texto-sensorama2">
                <i class="ri-search-line"></i> Incluido en tu visita para escuelas con más de 180 alumnos
              </p>
            </div>
          </div>

          <p className="recorrido">¡PROGRAMA TU RECORRIDO!</p>
        </section>

        <section id="section2" className="ciencia-aire-libre">
          <img src="/images/CIENCIA-LIBRE.png" alt="Ciencia al Aire Libre" className="ciencia"/>

          <p className="texto-ciencia">Descubre las maravillas de nuestros ecosistemas y aprende sobre su flora y fauna en los recorridos interpretativos que tenemos para tus alumnos.</p>
          <p className="texto-ciencia2">*Mínimo 30 alumnos</p>

          <div className="paseo-bahia-container">
            <img src="/images/Bahia.jpg" alt="Paseo por la Bahía" className="paseo-bahia" />
            
            <div className="paseo-texto">
              <p className="titulo-paseo">Paseo en la bahía</p>
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
            <img src="images/Bufadora.jpg" alt="Bufadora" className="bufadora-movil"/>
            
            <div className="bufadora-texto">
              <p className="titulo-bufadora">La bufadora desde <br /> el mar</p>
              <p className="texto-bufadora1">Disfruta la mejor vista de la Bufadora mientras navegas y <br />aprendes  sobre las criaturas que habitan nuestras costas.</p>
              <p className="texto-bufadora2">
                <span className="duracion-label">DURACIÓN</span> 
                <i className="ri-time-line"></i> 4 horas aprox.
              </p>
            </div>
            <img src="/images/Bufadora.jpg" alt="Bufadora" className="bufadora"/>
          </div>

          <div className="avistamiento-de-ballenas">
            <img src="/images/Ballenas.jpg" alt="Avistamiento de Ballenas" className="ballenas"/>
            
            <div className="ballenas-texto"> 
              <p className="titulo-ballenas"> Avistamiento De <br /> Ballenas</p>
              <p className="texto-ballenas1">Conoce la flora y fauna de la región, mientras aprendes sobre <br /> los ecosistemas que nos rodean.</p>
              <p className="texto-ballenas2">
                <span className="duracion-label">DURACIÓN</span> 
                <i className="ri-time-line"></i> 4 horas aprox.
              </p>
              <p className="texto-ballenas2">
                <i class="ri-search-line"></i> Únicamente en temporada de migración
              </p>
            </div>
          </div>

          <p className="sumergete">Sumérgete en esta experiencia única y conecta con la naturaleza</p>
        </section>

        <section id="section3" className="mas-informacion">
          {/*<p className="info1">Para más información no dudes en contactarnos</p>*/}
          <p className="info1">Contactos</p>
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
              <p><a className="whattel" href="https://wa.me/526464130544" target="_blank" rel="noopener noreferrer"> (646) 413-0544</a></p>
            </div>
          </div>
        </section>

        <section id="section4" className="calendario">
          <p className="info1">Agenda tu Cita</p>
          <CalendarForm/>
        </section>

        <div className="documento-item2">
            <a href={Catalogoparaescuelas2025} target="_blank" className="download-link2" rel="noopener noreferrer">
              <i className="ri-download-line"></i>
              Descarga el Catalogo Oficial 2025
            </a>
        </div>

        <section id="section5" className="documentos">
            <h3 className="doc-title">Documentos</h3>
          <div className="documentos-container">
              <div className="documento-item">
                <p className="documento">Lineamientos de visita</p>
                <a href="https://docs.google.com/document/d/1d8DB42UijXPfTSBcnfxs3xEnxCoqRkVDFJmj9UXXVl8/edit?tab=t.0" target="_blank" className="download-link" rel="noopener noreferrer">
                    <i className="ri-download-line"></i>
                    Descargar
                  </a>
              </div>
              <div className="documento-item">
                <p className="documento">Carta de deslinde de responsabilidad</p>
                <a href="https://docs.google.com/document/d/1d8DB42UijXPfTSBcnfxs3xEnxCoqRkVDFJmj9UXXVl8/edit?tab=t.0" target="_blank" className="download-link" rel="noopener noreferrer">
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