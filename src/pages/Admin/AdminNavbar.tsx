import React from "react";
import {NavLink} from 'react-router-dom'

function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={'/admin'}>
          Admin
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={'/admin/artiste'}>
                Artistes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/admin/client'}>
                Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/admin/concert'}>
                Concerts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/admin/salle'}>
                Salles
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar