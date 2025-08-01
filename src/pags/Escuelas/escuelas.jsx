import React, { useRef, useState } from "react";
import {Container} from "@mui/material";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import ImagBahia from "../../components/Carousel/ImagBahia.jsx";
import ImgBufadora from "../../components/Carousel/ImgBufadora.jsx";
import ImagBallena from "../../components/Carousel/ImagBallena.jsx";
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
          <img src="/images/Escuela2.png" alt="Imagen Escuelas" className="imagen-portada"/>
          <div className="banner">
            <div className="banner-texto">
              <h1 className="banner-texto1">¡Trae a tus estudiantes a vivir la experiencia Caracol!</h1>
              <p className="banner-texto2">Conoce todo lo que tenemos disponible <br /> para tu grupo escolar.</p>
            </div>
          </div>
        </section>
        
        <section id="section1" className="visita-caracol">
          <img src="/images/triangle.png" alt="tirangulo" className="triangle-visita" />

          <img src="/images/VISITA-CARACOL.png" alt="Visita Caracol" className="visita"/>

          <p className="texto-visita">Descubre
            todas nuestras <span className="bold-letter">salas de exhibición</span> con <br /> un recorrido <span className="bold-letter">completo del museo</span></p>

          <img src="/images/linea azul.png" alt="Linea Azul" className="linea-azul"/>
          
          <img src="/images/vector.png" alt="shape" className="shape-visita"/>

          <div className="salas-container2">
            <li className="item">
              <a href="https://www.caracolbc.org/salas#section2" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Tierra1.png" alt="Sala de la Tierra" className="sala-tierra" />
                <div className="sala-text-tierra">Sala de la Tierra</div>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#section1" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Cielo1.png" alt="Sala del Cielo" className="sala-cielo" />
                <div className="sala-text-cielo">Sala del Cielo</div>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#sectionplanetario" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Planetario1.png" alt="Planetario" className="planetario" />
                <span className="sala-text-planetario">Planetario</span>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#section3" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Mar1.png" alt="Sala del Mar" className="sala-mar" />
                <span className="sala-text-mar">Sala del Mar</span>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#section5" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Dinosaurios1.png" alt="Dinosaurios" className="dinosaurios" />
                <span className="sala-text-dino">Dinosaurios entre nosotros</span>
              </a>
            </li>

            <li className="item">
              <a href="https://www.caracolbc.org/salas#section4" target="_blank" rel="noopener noreferrer" className="hover-container">
                <img src="/images/Atun1.png" alt="Sala Temporal" className="temporal2" />
                <span className="sala-text-atun">Aleta Azul, el Atún del Pacífico</span>
              </a>
            </li>
            <img src="/images/quarter.png" alt="quarter circle" className="quarter-visita" />
          </div>

          <img src="/images/checker.png" alt="quarter circle" className="checker-visita" />

          <p className="texto-visita2">Nuestro recorrido cuenta con una duración aproximada de 3 horas* </p>
          
          <div className="sensorama-container">
            <img src="/images/sensorama.png" alt="Sensorama" className="sensorama" />

            <div className="sensorama-texto">
              <p className="texto-sensorama1">Y exploren con <div className="texto-sensorama1-1">sensorama</div></p>
              <img src="/images/linea amarilla.png" alt="Linea Amarilla" className="linea-amarilla"/>

              <p className="texto-sensorama">
                Explora seres vivos, elementos de la naturaleza <br /> y objetos que tenemos en el museo, utilizando <br /> solamente tu tacto. 
                <span className="texto">¿Qué habrá ahí? ¿Será un <br /> alga o piel de serpiente?</span>
                <br /><br />
                <span className="texto2">Descúbrelo en este divertido taller. </span>
              </p>
              <p className="texto-sensorama2">
                <i class="ri-search-line"></i> Incluido en tu visita al museo <span className="texto3"> Para <br /> escuelas con más de 180 alumnos </span>
              </p>
            </div>
          </div>
        </section>

        <section id="section2" className="ciencia-aire-libre">
          <img src="/images/quarter-libre.png" alt="quarter circle" className="quarter-libre" />
          
          <img src="/images/CIENCIA-LIBRE.png" alt="Ciencia al Aire Libre" className="ciencia"/>

          <img src="/images/triangle-libre.png" alt="tirangulo" className="triangle-libre" />

          <p className="texto-ciencia"> <span className="bold-letter">Sumérgete</span> en esta experiencia <span className="bold-letter">única</span> y 
            <br /> conecta con la <span className="bold-letter">naturaleza</span>
          </p>

          <img src="/images/linea azul.png" alt="Linea Azul" className="linea-azul"/>

          <div className="actividades">
            <div className="paseo-bahia-container">
              <ImagBahia alt="Paseo por la Bahía" className="paseo-bahia"/>

              <div className="paseo-texto">
                <div className="texto-bahia">
                  <p className="titulo-paseo">Paseo en la bahía</p>
                  <p className="texto-paseo1">
                    Embárcate en una emocionante experiencia en barco mientras
                    observas y conoces las maravillas <br /> del mar.
                  </p>
                  <p className="texto-paseo2">
                    <span className="duracion-label-paseo">DURACIÓN</span> 
                    <i className="ri-time-line"></i> 1.5 horas aprox
                  </p>
                </div>
              </div>
            </div>

            <img src="/images/vector.png" alt="shape" className="shape-libre"/>

            <div  className="bufadora-container">
              
              <img src="images/Bufadora.jpg" alt="Bufadora" className="bufadora-movil"/>
              
              <div className="bufadora-texto">
                <div className="texto-bufadora">
                  <p className="titulo-bufadora">La bufadora desde <br /> el mar</p>
                  <p className="texto-bufadora1">Disfruta la mejor vista de la Bufadora mientras <br /> navegas y aprendes sobre las criaturas que habitan nuestras costas. </p>
                  <p className="texto-bufadora2">
                    <span className="duracion-label-bufadora">DURACIÓN</span> 
                    <i className="ri-time-line"></i> 4 horas aprox.
                  </p>
                </div>
              </div>
              <ImgBufadora alt="Bufadora" className="bufadora"/>
            </div>

            <div className="avistamiento-de-ballenas">
              <ImagBallena alt="Avistamiento de Ballenas" className="ballenas"/>
              
              <div className="ballenas-texto"> 
                <div className="texto-ballenas">
                  <p className="titulo-ballenas"> Avistamiento De <br /> Ballenas</p>
                  <p className="texto-ballenas1">Conoce la flora y fauna de la región, mientras aprendes sobre los ecosistemas que nos rodean.</p>
                  <p className="texto-ballenas2">
                    <span className="duracion-label-ballenas">DURACIÓN</span> 
                    <i className="ri-time-line"></i> 1.5 horas aprox.
                  </p>
                  <p className="texto-ballenas2">
                    <i class="ri-search-line"></i> Únicamente en temporada de migración
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img src="/images/checker-libre.png" alt="quarter circle" className="checker-libre" />
        </section>

        <section id="section3" className="mas-informacion">
          <p className="info1">Contactos</p>
          <img src="images/quarter-contact.png" alt="quarter circle" className="quarter-contacto" />

          <div className="mas-informacion-container">
            <div className="telefono-text">
              <i class="ri-phone-fill"></i>
              <p className="tel">Llama a los teléfonos</p>
              <p><a  href="tel:6461770897" className="tel1"><span className="highlight">(646)</span> 177-0897</a></p>
              <p><a href="tel:6461521993" className="tel2"><span className="highlight">(646)</span> 152-1993</a></p>
            </div>

            <div className="vertical-line"></div>

            <div className="correo-text">
              <i class="ri-mail-line"></i>
              <p className="correo">Correo Electrónico</p>
              <p><a href="mailto:paola@caracolbc.org" className="correo1">paola<span className="highlight">@</span>caracolbc.org</a></p>
            </div>

            <div className="vertical-line"></div>

            <div className="whatsapp-text">
              <p className="whatsapp">WhatsApp</p>
              <p><a className="whattel" href="https://wa.me/526464130544" target="_blank" rel="noopener noreferrer"><span className="highlight">(646)</span> 413-0544</a></p>
              <img src="images/Whatsapp escuelas 2.png" alt="QR WhatsApp" />
            </div>
          </div>

          <img src="images/vector-contact.png" alt="quarter circle" className="vector-contacto" />
        </section>

        <section id="section4" className="calendario">
          <p className="info2">Agenda tu Cita</p>
          <img src="images/vector-cita.png" alt="Vector Cita" className="vector-cita"/>
          <CalendarForm/>
        </section>

        <div className="documento-item2">
            <a href={Catalogoparaescuelas2025} target="_blank" className="download-link2" rel="noopener noreferrer">
              <i className="ri-download-line"></i>
              Descarga el Catalogo Oficial 2025
            </a>
            <img src="/images/checker-cita.png" alt="quarter circle" className="checker-cita" />
        </div>

        

        <section id="section5" className="documentos">

          <img src="images/quarter-doc.png" alt="checkers" className="quarter-doc" />
            <h3 className="doc-title">Documentos</h3>
          <img src="images/checker-doc.png" alt="checkers" className="checker-doc" />
          <div className="documentos-container">
              <div className="documento-item-lineamiento">
                <p className="documento">Lineamientos de <br /> visita</p>

                <div className="horizontal-line "></div>

                <a href="https://docs.google.com/document/d/1d8DB42UijXPfTSBcnfxs3xEnxCoqRkVDFJmj9UXXVl8/edit?tab=t.0" target="_blank" className="download-link" rel="noopener noreferrer">
                    Bajar Recurso <i class="ri-arrow-down-s-fill"></i>
                  </a>
              </div>
              <div className="documento-item-carta">
                <p className="documento">Carta de deslinde <br /> de responsabilidad</p>

                <div className="horizontal-line "></div>

                <a href="https://docs.google.com/document/d/1d8DB42UijXPfTSBcnfxs3xEnxCoqRkVDFJmj9UXXVl8/edit?tab=t.0" target="_blank" className="download-link" rel="noopener noreferrer">
                    Bajar Recurso <i class="ri-arrow-down-s-fill"></i>
                  </a>
              </div>
          </div>
        </section>

        <footer className="footer-ni">
          <Footer />
        </footer>

      </main>
    </Container>
  );
}

export default Escuelas;
