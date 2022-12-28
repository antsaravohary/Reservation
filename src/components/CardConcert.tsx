import React from "react";
import icon from "../assets/react.svg";
import { BsCart } from "react-icons/bs";

interface Props {
  title: string;
  price: number;
  date?: Date;
}

function CardConcert({ title, price, date }: Props) {
  return (
    <div className="card" style={{ width: "300px" }}>
      <img src={icon} className="card-img-top" alt="..." />
      <div className="card-body d-flex justify-content-around">
        <div className="row align-items-center">
          <h4>Date</h4>
        </div>
        <div>
          <h3 className="card-title" style={{ textAlign: "center" }}>
            {title}
          </h3>
          <p className="card-text" style={{ textAlign: "center" }}>
            {price} Ar
          </p>
        </div>
      </div>
      <a
        href="#"
        className="btn btn-primary d-block mb-3"
        style={{ alignSelf: "center", width: "50%" }}
      >
        Réserver <BsCart size={20} />
      </a>
    </div>
  );
}

export default CardConcert;
