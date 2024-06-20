import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "./dealsDrayLogo.jpg";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src={logo}
          height="60"
          className="d-inline-block align-top mr-2"
          style={{ padding: "10px" }}
          alt="Logo"
        />
        Employee dashboard
        {/* <Button variant="outline-primary">Button</Button> */}
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
