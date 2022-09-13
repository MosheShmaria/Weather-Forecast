import { React } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Container className="container-haeder">
      <div className="d-flex flex-row">
        <Image
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpk3gvfYYdU2woqrGxmnL_cW7xe0eSVQr71iqZrdVcVaA00IeS6zD6VqNB7EIAjwff9Q&usqp=CAU"
        />

        <h4 className="title">My Weather Forecast</h4>
      </div>

      <Navbar>
        <Container className="border-top border-bottom border-1 m-2 w-100 fs-6 ">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/forecast"
                className={({ isActive }) =>
                  `link ${isActive ? "active-link" : ""}`
                }
              >
                Forecast
              </NavLink>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `link ${isActive ? "active-link" : ""}`
                }
              >
                Locations
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
