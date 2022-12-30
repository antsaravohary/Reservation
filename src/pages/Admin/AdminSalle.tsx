import React from 'react'

import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri'
import Salle from '../../models/Salle'
import { Link } from "react-router-dom";

function AdminSalle() {

  const [showForm, setForm] = React.useState(false);

  const toggleForm = () => {
    setForm(!showForm)
  }

  const deleteArtist = (id:number) => {
    console.log("delete salle" + id)
  }
    
  //remplacevana amin'ny objet appelé en back end ty
  const salles : Array<Salle> = [
    { id: 1, name: "Salle 1" },
    { id: 2, name: "Salle 2" }
  ]

  const listItems = salles.map(( salle ) => 
    <tr key={salle.id}>
        <th scope="row">{ salle.id }</th>
        <td>{ salle.name }</td>
        <td><span onClick={() => deleteArtist(salle.id)}><RiDeleteBinLine /> </span> <RiEditLine /></td>
    </tr>
  )

  return (
    <div>
        <h2>Salle</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                { listItems }
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={toggleForm}>Ajouter une salle</button>

        { showForm &&
        <form className='mt-4' style= {{ display: 'block' }}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom</label>
            <input type="text" className="form-control" id="nom" />
          </div>
          <button type="submit" className="btn btn-outline-primary">Valider</button>
        </form>
        }

    </div>
  )
}

export default AdminSalle