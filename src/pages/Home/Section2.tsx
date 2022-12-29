import ReactLogo from "../../assets/react.svg";

export default function Section2() {
  return (
    <div className="home-section home-section-2">
      <div className="row">
        <div className="content content-a col-xs-12 col-sm-12 col-md-6">
          <img src={ReactLogo} alt="" />
        </div>
        <div className="content content-b col-xs-12 col-sm-12 col-md-6">
          <h1>Concert de Dadju</h1>
          <div className="d-flex justify-content-between">
            <div className="row align-items-center" style={{ marginRight: 40 }}>
              <h4>Date</h4>
            </div>
            <p>
              Voici le dernier concert en nouveauté qui est annoncé par le
              plateforme. N'attendez plus à reserver vos billets et soyez les premiers à etre sur la liste.
            </p>
          </div>

          <button type="button" className="btn btn-primary btn-lg">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}
