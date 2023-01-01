import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import Concert from "../../models/Concert";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../Constants";
import Salle from "../../models/Salle";
import Artist from "../../models/Artist";
import { MultiSelect } from "react-multi-select-component";

function AdminConcert() {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [salles, setSalles] = useState<Salle[]>([]);

  const [showForm, setForm] = React.useState(false);

  const getConcert = async () => {
    const response = await axios(`${API}/concerts/getAll`);
    setConcerts(response.data);
  };

  const createConcert = async () => {
    try {
      await axios.post(`${API}/`);
    } catch (error) {}
  };

  const getSalle = async () => {
    try {
      const res = await axios.get(`${API}/salles/getsalle/`);
      
      setSalles(res.data);
    } catch (error) {
      console.log('error:', error)
    }
  };


  let options = [
    { label: "Grapes 🍇", value: "grapes", id: "test" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];

  let options2:Array<{label: string, nom:string, id:number, nb_place:number}> = []

  useEffect(() => {
    (async () => {
      await getConcert();
    })();
  }, []);

  useEffect(() => {
    console.log("**************************")
    getSalle();
    salles.map(function(salle) {
      options2.push({label: salle.name.toString(), nom: salle.name, id:salle.id, nb_place: salle.nb_place})
    })
    
  },[]);

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
      <td>
        <span
          style={{ marginRight: 10, cursor: "pointer" }}
          onClick={() => deleteArtist(concert.id)}
        >
          <RiDeleteBinLine />{" "}
        </span>{" "}
        <span style={{ marginRight: 10, cursor: "pointer" }}>
          {" "}
          <RiEditLine />{" "}
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
    setForm(!showForm);
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
            <input
              type="date"
              value={date}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setDate(e.target.value);
              }}
              className="form-control"
              id="date"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rue" className="form-label">
              Prix
            </label>
            <input
              type="number"
              className="form-control"
              id="prix"
              value={price}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPrice(Number(e.target.value));
              }}
            />
          </div>
          <div className="mb-3">
            {/* <label htmlFor="rue" className="form-label">
              Artiste
            </label>
            <input type="number" className="form-control" id="prix" value={price} onChange={(e:ChangeEvent<HTMLInputElement>) => {
              setPrice(Number(e.target.value))
            }} /> */}
            <div>
              <label htmlFor="rue" className="form-label">
                Salle
              </label>
              <select multiple>

              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="rue" className="form-label">
              Artiste
            </label>
            <input
              type="number"
              className="form-control"
              id="prix"
              value={price}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPrice(Number(e.target.value));
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

export default AdminConcert;
