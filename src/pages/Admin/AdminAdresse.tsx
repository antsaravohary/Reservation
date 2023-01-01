import React, {ChangeEvent, useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";

import { Address } from "../../models/Adresse";
import { API } from "../../Constants";

function AdminAdresse() {
  const [artists, setArtists] = useState<Address[]>([]);
  const [ville, setVille] = useState<string>("");
  const [rue, setRue] = useState<string>("");

  const [showForm, setForm] = React.useState(false);

  const getAdresse = async () => {
    const response = await axios(`${API}/adresse/getAdresse`);
    const artiste = (await response.data) as Address[];

    setArtists(artiste);
  };

  useEffect(() => {
    getAdresse();
  }, []);

  const toggleForm = () => {
    setForm(!showForm);
  };

  const deleteAdress = (ville: string) => {
    const artiste = artists.filter((adresse) => adresse.ville !== ville);
    setArtists(artiste);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post(`${API}/adresse`, {
      ville, rue
    });
    setVille("");
    setRue("");
    await getAdresse();
    setForm(!showForm);
  };

  const listItems = artists.map((adresse, index) => (
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{adresse.ville}</td>
      <td>{adresse.rue}</td>
      <td>
        <span onClick={() => deleteAdress(adresse.ville)}>
          <RiDeleteBinLine />{" "}
        </span>{" "}
        <RiEditLine />
      </td>
    </tr>
  ));
  return (
    <div>
      <h2>Adresses</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ville</th>
            <th scope="col">Rue</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
      <button className="btn btn-primary" onClick={toggleForm}>
        Ajouter un adresse
      </button>

      {showForm && (
        <form
          className="mt-4"
          style={{ display: "block" }}
          onSubmit={handleFormSubmit}
        >
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Ville
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              value={ville}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setVille(e.target.value);
              }}
            />
            <label htmlFor="nom" className="form-label">
              Rue
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              value={rue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setRue(e.target.value);
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

export default AdminAdresse;
