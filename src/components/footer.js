import React, { Component } from 'react';
import logo from '../images/logo.png';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row flex-center"> 
            <img className="logo" alt="Logo Vagas Videos" src={logo} />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;