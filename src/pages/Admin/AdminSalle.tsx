import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import Salle from "../../models/Salle";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../Constants";

function AdminSalle() {
  const [salles, setSalles] = useState<Salle[]>([]);

  const [showForm, setForm] = React.useState(false);

  const getSalles = async () => {
    const response = await axios(`${API}/salles/getsalle/`);

    setSalles(response.data);
  };

  useEffect(() => {
    (async () => {
      await getSalles();
    })();
  }, []);

  const toggleForm = () => {
    setForm(!showForm);
  };

  const deleteArtist = (id: number) => {
    console.log("delete salle" + id);
  };

  const listItems = salles.map((salle) => (
    <tr key={salle.id}>
      <th scope="row">{salle.id}</th>
      <td>{salle.name}</td>
      <td>{salle.nb_place}</td>
      {/* <td>
        <span onClick={() => deleteArtist(salle.id)}>
          <RiDeleteBinLine />{" "}
        </span>{" "}
        <RiEditLine />
      </td> */}
    </tr>
  ));

  const [nom, setNom] = useState<string>("");
  const [nombreSalle, setNombreSalle] = useState<string>("");

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post(`${API}/salles/createsalle`, {
      name: nom,
      nb_place: nombreSalle,
    });
    setNom("");
    setNombreSalle("");
    await getSalles();
    setForm(!showForm);
  };

  return (
    <div>
      <h2>Salle</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Nombre de place</th>
            {/* <th scope="col">Actions</th> */}
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
      <button className="btn btn-primary" onClick={toggleForm}>
        Ajouter une salle
      </button>

      {showForm && (
        <form
          className="mt-4"
          style={{ display: "block" }}
          onSubmit={handleFormSubmit}
        >
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              value={nom}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setNom(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nombre de salle
            </label>
            <input
              type="number"
              className="form-control"
              value={nombreSalle}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setNombreSalle(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Valider
          </button>
        </form>
      )}
    </div>
  );
}

export default AdminSalle;
