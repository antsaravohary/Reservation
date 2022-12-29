import React from "react";
import { NavLink } from "react-router-dom";

function StyledNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-brand text-primary" : "navbar-brand text-secondary"
          }
          to={"/"}
        >
          Home
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
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary" : "nav-link text-secondary"
                }
                to={"/reservation/concerts"}
              >
                Réservation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary" : "nav-link text-secondary"
                }
                to={"/about"}
              >
                A propos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary" : "nav-link text-secondary"
                }
                to={"login"}
              >
                Se connecter
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default StyledNavbar;
