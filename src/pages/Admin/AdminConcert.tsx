import React from 'react'

import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri'
import Concert from '../../models/Concert'
import { Link } from "react-router-dom"

function AdminConcert() {

  const [showForm, setForm] = React.useState(false);

  const toggleForm = () => {
    setForm(!showForm)
  }

  const deleteArtist = (id:number) => {
    console.log("delete concert" + id)
  }
    
  //remplacevana amin'ny objet appelé en back end ty
  const concerts : Array<Concert> = [
    { id: 1, titre: "Concert 1", date: "1/1/2023", prix: 15 },
    { id: 2, titre: "Concert 2", date: "2/1/2023", prix: 12 }
  ]

  const listItems = concerts.map(( concert ) => 
    <tr key={concert.id}>
        <th scope="row">{ concert.id }</th>
        <td>{ concert.titre }</td>
        <td>{ concert.date }</td>
        <td>{ concert.prix }</td>
        <td><span onClick={() => deleteArtist(concert.id)}><RiDeleteBinLine /> </span> <RiEditLine /></td>
    </tr>
  )
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
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                { listItems }
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={toggleForm}>Ajouter un concert</button>

        { showForm &&
        <form className='mt-4' style= {{ display: 'block' }}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Titre</label>
            <input type="text" className="form-control" id="titre" />
          </div>
          <div className="mb-3">
            <label htmlFor="ville" className="form-label">Date</label>
            <input type="text" className="form-control" id="date" />
          </div>
          <div className="mb-3">
            <label htmlFor="rue" className="form-label">Prix</label>
            <input type="number" className="form-control" id="prix" />
          </div>
          <button type="submit" className="btn btn-outline-primary">Valider</button>
        </form>
        }

    </div>
  )
}

export default AdminConcert