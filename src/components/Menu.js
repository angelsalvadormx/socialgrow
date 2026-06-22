/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./style.css";
import Logo from "../Img/Logo-gradient-red.svg";
import axios from "axios";
import { contact_mock } from "../mockdata/contect";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contacto, setContacto] = useState("");
  const message = "¡Hola! Estoy interesado en servicio";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_API}/api/contacto`)
      .then((response) => {
        setContacto(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setContacto(contact_mock);
      });
  }, [setContacto]);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${contacto[0]?.valor}?text=${encodedMessage}`;
  return (
    <div className="menu">
      <div className="menu-inner">
        <a className="logo-img" href="#">
          <img className="logo-mark" src={Logo} alt="logo-img"></img>
          <span className="logo-word">Social Grow</span>
        </a>
        <div className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#plans">Paquetes</a>
            </li>
            <li>
              <a href="#testimonies">Testimonios</a>
            </li>
          </ul>
          <div>
            <a className="btn-contacto-movile" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Contáctanos
            </a>
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
        <a className="btn-contacto" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contáctanos</a>
      </div>
    </div>
  );
};

export default Menu;
