import icon from "../../assets/react.svg";
import CardConcert, { IConcert } from "../../components/CardConcert";

export default function Section2({ concerts }: { concerts: IConcert[] }) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{
        width: 300,
        height: "60%",
        alignSelf: "center",
        marginTop: 20,
      }}
    >
      <div className="carousel-inner">
        {concerts.slice(2).map((concert, index) => (
          <div
            key={concert.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <CardConcert {...concert} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        style={{
          marginLeft: -100,
        }}
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{
            backgroundColor: "blue",
          }}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        style={{
          marginRight: -100,
        }}
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{
            backgroundColor: "blue",
          }}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
