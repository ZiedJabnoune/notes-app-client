import React, { useState } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//import './App.css';
import { Link, useHistory } from "react-router-dom";
import Routes from "./Routes";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory()

  const handleLogout = () => {
    console.log("log out");
    setIsAuthenticated(false);
    history.push('/login')
  };

  return (
    <div className="container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {isAuthenticated ? (
              <NavItem onClick={handleLogout}>Logout</NavItem>
            ) : (
              <>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes addProps={{isAuthenticated, setIsAuthenticated}} />
    </div>
  );
}

export default App;
