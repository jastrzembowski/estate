import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import EstateSlider from "./components/EstateSlider";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import InputAdornment from "@mui/material/InputAdornment";
import arrow from "./images/arrow-right.svg"

export default function App() {
  return (
    <div className="app">
      <div>
        <section className="hero">
          <h1 className="hero__title">Find Property that are made for you.</h1>
          <p className="hero__body-text">
            Eveniet suscipit est, iusto dignissimos distinctio, nam beatae vel
            omnis eligendi blanditiis odio non. Eius ea natus neque.
          </p>
          <button className="btn cta-main">Get Started</button>
          <div className="achievements flex">
            <p>
              1200
              <span className="more-sign">+</span>
              <span className="subtext">Property Listed</span>
            </p>
            <p>
              4500
              <span className="more-sign">+</span>
              <span className="subtext">Happy Customers</span>
            </p>
            <p>
              240
              <span className="more-sign">+</span>
              <span className="subtext">Awards Won</span>
            </p>
          </div>
          <div className="search flex">
            <p className="search__heading">Search for homes in your budget</p>
            <div className="form">
              <Box
                component="form"
              style={{display: "flex", width: "100%", justifyContent: "space-evenly"}}
                noValidate
                autoComplete="off"
              >
                <TextField className="textfield"
                  select
                  label="Miasto"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <i
                          className="fa fa-location-arrow"
                          size="lg"
                          style={{ marginRight: "14px" }}
                        ></i>
                      </InputAdornment>
                    ),
                  }}
                >
                  {" "}
                  <MenuItem>Dowolne</MenuItem>
                  <MenuItem>Gdańsk</MenuItem>
                  <MenuItem>Sopot</MenuItem>
                  <MenuItem>Gdynia</MenuItem>
                </TextField>
                <TextField className="textfield"
                  select
                  label="Typ nieruchomości"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <i
                          className="fa fa-house-user"
                          size="lg"
                          style={{ marginRight: "14px" }}
                        ></i>
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem>Dowolny</MenuItem>
                  <MenuItem>Dom</MenuItem>
                  <MenuItem>Działka</MenuItem>
                  <MenuItem>Mieszkanie</MenuItem>
                  <MenuItem>Komercyjny</MenuItem>
                </TextField>
                <TextField className="textfield"
                  select
                  label="Typ transakcji"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <i
                          className="fa fa-coins"
                          size="lg"
                          style={{ marginRight: "14px" }}
                        ></i>
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem>Dowolny</MenuItem>
                  <MenuItem>Wynajem</MenuItem>
                  <MenuItem>Sprzedaż</MenuItem>
                </TextField>
              </Box>
            </div>
          </div>
        </section>
        <section className="popular">
          <div className="heading flex">
            <div>
              <p className="heading-label">Popular</p>
              <h3 className="sub-heading">Our Popular Residences</h3>
            </div>
            <a href="#">
              <div className="explore flex">
                <p>Explore All</p>
                <img src={arrow} alt="arrow" />
              </div>
            </a>
          </div>
          <EstateSlider />
        </section>
        <About />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
