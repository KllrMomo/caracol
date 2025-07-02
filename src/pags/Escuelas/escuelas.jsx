import React, { useRef, useState } from "react";
import {Container} from "@mui/material";
import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
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
            <p className="banner-texto1">¡Trae a tus estudiantes a vivir la experiencia Caracol!</p>
            <p className="banner-texto2">Martes a Domingo <br /> 10:00 am a 5:00 pm</p>
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
              <p className="texto-sensorama">Explora seres vivos, elementos de la naturaleza y objetos que tenemos en el museo, utilizando solamente tu tacto. <br />
              ¿Qué habrá ahí? ¿Será un alga o piel de serpiente? Descúbrelo en este divertido taller. </p>

              <p className="texto-sensorama2">Incluido en tu visita para escuelas con más de 180 alumnos</p>
            </div>

            
          </div>
          <img src="/images/PROGRAMA-RECORIDO.png" alt="Programa tu Recorrido" className="recorrido"/>
          
          <p className="texto-recorrido">
            En horario de: <br />
            Martes a Domingo <br />
            9:00 am a 4:00 pm
          </p>

          <img src="/images/DISPONIBILIDAD-visita.png" alt="Disponibilidad" className="disponibilidad-visita"/>
          <img src="/images/Disponibilidad-movil.png" alt="Calendario" className="disponibilidad-visita-movil"/>
        </section>

        <section className="ciencia-aire-libre">
          <img src="/images/CIENCIA-LIBRE.png" alt="Ciencia al Aire Libre" className="ciencia"/>

          <p className="texto-ciencia">Descubre las maravillas de nuestros ecosistemas y aprende sobre su flora y fauna en los <br />recorridos interpretativos que tenemos para tus alumnos.</p>
          <p className="texto-ciencia2">*Mínimo 30 alumnos</p>

          <div className="paseo-bahia-container">
            <img src="/images/paseo-bahia.png" alt="Paseo por la Bahía" className="paseo-bahia"/>
            <p className="titulo-paseo">PASEO EN LA BAHÍA</p>
            <p className="texto-paseo1">Embárcate en una emocionante <br />experiencia en barco mientras <br /> observas y conoces las <br />maravillas del mar.</p>
            <p className="texto-paseo2">Duración: <br /> 1.5 horas aprox.</p>
          </div>

          <div  className="bufadora-container">
            <img src="/images/Bufadora.png" alt="Bufadora" className="bufadora"/>
            <p className="titulo-bufadora">LA BUFADORA DESDE EL MAR</p>
            <p className="texto-bufadora1">Disfruta la mejor vista de la Bufadora mientras navegas y aprendes sobre las criaturas que habitan nuestras costas.</p>
            <p className="texto-bufadora2">Duración: <br /> 4 horas aprox.</p>
          </div>

          <div className="avistamiento-de-ballenas">
            <img src="/images/Ballenas.png" alt="Avistamiento de Ballenas" className="ballenas"/>
            <div className="texto-ballenas-container"> 
              <p className="titulo-ballenas">AVISTAMIENTO DE BALLENAS</p>
              <p className="texto-ballenas1">Conoce la flora y fauna de la región, mientras aprendes sobre los ecosistemas que nos rodean.</p>
              <p className="texto-ballenas2">Duración: <br /> 1.5 horas aprox.</p>
            </div>
          </div>
          
          <img src="/images/SUMERGETE.png" alt="SUMERGETE" className="sumergete"/>

          <img src="/images/SUMERGETE-movil.png" alt="SUMERGETE" className="sumergete-movil"/>

          <img src="/images/DISPONIBILIDAD-ciencia.png" alt="Programa Ciencia al Aire Libre" className="disponibilidad-ciencia"/>

          <img src="/images/Disponibilidad-ciencia-movil.png" alt="Programa Ciencia al Aire Libre" className="disponibilidad-ciencia-movil"/>
        </section>

        <section className="final">
          <p className="texto-final">Todas nuestras exhibiciones/actividades están disponibles para los niveles de preescolar hasta universidad.</p>

          <img src="images/perder.png" alt="Nadie se tiene que perder de la diversión"  className="perder"/>

          <img src="images/Perder-movil.png" alt="Nadie se tiene que perder de la diversión"  className="perder-movil"/>

          <p className="texto-final2">(restricciones aplican)</p>

        </section>

        <section className="mas-informacion">
          <p className="info1">Para más información no dudes en contactarnos</p>
          <div className="mas-informacion-container">
            <div className="telefono-text">
              <p className="tel">Teléfono</p>
              <p className="tel1"><a  href="tel:6461770897">(646) 177-0897</a></p>
              <p className="tel2"><a href="tel:6461521993">(646) 152-1993</a></p>
            </div>
            <div className="correo-text">
              <p className="correo">Correo Electrónico</p>
              <p className="correo1"><a href="mailto:paola@caracolbc.org">paola@caracolbc.org</a></p>
            </div>
            <div className="whatsapp-text">
              <p className="whatsapp">WhatsApp</p>
              <p><a className="whattel" href="https://wa.me/526464130544"> (646) 413-0544</a></p>
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