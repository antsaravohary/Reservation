import React, { useEffect, useState } from "react";
import CardConcert, { IConcert } from "../../components/CardConcert";

function Concert() {
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
        title: "Title 1",
        date: new Date(),
      },
      {
        id: 3,
        price: 1000,
        title: "Title 1",
        date: new Date(),
      },
      {
        id: 4,
        price: 1000,
        title: "Title 1",
        date: new Date(),
      },
    ];
    setConcerts(_concerts);
  }, []);

  return (
    <div
      className="row"
      style={{
        padding: 20,
      }}
    >
      {concerts.map((concert) => (
        <CardConcert key={concert.id} {...concert} />
      ))}
    </div>
  );
}

export default Concert;
