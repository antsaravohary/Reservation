import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import Concert from "../../models/Concert";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../Constants";

function AdminConcert() {
  const navigate = useNavigate();

  const [concerts, setConcerts] = useState<Concert[]>([]);

  const getConcert = async () => {
    const response = await axios(`${API}/concerts/getAll`);

    console.log(response.data);
  };

  useEffect(() => {
    getConcert();
  }, []);

  const deleteArtist = (id: number) => {
    console.log("delete concert" + id);
  };

  const listItems = concerts.map((concert) => (
    <tr key={concert.id}>
      <th scope="row">{concert.id}</th>
      <td>{concert.titre}</td>
      <td>{concert.date}</td>
      <td>{concert.prix}</td>
      {/* <td>
        <span onClick={() => deleteArtist(concert.id)}>
          <RiDeleteBinLine />{" "}
        </span>{" "}
        <RiEditLine />
      </td> */}
    </tr>
  ));

  const [titre, setTitre] = useState<string>("");

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post(`${API}/artistes/createArtiste`, {
      titre: titre,
    });
    setTitre("");
    await getConcert();
  };

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
