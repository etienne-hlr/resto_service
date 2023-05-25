import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

function NavBarHeader() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Dashboard</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link>La carte</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/commandes">
              <Nav.Link>Commandes</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default NavBarHeader;
