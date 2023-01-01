import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { API } from "../../Constants";
import axios from "axios";

interface ITicket {
  id: number;
  title: string;
  date: Date;
}

function Tickets() {
  const { user } = useContext(AuthContext);

  const [tickets, setTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    // Axios maka tickets by idUser

    if (user) {
      const idUser = user.idUser;

      // const _tickets: ITicket[] = [
      //   {
      //     id: 1,
      //     title: "Ticket 1",
      //     date: new Date(),
      //   },
      //   {
      //     id: 2,
      //     title: "Ticket 2",
      //     date: new Date(),
      //   },
      // ];

      // setTickets(_tickets);
    }
  }, [user]);

  const getAllTicket = async() => {
    try {
      await axios.get(`${API}/billet/get`);
    } catch (error) {
      alert("Une erreur s'est produite")
    }
  }

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr>
              <th scope="row">{ticket.id}</th>
              <td>{ticket.title}</td>
              <td>{ticket.date.toLocaleDateString("fr")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tickets;
