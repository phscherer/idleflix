import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Idleflix logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/register/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;