import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';

const Sidebar = () => {

    //pouzivam Navbar z 3d library(react-bootstrap) ktore je responzivne
    return (
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="/home">Books</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/booklist">
              List of Books
            </NavItem>
            <NavItem eventKey={3} href="/bookform">
              Favorite Books
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Sidebar;
