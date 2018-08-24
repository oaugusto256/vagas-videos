
import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const NavBar = ({ onClickBrand, onClickMenu, onClickSearch, onChangeSearchValue, searchBarValue }) => {
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
            value={searchBarValue}
            onChange={onChangeSearchValue}
            className="search-bar"
            placeholder="Pesquise um vídeo do canal..."
          />
          <div 
            onClick={onClickSearch} 
            className="nav-bar-search"
          >
            <FaSearch
              size={'20px'}
              color={'white'}
            />
          </div>
        </div>
        <div className="flex-center flex-5">
          <div 
            onClick={onClickMenu} 
            className="nav-bar-menu"
          >
            <FaBars
              size={'25px'}
              color={'white'}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;