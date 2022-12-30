import { useNavigate } from "react-router-dom";
import BlobBackground from "../../assets/blob.png";
import PlayingJazzIllustration from "../../assets/playing-jazz.png";

export default function Section1() {
  const navigate = useNavigate();

  return (
    <div
      className="home-section home-section-1"
      style={{
        background:
          "linear-gradient(24deg, rgba(63,142,251,1) 0%, rgba(169,255,225,1) 100%)",
      }}
    >
      <div className="row">
        <div className="content content-a col-xs-12 col-sm-12 col-md-6">
          <h1>Bienvenue sur le site de réservation de billet en ligne.</h1>
          <p>
            C'est un site qui permet de reserver les billets en ligne, conçu
            pour vous faire gagner du temps. Alors n'hesitez pas à cliquer sur
            le bouton <span style={{ fontWeight: "bold" }}>Découvrir</span> pour
            en savoir plus!
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/reservation/concerts")}
          >
            Découvrir
          </button>
        </div>
        <div className="content content-b col-xs-12 col-sm-12 col-md-6">
          <img src={PlayingJazzIllustration} alt="" />
        </div>
      </div>
    </div>
  );
}
