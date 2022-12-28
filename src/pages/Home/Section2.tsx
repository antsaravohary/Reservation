import ReactLogo from "../../assets/react.svg";

export default function Section2() {
  return (
    <div className="home-section home-section-2">
      <div className="row">
        <div className="content content-a col-xs-12 col-sm-12 col-md-6">
          <img src={ReactLogo} alt="" />
        </div>
        <div className="content content-b col-xs-12 col-sm-12 col-md-6">
          <h1>Adipisicing qui laboris pariatur duis occaecat.</h1>
          <p>
            Ad velit ut et veniam cupidatat enim eiusmod mollit eiusmod.
            Adipisicing minim id sit amet quis incididunt exercitation dolor ea.
            Et commodo ut enim enim sunt do cillum. Elit excepteur do excepteur
            est minim tempor qui do do. Ad deserunt elit occaecat veniam enim
            excepteur nulla esse. Nostrud anim sint incididunt nostrud irure
            excepteur ut consectetur consequat. Proident reprehenderit aliquip
            sunt sunt sit cupidatat sunt quis qui anim nostrud sint.
          </p>
          <button type="button" className="btn btn-primary btn-lg">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
