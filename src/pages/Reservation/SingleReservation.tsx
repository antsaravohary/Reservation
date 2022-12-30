import React, { useEffect, useState } from "react";
import Section2 from "../Home/CardConcertFull";
import { useParams } from "react-router-dom";
import { IConcert } from "../../components/CardConcert";

function SingleReservation() {
  const [concert, setConcert] = useState<null | IConcert>(null);

  const { concertId } = useParams<{
    concertId: string;
  }>();

  useEffect(() => {
    if (concertId) {
      // Axios Get concert by id
    }
  }, [concertId]);

  return (
    <div>
      <Section2
        id={1}
        title="Labore consequat pariatur esse reprehenderit."
        price={0}
        date={new Date()}
      />
    </div>
  );
}

export default SingleReservation;
