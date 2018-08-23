
import React from 'react';
import { FaBars } from 'react-icons/fa';

const NavBar = ({ props }) => {
  return (
    <nav className="nav-bar navbar-fixed-top">
      <div className="container flex">
        <p className="logo-name flex-90">Vaga Vídeos</p>
        <div className="flex-center flex-10">
          <div className="logo-menu">
            <FaBars
              color={'white'}
              size={'25px'}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;