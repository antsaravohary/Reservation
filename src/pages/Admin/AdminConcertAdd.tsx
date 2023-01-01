import { ChangeEvent, useEffect, useState } from "react";
import Salle from "../../models/Salle";
import Artist from "../../models/Artist";
import axios from "axios";
import { API } from "../../Constants";
import { useNavigate } from "react-router-dom";

interface IArtiste extends Artist {
  checked: boolean;
}

interface ISalle extends Salle {
  checked: boolean;
}

export default function AdminConcertAdd() {
  const navigate = useNavigate();

  const [artistes, setArtistes] = useState<IArtiste[]>([]);
  const [salles, setSalles] = useState<ISalle[]>([]);

  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [prix, setPrix] = useState<string>("");
  const [adresseRue, setAdresseRue] = useState<string>("");
  const [adresseVille, setAdresseVille] = useState<string>("");

  const getArtist = async () => {
    const response = await axios(`${API}/artistes/getSalle`);
    const artiste = (await response.data) as Artist[];

    setArtistes(artiste.map((a) => ({ ...a, checked: false })));
  };

  const getSalles = async () => {
    const response = await axios(`${API}/salles/getsalle/`);
    const salle = (await response.data) as Salle[];

    setSalles(salle.map((a) => ({ ...a, checked: false })));
  };

  useEffect(() => {
    getArtist();
    getSalles();
  }, []);

  const handleButtonCreateClick = async () => {
    const finalArtistes = artistes
      .filter((a) => a.checked)
      .map((a) => ({
        id: a.id,
        nameArtiste: a.name,
        description: a.description,
      }));
    const finalSalles = salles
      .filter((s) => s.checked)
      .map((s) => ({
        id: s.id,
        nameSalle: s.name,
        nb_place: s.nb_place,
      }));

    const _prix = Number.isNaN(prix) ? 0 : +prix;

    const data = {
      titre: title,
      date: date,
      prix: _prix,
      adresse: {
        ville: adresseVille,
        rue: adresseRue,
      },
      artistes: finalArtistes,
      salle: finalSalles,
    };

    await axios
      .post(`${API}/concerts/createConcert`, data)
      .then(() => {
        navigate("/admin/concert");
      })
      .catch((error) => {
        alert("Error");
      });
  };

  const handleCheckArtiste = (id: number, checked: boolean) => {
    const _artistes = [...artistes];

    const artisteIndex = _artistes.findIndex((a) => a.id === id);

    _artistes[artisteIndex].checked = checked;

    setArtistes(_artistes);
  };

  const handleCheckSalle = (id: number, checked: boolean) => {
    const _salles = [...salles];

    const salleIndex = _salles.findIndex((a) => a.id === id);

    _salles[salleIndex].checked = checked;

    setSalles(_salles);
  };

  return (
    <div className="mt-5">
      <h1>Ajouter un concert</h1>
      <div className="mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Details</h5>
                <div className="card-text">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Titre"
                      value={title}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date"
                      value={date}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setDate(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="string"
                      className="form-control"
                      placeholder="Prix"
                      value={prix}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPrix(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <h5 className="card-title">Adresse</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rue"
                    value={adresseRue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setAdresseRue(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ville"
                    value={adresseVille}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setAdresseVille(e.target.value);
                    }}
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleButtonCreateClick()}
                >
                  Créer
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Artistes</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artistes.map((artiste, index) => (
                      <tr key={index}>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={artiste.checked}
                              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                handleCheckArtiste(
                                  artiste.id,
                                  e.target.checked
                                );
                              }}
                            />
                          </div>
                        </td>
                        <td>{artiste.name}</td>
                        <td>{artiste.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Salles</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Place</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salles.map((salle, index) => (
                      <tr key={index}>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={salle.checked}
                              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                handleCheckSalle(salle.id, e.target.checked);
                              }}
                            />
                          </div>
                        </td>
                        <td>{salle.name}</td>
                        <td>{salle.nb_place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
