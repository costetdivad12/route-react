import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet,Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">

        <Container>
          <Navbar.Brand as={Link} to="/" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
            <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section>
          {/* forma parte de react-router-dom */}
          <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavBar;
