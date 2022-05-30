import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";
import data from "./../data.json";
import "../prop.css";

export default class Properties extends React.Component {
  state = {
    active: false,
  };

  render() {
    return (
      <section className="properties-body">
        <div className="prop flex">
          <p className="search__heading">Wyszukiwarka Nieruchomości</p>
          <Box
            component="form"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              marginBottom: "30px"
            }}
            noValidate
            autoComplete="off"
          >
            <TextField select label="Miasto" className="textfield" style={{margin:"10px"}}>
              <MenuItem value="">Dowolne</MenuItem>
              <MenuItem value="Gdańsk">Gdańsk</MenuItem>
              <MenuItem value="Sopot">Sopot</MenuItem>
              <MenuItem value="Gdynia">Gdynia</MenuItem>
            </TextField>
            <TextField select label="Typ nieruchomości" className="textfield"  style={{margin:"10px"}}>
              <MenuItem value="dom">Dom</MenuItem>
              <MenuItem value="działka">Działka</MenuItem>
              <MenuItem value="mieszkanie">Mieszkanie</MenuItem>
              <MenuItem value="komercyjny">Komercyjny</MenuItem>
            </TextField>
            <TextField select label="Typ transakcji" className="textfield"  style={{margin:"10px"}}>
              <MenuItem value="wynajem">Wynajem</MenuItem>
              <MenuItem value="sprzedaż">Sprzedaż</MenuItem>
            </TextField>
          </Box>
          <div class="buttons-container">
            <button
              class="btn"
              onClick={
                this.state.active
                  ? (e) => this.setState({ active: false })
                  : (e) => this.setState({ active: true })
              }
            >
            {this.state.active ?  "MNIEJ" : "WIĘCEJ"}
            </button>
            <button class="btn">WYCZYŚĆ</button>
          </div>
          {this.state.active && (
            <Box className="additional-filter__container">
              <div className="filters">
                <div className="filter-container">
                  <h4 className="filter-title">Cena (PLN)</h4>
                  <div className="price-filter two-filters">
                    <TextField appearance="fill" label="od"></TextField>
                    <TextField appearance="fill" label="do"></TextField>
                  </div>
                </div>

                <div className="filter-container">
                  <h4 className="filter-title">Powierzchnia (mkw.)</h4>
                  <div className="area-filter two-filters">
                    <TextField appearance="fill" label="od"></TextField>
                    <TextField appearance="fill" label="do"></TextField>
                  </div>
                </div>

                <div className="filter-container">
                  <h4 className="filter-title">Piętro</h4>
                  <div className="floor-filter two-filters">
                    <TextField appearance="fill" label="od"></TextField>
                    <TextField appearance="fill" label="do"></TextField>
                  </div>
                </div>

                <div className="filter-container">
                  <h4 className="filter-title">Rok Budowy</h4>
                  <div className="year-filter two-filters">
                    <TextField appearance="fill" label="od"></TextField>
                    <TextField appearance="fill" label="do"></TextField>
                  </div>
                </div>

                <div className="filter-container">
                  <h4 className="filter-title">Liczba Pokoi</h4>
                  <div className="rooms-filter two-filters">
                    <TextField appearance="fill" label="od"></TextField>
                    <TextField appearance="fill" label="do"></TextField>
                  </div>
                </div>
              </div>
            </Box>
          )}
          <div className="properties-container">
            <div className="properties-grid">
              {data.map((offer) => (
                <div className="carousel-cell" key={offer.id}>
                  <div className="residence">
                    <div className="residence-image">
                      <img src={offer.img[0].url} alt="residence-image" />
                    </div>
                    <div className="info">
                      <p className="location">
                        {offer.city},{offer.distriction}
                      </p>
                      <div className="features flex">
                        <p className="rooms">{offer.rooms} bed</p>
                        <p className="size">
                          <i className="bx bxs-ruler"></i>
                          {offer.area} m<span className="power">2</span>
                        </p>
                        <p className="area">
                          {offer.area} m<span className="power">2</span>
                        </p>
                      </div>
                      <div className="residence-cta flex">
                       <Link to= {`${offer.id}`} offer="offer"> <button class="btn">SZCZEGÓŁY</button></Link>
                        <p className="price">{offer.price} ZŁ</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
