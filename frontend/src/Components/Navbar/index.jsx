import React from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import "../../assets/index.css";


const AppNavbar = () => {
  return (
    <Navbar className="app-navbar" expand="md">
      <NavbarBrand href="/" className="navbar-brand">Clínica </NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/">Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/productos">Productos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/servicios">Servicios</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contacto">Contacto</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
