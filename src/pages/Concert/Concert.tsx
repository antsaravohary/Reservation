import React, { useEffect, useState } from "react";
import axios from "axios";
import CardConcert, { IConcert } from "../../components/CardConcert";
import { API } from "../../Constants";

function Concert() {
  const [concerts, setConcerts] = useState<IConcert[]>([]);

  const fetchData = async ()=> {
    const response = await axios(`${API}/concerts/getAll`)
    const concert = response.data
    console.log("concerts: " + concert);
    
  }

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
    fetchData()
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
