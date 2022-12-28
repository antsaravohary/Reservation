import React from "react";
import "./Home.css";
import Section1 from "./Section1";

function Section2() {
  return <div className="home-section home-section-2">Section 2</div>;
}

function Section3() {
  return (
    <div className="home-section home-section-3">
      <Footer />
    </div>
  );
}

function Footer() {
  return <div>Footer</div>;
}

function Home() {
  return (
    <div>
      <Section1 />
      {/* <Section2 />
      <Section3 /> */}
    </div>
  );
}

export default Home;
