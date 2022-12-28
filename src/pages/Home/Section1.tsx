import BlobBackground from "../../assets/blob.png";
import PlayingJazzIllustration from "../../assets/playing-jazz.png";

export default function Section1() {
  return (
    <div className="home-section home-section-1">
      <div className="row">
        <div className="content content-a col-xs-12 col-sm-12 col-md-6">
          <h1>Commodo mollit dolore minim esse.</h1>
          <p>
            Tempor nulla incididunt aliqua nulla magna aliquip nisi dolor ad
            dolor irure sit pariatur. Commodo officia tempor voluptate sit
            officia aliqua consectetur anim laborum. Qui ea reprehenderit non
            est.
          </p>
          <button type="button" className="btn btn-primary btn-lg">
            Discover More
          </button>
        </div>
        <div className="content content-b col-xs-12 col-sm-12 col-md-6">
          <img src={PlayingJazzIllustration} alt="" />
        </div>
      </div>
    </div>
  );
}
