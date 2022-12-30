import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import Artist from "../../models/Artist";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../Constants";
import Salle from "../../models/Salle";

function AdminArtist() {
  const [artists, setArtists] = useState<Artist[]>([]);

  const [showForm, setForm] = React.useState(false);

  const getArtist = async () => {
    const response = await axios(`${API}/artistes/getAll`);

    setArtists(response.data);
  };

  useEffect(() => {
    (async () => {
      await getArtist();
    })();
  }, []);

  const toggleForm = () => {
    setForm(!showForm);
  };

  const deleteArtist = (id: number) => {
    console.log("delete artist" + id);
  };

  const listItems = artists.map((artist) => (
    <tr key={artist.id}>
      <th scope="row">{artist.id}</th>
      <td>{artist.name}</td>
      <td>
        <span onClick={() => deleteArtist(artist.id)}>
          <RiDeleteBinLine />{" "}
        </span>{" "}
        <RiEditLine />
      </td>
    </tr>
  ));

  const [nom, setNom] = useState<string>("");

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post(`${API}/artistes/createArtiste`, {
      name: nom,
    });
    setNom("");
    await getArtist();
    setForm(!showForm);
  };

  return (
    <div>
      <h2>Artistes</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
      <button className="btn btn-primary" onClick={toggleForm}>
        Ajouter un artiste
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
          <button type="submit" className="btn btn-outline-primary">
            Valider
          </button>
        </form>
      )}
    </div>
  );
}

export default AdminArtist;
