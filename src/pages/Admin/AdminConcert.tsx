import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import Concert from "../../models/Concert";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../Constants";

function AdminConcert() {
  const [concerts, setConcerts] = useState<Concert[]>([]);

  const [showForm, setForm] = React.useState(false);

  const getConcert = async () => {
    const response = await axios(`${API}/artistes/getAll`);

    setConcerts(response.data);
  };

  useEffect(() => {
    (async () => {
      await getConcert();
    })();
  }, []);

  const toggleForm = () => {
    setForm(!showForm);
  };

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
    setForm(!showForm);
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
      <button className="btn btn-primary" onClick={toggleForm}>
        Ajouter un concert
      </button>

      {showForm && (
        <form className="mt-4" style={{ display: "block" }}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Titre
            </label>
            <input
              type="text"
              className="form-control"
              id="titre"
              value={titre}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setTitre(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ville" className="form-label">
              Date
            </label>
            <input type="text" className="form-control" id="date" />
          </div>
          <div className="mb-3">
            <label htmlFor="rue" className="form-label">
              Prix
            </label>
            <input type="number" className="form-control" id="prix" />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Valider
          </button>
        </form>
      )}
    </div>
  );
}

export default AdminConcert;
