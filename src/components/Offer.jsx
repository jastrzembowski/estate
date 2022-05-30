import React from "react";

export default function Offer(props) {
  return (
        <div className="residence">
          <div className="residence-image">
            <img
              src={props.offer.img[0].url}
              alt="residence-image"
            />
          </div>
          <div className="info">
            <p className="location">
              {props.offer.city}, {props.offer.distriction}
            </p>
            <div className="features flex">
              <p className="rooms">
                <i className="fa-solid fa-bed"></i>
                {props.offer.rooms} bed
              </p>
              <p className="size">
                <i className="fa-solid fa-ruler-combined"></i>
                {props.offer.area} m2
              </p>
              <p className="area">
                <i className="fa-solid fa-calendar"></i>
                Rok budowy:
                {props.offer.year}
              </p>
            </div>
            <div className="residence-cta flex">
              <button className="btn">SZCZEGÓŁY</button>
              <p className="price">{props.offer.price} ZŁ</p>
            </div>
          </div>
        </div>
   
  );
}
