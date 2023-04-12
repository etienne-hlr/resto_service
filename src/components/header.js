import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarHeader() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#carte">Modifier la carte</Nav.Link>
            <Nav.Link href="#commandes">Commandes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarHeader;
