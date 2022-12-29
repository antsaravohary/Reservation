import React from 'react'
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri'
import Artist from '../../../models/Artist'

function AdminArtiste() {
    
  //remplacevana amin'ny objet appelé en back end ty
  const artists : Array<Artist> = [
    { id: 1, name: "Mark" },
    { id: 2, name: "Jacob" }
  ]
  const listItems = artists.map(( artist ) => 
    <tr key={artist.id}>
        <th scope="row">{ artist.id }</th>
        <td>{ artist.name }</td>
        <td><RiDeleteBinLine /> <RiEditLine /></td>
    </tr>
  )
  return (
    <div>
        <h2>Artistes</h2>
        <table className="table table-striped table-hover">
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
        <button type="button" className="btn btn-primary">Ajouter un artiste</button>

    </div>
  )
}

export default AdminArtiste