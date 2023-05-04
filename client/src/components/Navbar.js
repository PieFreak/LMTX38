import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar as BNavbar, Container, Nav } from 'react-bootstrap';


export default function Navbar() {
  const [user, setUser] = useState(undefined);
  let links = [
    {title:"Start", link:"/gameoverview"},
    {title:"Om högskoleprovet", link:"/about"},
    {title:"Profil", link:"/profile"},
  ]
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
      <BNavbar bg="light" expand="md">
        <Container>
          <BNavbar.Brand href="/" className="text-primary">Högskoleprovet</BNavbar.Brand>
          <BNavbar.Toggle aria-controls="responsive-navbar-nav"/>
          <BNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {links.map(link => (
                <Nav.Link key={link.title} href={link.link}>{link.title}</Nav.Link>

              ))}
            </Nav>
            <Nav>
                {user ?
                  <Nav.Link href="/" className="d-flex" onClick={async (e) => {
                    e.preventDefault();
                    try {
                      const response = await axios.post('http://localhost:5000/user/logout');
                      console.log(response);
                      localStorage.clear();
                      setUser(undefined);
                    } catch (err) {
                      console.log(err.message);
                    }
                    setUser(undefined)
                  }}>
                    <span className="gg-log-out align-self-center me-3"/> 
                    Logga ut
                  </Nav.Link>
                  :
                  <Nav.Link href="/login" className="d-flex">
                    <div className="gg-log-in align-self-center me-3"/> 
                    Logga in
                  </Nav.Link>
                }
            </Nav>
          </BNavbar.Collapse>
        </Container>
      </BNavbar>
    )
  }