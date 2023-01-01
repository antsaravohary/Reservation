import React from "react";
import icon from "../assets/react.svg";
import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export interface IConcert {
  id: number;
  title: string;
  price: number;
  date?: Date;
}

function CardConcert({ id, title, price, date }: IConcert) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="card" style={{ width: "300px" }}>
        <h3 className="card-title text-primary" style={{ textAlign: "center" }}>
          {title}
        </h3>
        <img src={icon} className="card-img-top" alt="..." />
        <div className="card-body d-flex justify-content-around">
          <div className="row align-items-center">
            <h6>{date?.toLocaleDateString("fr")}</h6>
          </div>
          <div>
            <p className="card-text">{price} £</p>
          </div>
        </div>
        <Link
          to={`/reservation/concerts/${id}`}
          className="btn btn-primary d-block mb-3"
          style={{ alignSelf: "center", width: "50%" }}
        >
          Réserver <BsCart size={20} />
        </Link>
      </div>
    </div>
  );
}

export default CardConcert;
