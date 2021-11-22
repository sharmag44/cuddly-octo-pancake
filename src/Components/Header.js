import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import ContactsIcon from "@material-ui/icons/Contacts";
function Header() {
  return (
    <div className="Header" id="Header">
      <Navbar bg="light" fixed="top" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">
            <h3>Portfolio</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Navbar
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#Header">
                  <HomeIcon className="HomeIcone" color="light" /> Home
                </Nav.Link>
                <Nav.Link href="#project">
                  <WorkIcon className="ProjectIcone" color="light" /> Project
                </Nav.Link>
                <Nav.Link href="#contact">
                  <ContactsIcon className="ContactIcone" color="light" />{" "}
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
