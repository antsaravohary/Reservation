import React, { useEffect, useState } from "react";
import Section2 from "../Home/CardConcertFull";
import { useParams } from "react-router-dom";
import { IConcert } from "../../components/CardConcert";
import axios from "axios";
import { API } from "../../Constants";
import Concert from  '../../models/ConcertsReservation'

function SingleReservation() {
  const [concert, setConcert] = useState<null | IConcert>(null);

  const { concertId } = useParams<{
    concertId: string;
  }>();

  useEffect(() => {
    if (concertId) {
      getConcertById()
    }
  }, [concertId]);

  const getConcertById = async () =>{
      try {
        const res = await axios.get(`${API}/concerts/getConcert/${concertId}`)
        setConcert(res.data)
      } catch (error) {
        alert("Une erreur s'est produite")
      }
  }

  console.log("Reservation id:", concertId)

  return (
    <div>
      <Section2 
        id={concert.id}
        title={concert?.title}
        price={concert?.price}
        date={concert?.date}
      />
    </div>
  );
}

export default SingleReservation;
