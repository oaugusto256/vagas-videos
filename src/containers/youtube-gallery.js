import React, { Component } from "react";
import { Row, Col, Grid, Navbar } from "react-bootstrap";
import SearchBar from "../components/search-bar.js";

class YouTubeGallery extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="navbar-brand-text" href="/">
                YouTube Gallery
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <div className="margin-top-80">
          <Grid>
            <Row>
              <Col sm={12} md={12}>
                <SearchBar />
              </Col>
            </Row>
            <Row className="margin-top-20">
              <Col sm={12} md={8}>
                <p className="text-header">Vídeo em destaque</p>
                <hr />
              </Col>
              <Col sm={12} md={4}>
                <p className="text-header">+ Vídeos</p>
                <hr />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default YouTubeGallery;
