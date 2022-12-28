import React from "react";
import icon from "../assets/react.svg";
import { BsCart } from "react-icons/bs";

interface Props {
  title: string;
  price: number;
}
function CardConcert({ title, price }: Props) {
  return (
    <div className="card" style={{ width: "300px" }}>
      <img src={icon} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title" style={{ textAlign: "center" }}>
          {title}
        </h3>
        <p className="card-text" style={{ textAlign: "center" }}>
          {price}
        </p>
        <a
          href="#"
          className="btn btn-primary"
          style={{ display: "block", textAlign: "center", width: "100%" }}
        >
          Reserver <BsCart />
        </a>
      </div>
    </div>
  );
}

export default CardConcert;
