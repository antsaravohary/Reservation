import React from 'react'
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri'
import Artist from '../../models/Artist'
import { Link } from "react-router-dom";


function AdminArtist() {
  const [showForm, setForm] = React.useState(false);

  const toggleForm = () => {
    setForm(!showForm)
  }

  const deleteArtist = (id:number) => {
    console.log("delete artist" + id)
  }
    
  //remplacevana amin'ny objet appelé en back end ty
  const artists : Array<Artist> = [
    { id: 1, name: "Mark" },
    { id: 2, name: "Jacob" }
  ]

  const listItems = artists.map(( artist ) => 
    <tr key={artist.id}>
        <th scope="row">{ artist.id }</th>
        <td>{ artist.name }</td>
        <td><span onClick={() => deleteArtist(artist.id)}><RiDeleteBinLine /> </span> <RiEditLine /></td>
    </tr>
  )

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
            <tbody>
                { listItems }
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={toggleForm}>Ajouter un artiste</button>

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

export default AdminArtist