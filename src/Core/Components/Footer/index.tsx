import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import Theme from '../../Configs/Theme';
import styled from "styled-components";

const FooterElement = styled.footer`
  background: ${Theme.colors.background};
  color: ${Theme.colors.text.light};
  padding: 5px 0;

  p {
    text-align: right;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
  }
`;

class Footer extends Component {

  render() {
    return (
        <FooterElement>
          <Container>
            <Row>
              <Col xs={2}>
                <h2 className="logo">React F1</h2>
              </Col>
              <Col xs={10}>
                <p>&copy; 2020 - React F1</p>
              </Col>
            </Row>
          </Container>
        </FooterElement>
    );
  }
}

export default Footer;