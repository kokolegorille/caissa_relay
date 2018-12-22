import React from 'react';
import { Link } from 'found';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Caissa w/ Relay Modern</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active" exact>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/games" className="nav-link" activeClassName="active" >Games</Link>
        </li>
        <li className="nav-item">
          <Link to="/eco" className="nav-link" activeClassName="active" >Eco</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;