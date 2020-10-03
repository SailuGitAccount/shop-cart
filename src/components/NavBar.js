import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/store">Store</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
        </Nav>
        <Navbar.Brand>
          <p style={{ fontSize: 12 }}>
            Logged in as <strong>{props.displayUsername}</strong>
            <span>&nbsp;ProductCount:{props.productCount}</span>
          </p>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
}
const mapStateToProps = (state) => {
  return {
    displayUsername: state.userName,
    productCount: state.productCount,
  };
};
export default connect(mapStateToProps)(NavBar);
