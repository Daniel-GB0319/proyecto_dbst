import React, { useContext } from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import { Link, useNavigate  } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext.jsx";

const AppNavbar = () => {
  const { tipoUsuario, nombreTipoUsuario, updateUserContext } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    updateUserContext("", "");
    navigate("/home");
  };

  return (
    <Navbar className="app-navbar" expand="md">
      <NavbarBrand tag={Link} to="/" className="navbar-brand">
        Hospital XYZ
      </NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/" className="linkk">Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/home" className="linkk">Servicios</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/home" className="linkk">Contacto</NavLink>
        </NavItem>
        {tipoUsuario && nombreTipoUsuario ? (
          <NavLink onClick={handleLogout} className="nav-link" href="#">
            Cerrar Sesión
          </NavLink>
        ) : (
          <NavLink tag={Link} to="/signin" className="linkk">Iniciar Sesión</NavLink>
        )}
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;


