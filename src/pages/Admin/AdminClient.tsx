import React from 'react'
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri'
import Client from '../../models/Client'
import { Link } from "react-router-dom";

function AdminClient() {

  const [showForm, setForm] = React.useState(false);

  const toggleForm = () => {
    setForm(!showForm)
  }

  const deleteArtist = (id:number) => {
    console.log("delete artist" + id)
  }
    
  //remplacevana amin'ny objet appelé en back end ty
  const clients : Array<Client> = [
    { id: 1, name: "Mark", ville: "Tana", rue: "Lorem" },
    { id: 2, name: "Jacob", ville: "Tana", rue: "Lorem" }
  ]

  const listItems = clients.map(( client ) => 
    <tr key={client.id}>
        <th scope="row">{ client.id }</th>
        <td>{ client.name }</td>
        <td>{ client.ville }</td>
        <td>{ client.rue }</td>
        <td><span onClick={() => deleteArtist(client.id)}><RiDeleteBinLine /> </span> <RiEditLine /></td>
    </tr>
  )

  return (
    <div>
        <h2>Clients</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Ville</th>
                    <th scope="col">Rue</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                { listItems }
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={toggleForm}>Ajouter un client</button>

        { showForm &&
        <form className='mt-4' style= {{ display: 'block' }}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom</label>
            <input type="text" className="form-control" id="nom" />
          </div>
          <div className="mb-3">
            <label htmlFor="ville" className="form-label">Ville</label>
            <input type="text" className="form-control" id="ville" />
          </div>
          <div className="mb-3">
            <label htmlFor="rue" className="form-label">Rue</label>
            <input type="text" className="form-control" id="rue" />
          </div>
          <button type="submit" className="btn btn-outline-primary">Valider</button>
        </form>
        }

    </div>
  )
}

export default AdminClient