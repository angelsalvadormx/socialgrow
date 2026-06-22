import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import arrow from "../Img/start-arrow.svg";
import socialMedia from "../Img/socialMedia.svg";
import ShopIcon from "../Img/shop-icon.svg";
import icTiktok from "../Img/ic_tiktok.svg";
import icInta from "../Img/ic_instagram.svg";
import getExchangeRate from "../utils/dolar";
import { Check } from "lucide-react";
import TypingText from "./TypingTextEffect/TypingText";
import Menu from "../components/Menu";
import useIsSafari from "../utils/detectorNav";
import { services_mock } from "../mockdata/services";
import { packages_mock } from "../mockdata/packages";

const TICKER_ITEMS = [
  "TIKTOK",
  "INSTAGRAM",
  "FACEBOOK",
  "SEGUIDORES",
  "LIKES",
  "COMENTARIOS",
  "CRECIMIENTO REAL",
];

const Home = () => {
  const [services, setServices] = useState([]);
  const [plans, setPlans] = useState([]);
  const [testimonies, setTestimonies] = useState([]);
  const [priceCovertion, setPriceCovertion] = useState();

  const text = "Crece en redes sociales de verdad";
  const words = text.split(" ");

  useEffect(() => {
    axios
      .get("https://sandbox.colxsoft.com/socialgrow-com-mx/api/services")
      .then((response) => {
        setServices(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setServices(services_mock);
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
        setPlans(packages_mock);
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

  useEffect(() => {
    getExchangeRate("USD", "MXN").then((precio) => {
      setPriceCovertion(precio);
    });
  }, []);

  const formatPrice = (cost) => {
    if (!priceCovertion) return "Calculando...";
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 2,
    }).format(priceCovertion * cost);
  };

  const handleClick = (linkRedirect) => {
    window.open(linkRedirect, "_blank");
  };

  const redirectService = () => {
    window.location.href = "#services";
  };

  const isSafari = useIsSafari();

  return (
    <div className="container">
      <Menu />
      <div className="body-home">
        <section id="aboutus">
          <div className="hero">
            <div className="hero-copy">
              <span className="eyebrow">Agencia de crecimiento digital</span>
              {isSafari ? (
                <h1 className="text-mejora">{text}</h1>
              ) : (
                <h1 className="text-mejora group-text">
                  {words.map((word, index) => (
                    <span key={index} className={`word delay-${index}`}>
                      {word}&nbsp;
                    </span>
                  ))}
                </h1>
              )}
              <div className="subtitle-home">
                <p>
                  Ofrecemos followers, likes y comentarios reales para
                  TikTok, Instagram, y más.
                </p>
                <a href="#services">
                  <button className="btn-services">Explorar servicios</button>
                </a>
              </div>
            </div>

            <div className="hero-stat splitText">
              <img className="hero-stat-bg" src={socialMedia} alt="" />
              <div className="hero-stat-content">
                <p className="hero-stat-number">100%</p>
                <p className="hero-stat-label">
                  Real <span>followers</span>
                </p>
              </div>
            </div>

            <div className="scroll-cue" onClick={() => redirectService()}>
              <span>Descubre más</span>
              <div className="scroll-cue-circle">
                <img className="img-arrow" src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
              <span className="ticker-item" key={`${item}-${index}`}>
                {item}
                <span className="ticker-dot">·</span>
              </span>
            ))}
          </div>
        </div>

        <section id="services">
          <div className="section-services">
            <span className="eyebrow animatedServices">Servicios</span>
            <h2 className="title-services animatedServices">
              Elige tu plataforma
            </h2>
            <div className="wrapper-card">
              {services.map((service, index) => (
                <div className="card" key={service.folio}>
                  <span className="card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="icon">
                    <img
                      src={
                        service.name_service === "Tiktok" ? icTiktok : icInta
                      }
                      alt="service-icon"
                    />
                  </div>
                  <div className="name-service">
                    <p>{service.name_service}</p>
                  </div>
                  <div className="description-service">
                    <p>{service.description}</p>
                  </div>
                  <div className="footer-card">
                    <div className="price">
                      <p>{formatPrice(service.cost)}</p>
                    </div>
                    <div>
                      <button onClick={() => handleClick(service?.buy_url)}>
                        <img src={ShopIcon} alt="comprar" />
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans">
          <div className="section-plans">
            <span className="eyebrow">Paquetes</span>
            <h2 className="title-plan">Explora nuestros paquetes</h2>
            <div className="wrapper-plans fadeUp">
              {plans.map((plan) => (
                <div className="card-container" key={plan.folio}>
                  <div className="card-wrapper">
                    <div
                      className={
                        plan.offer === true ? "active-card" : "card-plan"
                      }
                    >
                      <div className="card-content">
                        <div className="card-title-row">
                          <h3 className="card-title">{plan?.name_package}</h3>
                          {plan.offer === true && (
                            <span className="plan-tag">Más popular</span>
                          )}
                        </div>
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
                            {formatPrice(plan.cost)}
                          </span>
                        </div>
                        <div className="card-button-container">
                          <button
                            className="card-button"
                            onClick={() => handleClick(plan?.buy_url)}
                          >
                            <img src={ShopIcon} alt="compra" />
                            <span className="card-button-text">Comprar</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonies">
          <div className="section-testimonies">
            <span className="eyebrow">Testimonios</span>
            <h2 className="title-testimonies">Lo que dicen de nosotros</h2>
            <div className="wrapper-testimonies">
              {testimonies
                .filter((testimony) => testimony.show)
                .map((testimony) => (
                  <div className="box-testimony" key={testimony.name_person}>
                    <div className="card-testimonies">
                      <span className="quote-mark">”</span>
                      <div className="card-description">
                        <TypingText
                          text={`"${testimony.testimony}"`}
                          speed={50}
                        />
                        <p>—{testimony.name_person}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-inner">
            <span className="footer-brand">Social Grow</span>
            <p>
              © {new Date().getFullYear()} Social Grow. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
