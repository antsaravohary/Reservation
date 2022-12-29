import React from 'react'
import { useParams } from 'react-router-dom';

function AdminSingleArtiste() {
  let { id } = useParams();
  return (
    <div>id : {id}</div>
  )
}

export default AdminSingleArtiste