import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function NavBarHeader() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Dashboard</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/carte">
              <Nav.Link>La carte</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/commandes">
              <Nav.Link>Commandes</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarHeader;
