import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact="true" to="/" className="nav-active">
        Accueil
      </NavLink>
      <NavLink exact="true" to="/about" className="nav-active">
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;