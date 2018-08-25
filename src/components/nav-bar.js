
import React from 'react';
import { FaYoutube, FaSearch, FaStar } from 'react-icons/fa';

const NavBar = (props) => {
  return (
    <nav className="nav-bar">
      <div className="container flex">
        <p className="flex-40 flex no-margin-bottom">
          <span
            onClick={props.onClickBrand}
            className="nav-bar-brand"
          >
            VAGAS.com Vídeos
          </span>
        </p>
        <div className="flex-40">
          <div className="flex-center search-bar-box">
            <input
              value={props.searchBarValue}
              onChange={props.onChangeSearchValue}
              onKeyPress={event => {
                if (event.key === 'Enter' && (props.searchBarValue !== "" || props.searchBarValue.length > 3)) {
                  props.callSearch();
                }
              }}
              className="search-bar"
              placeholder="Pesquise um vídeo no canal..."
            />
            {(props.searchBarValue === "" || props.searchBarValue.length <= 3) ?
              (<div
                title={"Digite um termo antes de pesquisar"}
                className="nav-bar-search-blocked"
              >
                <FaSearch
                  size={'20px'}
                  color={'#777'}
                />
              </div>) :
              (<div
                title={"Pesquise um video com o termo desejado"}
                onClick={props.onClickSearch}
                className="nav-bar-search"
              >
                <FaSearch
                  size={'20px'}
                  color={'white'}
                />
              </div>)}
          </div>
        </div>
        <div className="flex-center menu-icon">
          <div
            title={"Vídeos em destaque"}
            onClick={props.onClickBrand}
            className="nav-bar-menu"
          >
            <FaStar
              size={'25px'}
              color={'white'}
            />
          </div>
        </div>
        <div className="flex-center menu-icon">
          <div
            title={"Todos os vídeos"}
            onClick={props.onClickMenu}
            className="nav-bar-menu"
          >
            <FaYoutube
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