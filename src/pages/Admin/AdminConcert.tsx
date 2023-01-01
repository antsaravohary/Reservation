import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import Concert from "../../models/Concert";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../Constants";
import Salle from "../../models/Salle";
import Artist from "../../models/Artist";
import { MultiSelect } from "react-multi-select-component";

function AdminConcert() {
  const navigate = useNavigate();

  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [salles, setSalles] = useState<Salle[]>([]);

  const getConcert = async () => {
    const response = await axios(`${API}/concerts/getAll`);
    setConcerts(response.data);
  };


  useEffect(() => {
    getConcert();
  }, []);

  const deleteConcert = async(id: number) => {
    try {
      await axios.delete(`${API}/concerts/deleteConcert/${id}`)
    } catch (error) {
      alert("Une erreur s'est produite")
    }
  };



  const listItems = concerts.map((concert) => (
    <tr key={concert.id}>
      <th scope="row">{concert.id}</th>
      <td>{concert.titre}</td>
      <td>{concert.date}</td>
      <td>{concert.prix}</td>
      <td>
        <span
          style={{ marginRight: 10, cursor: "pointer" }}
          onClick={() => deleteConcert(concert.id)}
        >
          <RiDeleteBinLine size={22} color="red" style={{cursor: "pointer"}} />{" "}
        </span>{" "}
        <span style={{ marginRight: 10, cursor: "pointer" }}>
          {" "}
          
        </span>
      </td>
    </tr>
  ));

  const [titre, setTitre] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [selected, setSelected] = useState([]);
  const [salle, setSalle] = useState<Salle[]>();
  const [artiste, setArtiste] = useState<Artist[]>();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post(`${API}/artistes/createArtiste`, {
      titre: titre,
    });
    setTitre("");
    await getConcert();
  };

  console.log(concerts);
  return (
    <div>
      <h2>Concerts</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Date</th>
            <th scope="col">Prix</th>
            {/* <th scope="col">Actions</th> */}
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/admin/concert-add");
        }}
      >
        Ajouter un concert
      </button>
    </div>
  );
}

export default AdminConcert;
