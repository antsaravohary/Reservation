import { useNavigate } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";
import { IConcert } from "../../components/CardConcert";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function CardConcertFull({ id, price, title, date }: IConcert) {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleButtonValidate = () => {
    if (user) {
      navigate("/reservation/concerts");

      // Axios post with idConcert + idUser
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="home-section home-section-2">
      <div className="row">
        <div className="content content-a col-xs-12 col-sm-12 col-md-6">
          <img src={ReactLogo} alt="" />
        </div>
        <div className="content content-b col-xs-12 col-sm-12 col-md-6">
          <h1>{title}</h1>
          <div className="d-flex justify-content-between">
            <div className="row align-items-center" style={{ marginRight: 40 }}>
              <h4>{date?.toLocaleDateString("fr")}</h4>
            </div>
            <p>
              Voici le dernier concert en nouveauté qui est annoncé par le
              plateforme. N'attendez plus à reserver vos billets et soyez les
              premiers à etre sur la liste.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => handleButtonValidate()}
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}
