import React from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import "../../assets/index.css";

const AppNavbar = () => {
  return (
    <Navbar className="app-navbar" expand="md">
      <NavbarBrand href="/" className="navbar-brand">
        Hospital XYZ{" "}
      </NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/">Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signin">Iniciar Sesión</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
