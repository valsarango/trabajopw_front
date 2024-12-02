import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/">FunkoSpace</Link>
      </div>
      <div className="nav-links">
        <Link to="/products">Productos</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Nav;