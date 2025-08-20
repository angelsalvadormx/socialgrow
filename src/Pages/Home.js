import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import arrow from "../Img/start-arrow.svg";
import socialMedia from "../Img/socialMedia.svg";
import ShopIcon from "../Img/shop-icon.svg";
import icTiktok from "../Img/ic_tiktok.svg";
import icInta from "../Img/ic_instagram.svg";
import getExchangeRate from "../utils/dolar";
import { Check, ShoppingBag } from "lucide-react";
import TypingText from "./TypingTextEffect/TypingText";
import Elipse from "../Img/Ellipse 4.svg";
import Elipse5 from "../Img/Ellipse 5.svg";
import Elipse17 from "../Img/Ellipse 17.svg";
import Elipse18 from "../Img/Ellipse 18.svg";
import Elipse19 from "../Img/Ellipse 19.svg";
import Menu from "../components/Menu";

const Home = () => {
  const [services, setServices] = useState([]);
  const [plans, setPlans] = useState([]);
  const [testimonies, setTestimonies] = useState([]);
  const [priceCovertion, setPriceCovertion] = useState();

  const text = "Mejora tu presencia en redes sociales";
  const words = text.split(" ");

  useEffect(() => {
    axios
      .get("https://sandbox.colxsoft.com/socialgrow-com-mx/api/services")
      .then((response) => {
        setServices(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setServices]);

  useEffect(() => {
    axios
      .get("https://sandbox.colxsoft.com/socialgrow-com-mx/api/packages")
      .then((response) => {
        setPlans(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setPlans]);

  useEffect(() => {
    axios
      .get("https://sandbox.colxsoft.com/socialgrow-com-mx/api/testimonies")
      .then((response) => {
        setTestimonies(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setTestimonies]);

  getExchangeRate("USD", "MXN").then((precio) => {
    setPriceCovertion(precio);
    console.log(precio); // 18.73
  });

  const handleClick = (linkRedirect) => {
    window.open(linkRedirect, "_blank");
  };

  console.log(services);
  console.log(plans);
  console.log(testimonies);

  return (
    <div className="container">
      <div className="ellipse" />
      <Menu />

      <div className="ellipse4">
        <img src={Elipse}></img>
      </div>
      <div className="ellipse5">
        <img src={Elipse5}></img>
      </div>

      <div className="body-home">
        <div className="title-home">
          <div className="ellipse-blue"></div>
          <p>Social Grown</p>
        </div>
        <div className="group-text">
          <div className="text-mejora">
            {words.map((word, index) => (
              <span
                key={index}
                className="word"
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </div>
          <div className="subtitle-home">
            <p>
              Ofrecemos followers, likes y comentarios para Tiktok, Instagram, y
              más.
            </p>
            <button className="btn-services">Explorar servicios</button>
          </div>
        </div>
        <section id="aboutus">
        <div className="section-aboutus">          
          <div className="ellipse-arrow">
            <img className="img-arrow" src={arrow}></img>
          </div>
          <div className="description splitText">
            <div className="text-descrip">
              <p>100%</p>
              <p>Real</p>
              <p>followers</p>
            </div>
            <div className="img-socialMedia">
              <img src={socialMedia}></img>
            </div>
          </div>
        </div>
        </section>
        <section id="services">
        <div className="section-services ">
          <div className="title-services animatedServices">
            <p>Nuestros Servicios</p>
          </div>
          <div className="wrapper-card">
            {/* SERVICOS ------ */}
            {services.map((service) => (
              <div className="card">
                <div>
                  <div className="icon">
                    <img
                      class=""
                      src={service.name_service == "Tiktok" ? icTiktok : icInta}
                    ></img>
                  </div>
                </div>
                <div className="name-service">
                  <p>{service.name_service}</p>
                </div>
                <div className="description-service">
                  <p>{service.description}</p>
                </div>
                <div className="footer-card">
                  <div className="price">
                    <p>
                      {new Intl.NumberFormat("es-MX", {
                        style: "currency",
                        currency: "MXN",
                        maximumFractionDigits: 2,
                      }).format(priceCovertion * service.cost)}
                    </p>
                  </div>
                  <div>
                    <button onClick={() => handleClick(service?.buy_url)}>
                      <img src={ShopIcon}></img>Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
        <div className="ellipse18">
          <img src={Elipse18}></img>
        </div>
        <div className="ellipse19">
          <img src={Elipse19}></img>
        </div>
        <section id="plans">
        <div className="section-plans">
          <div className="title-plan">
            <p>Explora nuestros paquetes</p>
          </div>
          <div className="wrapper-plans fadeUp">
            {/* PLANES ---- */}
            {plans.map((plan) => (
              <div className="card-container">
                <div className="card-wrapper">
                  <div
                    className={plan.offer == true ? "active-card" : "card-plan"}
                  >
                    <div className="card-content">
                      <h1 className="card-title">{plan?.name_package}</h1>
                      <div className="card-features">
                        <div className="card-feature">
                          <span className="card-feature-text">
                            <Check className="card-check svg" />
                            {plan?.description}
                          </span>
                        </div>
                      </div>
                      <div className="card-price-container">
                        <span className="card-price">
                          {new Intl.NumberFormat("es-MX", {
                            style: "currency",
                            currency: "MXN",
                            maximumFractionDigits: 2,
                          }).format(priceCovertion * plan.cost)}
                        </span>
                      </div>
                      <div className="card-button-container">
                        <button
                          className="card-button"
                          onClick={() => handleClick(plan?.buy_url)}
                        >
                          <img src={ShopIcon} />
                          <span className="card-button-text">Comprar</span>
                        </button>
                      </div>
                    </div>
                    <div className="card-overlay"></div>
                  </div>
                  <div className="card-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
        <div>
          <img src={Elipse17}></img>
        </div>
        <section id="testimonies">
        <div className="section-testimonies">
          <div className="title-testimonies">
            <p>Testimonios</p>
          </div>
          <div className="wrapper-testimonies">
            {testimonies.map((testimony) => (
              <div className="box-testimony">
                <div className="ellipse-yellow"></div>
                <div className="card-testimonies">
                  <div className="linea"></div>
                  <div className="card-description">
                    <TypingText text={`"${testimony.testimony}"`} speed={50} />
                    <p>-{testimony.name_person}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        </section>
        <footer>
          <p>© 2024 Social Grow. Todos los derechos reservados.</p>
        </footer>
        <div className="boxEllipse">
          <div className="ellipseFooter"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
