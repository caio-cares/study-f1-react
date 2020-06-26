import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import Theme from '../../Configs/Theme';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const HeaderElement = styled.footer`
  background: ${Theme.colors.background};
  padding: 5px 0;

  h2 {
    font-size: 2rem;
    margin: 0;

    a {
      color: ${Theme.colors.primary};
    }
  }

  nav {
    a {
      width: 25%;
      text-align: center;
      display: inline-block;
      color: ${Theme.colors.text.light};
      margin-top: 5px;
      font-weight: bold;

      &.active {
        color: ${Theme.colors.primary};
      }
    }
  }
`;

class Header extends Component {

  render() {
    return (
        <HeaderElement>
          <Container>
            <Row>
              <Col xs={2}>
                <h2 className="logo"><NavLink activeClassName="active" to="/">React F1</NavLink></h2>
              </Col>
              <Col xs={10}>
                <nav>
                  <NavLink activeClassName="active" to="/teams">Teams</NavLink>
                  <NavLink activeClassName="active" to="/drivers">Drivers</NavLink>
                  <NavLink activeClassName="active" to="/races">Races</NavLink>
                  <NavLink activeClassName="active" to="/standings">Standings</NavLink>
                </nav>
              </Col>
            </Row>
          </Container>
        </HeaderElement>
    );
  }
}

export default Header;