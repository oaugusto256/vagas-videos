import React, { Component } from "react";
import {
  Row,
  Col,
  Grid, 
  Navbar,
  Button,
  FormGroup,
  FormControl,
} from "react-bootstrap";

class YouTubeGallery extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="navbar-brand-text" href="/">YouTube Gallery</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl 
                  type="text" 
                  placeholder="Pesquise um vídeo..." 
                />
              </FormGroup>{" "}
              <Button type="submit">Pesquisar</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="margin-top-80">
          <Grid bsClass="container">
            <Row className="show-grid">
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
