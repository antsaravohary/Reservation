import React, { useEffect, useState } from "react";
import "./Home.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { IConcert } from "../../components/CardConcert";
import StyledNavbar from "../StyledNavbar";

function Home() {
  const [concerts, setConcerts] = useState<IConcert[]>([]);

  useEffect(() => {
    // Axios Get all Concerts
    const _concerts: IConcert[] = [
      {
        id: 1,
        price: 1000,
        title: "Title 1",
        date: new Date(),
      },
      {
        id: 2,
        price: 1000,
        title: "Title 2",
        date: new Date(),
      },
      {
        id: 3,
        price: 1000,
        title: "Title 3",
        date: new Date(),
      },
      {
        id: 4,
        price: 1000,
        title: "Title 4",
        date: new Date(),
      },
    ];
    setConcerts(_concerts);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Section1 />
        <Section2 concerts={concerts} />
        <Section3 />
      </div>
    </>
  );
}

export default Home;
