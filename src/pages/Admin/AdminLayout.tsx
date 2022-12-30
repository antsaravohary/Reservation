import React from 'react'
import {Outlet} from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function AdminLayout() {
  return (
    <>
        <AdminNavbar />
        <div className="container">
            <Outlet/>
        </div>
    </>
  )
}

export default AdminLayout