import { BiHome } from "react-icons/all";

function Footer() {
  return (
    <div className="footer row">
      <div className="col-xs-6 col-sm-3">
        <h1>Réservation en ligne</h1>
        <p>
          Vous pouvez reserver le concert de vos artistes preferés en toute sécurité sur ce site.
        </p>
      </div>
      <div className="col-xs-6 col-sm-3">
        <h1>Liens rapide</h1>
        <div
          className="list-group"
          style={{
            marginTop: 20,
          }}
        >
          <a href="#" className="list-group-item list-group-item-action">
            Notre page facebook
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Suivez-nous sur twitter
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Suivez-nous sur instagram
          </a>
        </div>
      </div>
      <div className="col-xs-6 col-sm-3">
        <h1>Nouveautés</h1>
        <div
          className="list-group"
          style={{
            marginTop: 20,
          }}
        >
          <a href="#" className="list-group-item list-group-item-action">
            Product 1
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Product 2
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Product 3
          </a>
        </div>
      </div>
      <div className="col-xs-6 col-sm-3">
        <h1>Aides</h1>
        <div
          className="list-group"
          style={{
            marginTop: 20,
          }}
        >
          <a href="#" className="list-group-item list-group-item-action">
            Questions souvent posés
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Terms & Conditions
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Politique de confidentialités
          </a>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="item col-xs-12 col-sm-4">
      <BiHome fontSize={70} />
      <h3>Some title</h3>
      <p>
        Reserver en toute securité sur notre site
      </p>
    </div>
  );
}

export default function Section3() {
  return (
    <div className="home-section home-section-3">
      <div className="content-a row" style={{backgroundColor:'#2E8BC0'}}>
        <Item />
        <Item />
        <Item />
      </div>
      <Footer />
    </div>
  );
}
