import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col xs={2}>
              <p>logo</p>
            </Col>
            <Col xs={10}>
              <p>&copy; 2020 - React F1</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;