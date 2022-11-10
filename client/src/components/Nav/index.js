import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
        <Link className="navbar-brand" to='/'>
          USS Grimes
        </Link>
  
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link  className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/gallery'>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/journal'>
                Journal
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/login'>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/signup'>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      
    </nav>
  );
};

export default Nav;