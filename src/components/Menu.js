import React, { useState } from "react";
import "./style.css";
import Logo from "../Img/Logo-gradient-red.svg";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      <div className="logo-img">
        <img src={Logo} width={85}></img>
      </div>
      <div className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Inicio</a>{" "}
          </li>
          <li>
            <a href="#services">Servicios</a>{" "}
          </li>
          <li>
            <a href="#plans">Paquetes</a>{" "}
          </li>
          <li>
            <a href="#testimonies">Testimonios</a>{" "}
          </li>
        </ul>
              <div className="btn-contacto-movile">
        <a>Contactanos</a>
      </div>
      </div>

      {/* Botón Hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close">&times;</span>
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>
      <div className="btn-contacto">
        <a>Contactanos</a>
      </div>
      <div className="line-2"></div>
    </div>
  );
};

export default Menu;
