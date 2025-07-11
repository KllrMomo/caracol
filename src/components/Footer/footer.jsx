import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content-top">
                     <div className="footer-social">
                        <img src="images/logo-footer.png" alt="Logo de Caracol" />
                        <div className="social-icon">
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
                    </div>
                    
                    <div className="footer-explora">
                        <h5 className="title">Explora</h5>
                        <div className="footer-explora-links">
                            <li className="explora-item">
                                <a href="#">
                                    <i className="ri-arrow-right-double-fill"></i>Conócenos
                                </a>
                            </li>
                            <li className="explora-item">
                                <a href="#">
                                    <i className="ri-arrow-right-double-fill"></i>Visítanos
                                </a>
                            </li>
                            <li className="explora-item">
                                <a href="#">
                                    <i className="ri-arrow-right-double-fill"></i>Descubre
                                </a>
                            </li>
                            <li className="explora-item">
                                <a href="#">
                                    <i className="ri-arrow-right-double-fill"></i>Salas
                                </a>
                            </li>
                        </div>
                    </div>
                    <div className="footer-enlaces">
                        <h5 className="title">Enlaces útiles</h5>
                        <div className="footer-enlaces-links">
                            <li className="enlaces-item">
                                <a href="#">
                                    <i className="ri-arrow-right-double-fill"></i>Contáctanos
                                </a>
                            </li>
                            <li className="enlaces-item">
                                <a href="#">
                                    <i className="ri-arrow-right-double-fill"></i>Recursos didácticos
                                </a>
                            </li>
                            <li className="enlaces-item">
                                <a href="#">
                                    <i className="ri-arrow-right-double-fill"></i>Donaciones
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="footer-content-bottom">
                <p>Caracol - Museo de Ciencias V1.02 Derechos reservados - 2021-</p>
            </div>*/}

            <div className="footer-shapes">
                <img src="images/shape.png" alt="puntitos"  className="footer-shape"/>
                <img src="images/shape-1.png" alt="rayitas"  className="footer-shape1"/>
            </div>
            
        </footer>
    );
}
export default Footer;