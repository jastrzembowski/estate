import React from "react";
import { useParams } from "react-router-dom";
import data from "./../data.json";
import "../propDetails.css";
import Slider from "react-slick";
import { TextField } from "@mui/material";
export default function PropertyDetails() {
  const { id } = useParams();
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    autoplayspeed: 500,
    infinite: true,
  };
  return (
    <div className="details-container">
      <div className="slider-container">
        <Slider {...settings}>
          <img src={data[`${id}`].img[0].url} alt="slider-photo"></img>
          <img src={data[`${id}`].img[1].url} alt="slider-photo"></img>
        </Slider>
        <div className="description-body">
          <h3 className="description-title">Opis</h3>
          <h6 className="description-subtitle">
            {" "}
            {data[`${id}`].descriptionTitle}
          </h6>
          <br />
          {data[`${id}`].description}{" "}
        </div>
      </div>
      <div className="prop-flex">
        <div className="col-sm-1">
          <section className="body col-sm-11">
            <div className="main-container">
              <div className="description-container col-sm-12 col-xs-12 col-md-5 param-container">
                <div className="title">
                  <h1 className="property-title">
                    {data[`${id}`].city}, {data[`${id}`].distriction},
                    {data[`${id}`].area} m<span class="power">2</span>,
                    {data[`${id}`].rooms}
                    {data[`${id}`].rooms === 1 ? (
                      <span> pokój </span>
                    ) : (
                      <span> pokoje </span>
                    )}
                  </h1>

                  <h3 className="property-subtitle">
                    {" "}
                    {data[`${id}`].subtitle}
                  </h3>
                </div>

                <div className="price">
                  <h1 className="property-price text-center">
                    <b>
                      <span> {data[`${id}`].price} zł </span>
                    </b>
                  </h1>
                </div>

                <h3 className="features-title text-center">Parametry oferty</h3>
                <div className="parameters-container">
                  <div className="col-sm-6 offer-parameter">
                    <strong>Typ nieruchomości: </strong>
                    {data[`${id}`].type}
                  </div>

                  <div className="col-sm-6 offer-parameter">
                    <strong>Typ transakcji: </strong>
                    {data[`${id}`].transactionType}
                  </div>

                  <div className="col-sm-6 offer-parameter">
                    <strong>Powierzchnia: </strong>
                    {data[`${id}`].area} m<span class="power">2</span>
                  </div>

                  <div className="col-sm-6 offer-parameter">
                    <strong>Rok Budowy: </strong>
                    {data[`${id}`].year}
                  </div>

                  <div className="col-sm-6 offer-parameter">
                    <strong>Nr Oferty: </strong>
                    {data[`${id}`].offer}
                  </div>

                  <div className="col-sm-6 offer-parameter">
                    <strong>Liczba pokoi: </strong>
                    {data[`${id}`].rooms}{" "}
                  </div>

                  <div className="col-sm-6 offer-parameter">
                    <strong>Piętro: </strong>
                    {data[`${id}`].floor}{" "}
                  </div>
                </div>
                <div>
                  <h3 className="features-title text-center">Cechy oferty</h3>
                  <div className="features-container">
                    {data[`${id}`].features.map((feature) => (
                      <div><p>{feature}</p></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ clear: "both" }}></div>

            <div className="form-container">
              <br />

              <div className="col-sm-1 form-offer-box"></div>

              <div class="contact-body col-sm-3">
                <div class="form-container">
                  <TextField
                    id="standard-basic"
                    label="Imię"
                    variant="standard"
                    style={{
                      padding: "15px",
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Telefon"
                    variant="standard"
                    style={{
                      padding: "15px",
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    style={{
                      padding: "15px",
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Wiadomość"
                    multiline
                    variant="standard"
                    style={{
                      padding: "15px",
                    }}
                  />

                  <button
                    mat-raised-button
                    color="primary"
                    type="submit"
                    className="btn prop-btn"
                  >
                    Wyślij
                  </button>
                </div>
              </div>

              <div className="agent-container">
                <h3 className="agent-title">Skontaktuj się z agentem</h3>

                <div className="agent-body">
                  <h3 className="agent-name"> {data[`${id}`].agent.name}</h3>
                  <h6 className="agent-company">
                    {" "}
                    {data[`${id}`].agent.agency}
                  </h6>

                  <div className="agent-photo__container">
                    <img
                      src={data[`${id}`].agent.photo}
                      alt="Agent"
                      className="agent-photo"
                    />
                  </div>

                  <div className="agent-phone__container">
                    <a
                      href="tel:{{ property.agent.phone }}"
                      className="agent-phone"
                    >
                      {" "}
                      {data[`${id}`].agent.phone}
                    </a>
                  </div>

                  <div className="agent-email__container">
                    <a
                      href="mailto: { data[`${id}`].agent.email }"
                      className="agent-email"
                    >
                      {" "}
                      {data[`${id}`].agent.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
