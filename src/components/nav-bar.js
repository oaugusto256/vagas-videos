
import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const NavBar = ({ props }) => {
  return (
    <nav className="nav-bar navbar-fixed-top">
      <div className="container flex">
        <p className="logo-name flex-90">Vaga Vídeos</p>
        <div className="flex-center flex-5">
          <div className="logo-search">
            <FaSearch
              color={'white'}
              size={'20px'}
            />
          </div>
        </div>
        <div className="flex-center flex-5">
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