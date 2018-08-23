
import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const NavBar = ({ props }) => {
  return (
    <nav className="nav-bar">
      <div className="container flex">
        <p className="logo-name flex-60">Vaga Vídeos</p>
        <div className="flex-center flex-35">
          <input 
            className="search-bar"
            placeholder="Pesquise um vídeo do canal..."
          />
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