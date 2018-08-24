
import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const NavBar = ({ onClickBrand, onClickMenu }) => {
  return (
    <nav className="nav-bar">
      <div className="container flex">
        <p className="flex-60 flex">
          <span 
            onClick={onClickBrand}
            className="nav-bar-brand"
          >
            VAGAS.com Vídeos
          </span>
        </p>
        <div className="flex-center flex-35">
          <input 
            className="search-bar"
            placeholder="Pesquise um vídeo do canal..."
          />
          <div className="nav-bar-search">
            <FaSearch
              color={'white'}
              size={'20px'}
            />
          </div>
        </div>
        <div className="flex-center flex-5">
          <div onClick={onClickMenu} className="nav-bar-menu">
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