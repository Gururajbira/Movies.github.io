import React from 'react';
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              <NavLink className="nav-link active" to={'/'}>Home</NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="./services">Servieces</a>
              <NavLink className="nav-link" to={'/services'}>Services</NavLink>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="./about">About.Us</a>
              <NavLink className="nav-link" to={'/about'}>About Us</NavLink>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="./contact">Contact.Us</a>
              <NavLink className="nav-link" to={'/contact'}>Contact Us</NavLink>
            </li> */}
            <li className="nav-item">
              {/* <a className="nav-link" href="./contact">Contact.Us</a> */}
              <NavLink className="nav-link" to={'/movies'}>Movies</NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;