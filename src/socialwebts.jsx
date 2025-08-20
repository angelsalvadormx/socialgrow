import React from "react";
import { ElementRealFollowers } from "./ElementRealFollowers";
import { Frame } from "./Frame";
import { FrameWrapper } from "./FrameWrapper";
import image1 from "./image-1.png";
import line1 from "./line-1.svg";
import line3 from "./line-3.svg";
import line4 from "./line-4.svg";
import line5 from "./line-5.svg";
import logoGradientRed2 from "./logo-gradient-red-2.svg";
import servicios from "./servicios.png";
import star1 from "./star-1.svg";
import startButton from "./start-button.png";
import "./style.css";
import vector from "./vector.svg";

export const Desktop = () => {
    return (
        <div className="desktop" >
            <div className="div-4" >
                <div className="overlap-6" >
                    <div className="ellipse" />

                    <div className="ellipse-2" />

                    <img className="star" alt="Star" src={star1} />

                    <div className="ellipse-3" />

                    <div className="ellipse-4" />

                    <div className="ellipse-5" />

                    <div className="rectangle-3" />

                    <div className="frame-3" >
                        <div className="frame-4" >
                            <div className="text-wrapper-15" > Inicio </div>

                            < img className="servicios" alt="Servicios" src={servicios} />

                            <div className="text-wrapper-16" > Paquetes </div>

                            < div className="text-wrapper-16" > Testimonios </div>
                        </div>

                        < img className="line-2" alt="Line" src={line1} />
                    </div>

                    < img className="start-button" alt="Start button" src={startButton} />

                    <div className="text-wrapper-17" > SOCIAL GROWN </div>

                    < p className="mejora-tu-presencia" >
                        <span className="text-wrapper-18" > Mejora </span>

                        < span className="text-wrapper-19" >& nbsp; </span>

                        < span className="text-wrapper-20" > tu presencia en </span>

                        < span className="text-wrapper-19" >& nbsp; </span>

                        < span className="text-wrapper-18" > redes sociales </span>
                    </p>

                    < p className="text-wrapper-21" >
                        Ofrecemos followers, likes y comentarios para Tiktok, Instagram, y
                        más.
                    </p>

                    < div className="group-5" >
                        <div className="overlap-group-3" >
                            <div className="text-wrapper-22" > Explorar servicios </div>
                        </div>
                    </div>

                    < div className="ellipse-6" />

                    <div className="ellipse-7" />

                    <div className="ellipse-8" />

                    <div className="material-symbols" >
                        <img className="vector-3" alt="Vector" src={vector} />
                    </div>

                    < ElementRealFollowers />
                    <img className="image" alt="Image" src={image1} />

                    <div className="ellipse-9" />

                    <img
                        className="logo-gradient-red"
                        alt="Logo gradient red"
                        src={logoGradientRed2}
                    />

                    <img className="line-3" alt="Line" src={line5} />
                </div>

                < div className="text-wrapper-23" > Nuestros Servicios </div>

                < div className="text-wrapper-24" > Explora nuestros paquetes </div>

                < div className="text-wrapper-25" > Testimonios </div>

                < div className="ellipse-10" />

                <div className="overlap-7" >
                    <div className="ellipse-11" />

                    <Frame />
                </div>

                < div className="ellipse-12" />

                <FrameWrapper />
                < div className="group-6" >
                    <div className="overlap-8" >
                        <div className="ellipse-13" />

                        <div className="group-7" >
                            <div className="overlap-group-4" >
                                <p className="este-servicio-es" >
                                    &#34;Este servicio es increíble.Lo recomiendo a todos! &#34;
                                </p>

                                < img className="line-4" alt="Line" src={line3} />
                            </div>
                        </div>
                    </div>
                </div>

                < div className="group-8" >
                    <div className="overlap-8" >
                        <div className="ellipse-14" />

                        <div className="group-7" >
                            <div className="overlap-group-5" >
                                <p className="me-ayudaron-a" >
                                    &#34;Me ayudaron a conseguir lo que necesitaba
                                    rápidamente.&#34;
                                </p>

                                < img className="line-4" alt="Line" src={line4} />
                            </div>
                        </div>
                    </div>
                </div>

                < div className="ellipse-15" />

                <p className="text-wrapper-26" >
                    © 2024 Social grow.Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
};
