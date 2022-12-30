import React, { useEffect, useState } from "react";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import Client from "../../models/Client";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../Constants";

function AdminClient() {
  const [clients, setClients] = useState<Client[]>([]);

  const [showForm, setForm] = React.useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios(`${API}/utilisateur/getAll`);

      const _clients = response.data as Client[];

      setClients(_clients.filter((c) => c.role === "USER"));
    })();
  }, []);

  const toggleForm = () => {
    setForm(!showForm);
  };

  const deleteArtist = (id: number) => {
    console.log("delete artist" + id);
  };

  const listItems = clients.map((client) => (
    <tr key={client.idUser}>
      <th scope="row">{client.idUser}</th>
      <td>{client.name}</td>
      <td>{client.prenom}</td>
      <td>{client.email}</td>
      {/* <td>
        <span onClick={() => deleteArtist(client.idUser)}>
          <RiDeleteBinLine />{" "}
        </span>{" "}
        <RiEditLine />
      </td> */}
    </tr>
  ));

  return (
    <div>
      <h2>Clients</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Actions</th> */}
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
      {/* <button className="btn btn-primary" onClick={toggleForm}>
        Ajouter un client
      </button> */}

      {showForm && (
        <form className="mt-4" style={{ display: "block" }}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nom
            </label>
            <input type="text" className="form-control" id="nom" />
          </div>
          <div className="mb-3">
            <label htmlFor="ville" className="form-label">
              Ville
            </label>
            <input type="text" className="form-control" id="ville" />
          </div>
          <div className="mb-3">
            <label htmlFor="rue" className="form-label">
              Rue
            </label>
            <input type="text" className="form-control" id="rue" />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Valider
          </button>
        </form>
      )}
    </div>
  );
}

export default AdminClient;
