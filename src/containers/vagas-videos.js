import React, { Component } from "react";
import { Row, Col, Grid, Navbar } from "react-bootstrap";
import { API_KEY } from "../config/const.js";
import SearchBar from "../components/search-bar.js";
import YTSearch from "youtube-api-search";

class VagasVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('overwatch');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="navbar-brand-text" href="/">
                Vagas Vídeos
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

export default VagasVideos;
