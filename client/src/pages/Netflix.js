import { Navbar, Nav, NavDropdown, Container, Row, Col, Carousel } from "react-bootstrap";
import NetflixLogo from "../assets/netflix.png";
import NetflixAvatar from "../assets/Netflix-avatar.png";

export default function Netflix() {
  let links = [
    { title: "Home" },
    { title: "Series" },
    { title: "Films" },
    { title: "New & Popular" },
    { title: "My List" },
    { title: "Browse by Language" },
  ];

  const movies = (
    <Col>
      <img
        alt="netflix avatar"
        src="https://placehold.co/240x150/000000/FFFFFF.png"
        className=""
      />
    </Col>
  );

  const movies2 = (
    <Col>
      <img
        alt="netflix avatar"
        src="https://placehold.co/240x180/000000/FFFFFF.png"
        className=""
      />
    </Col>
  );

  return (
    <div className="min-vh-100 bg-dark">
      <Navbar bg="black" className="py-0">
        <Navbar.Brand href="#home" className="mx-3">
          <img
            alt="netflix logo"
            src={NetflixLogo}
            width="120"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          {links.map((link) => (
            <Nav.Link className="fs-6 text-white" key={link.title}>
              {link.title}
            </Nav.Link>
          ))}
        </Nav>
        <Nav className="d-flex align-items-center">
          <Nav.Link>
            <div className="gg-search bg-transparent text-white"></div>
          </Nav.Link>
          <Nav.Link>
            <div className="gg-bell bg-transparent text-white"></div>
          </Nav.Link>

          <NavDropdown
            title={
              <img
                alt="netflix avatar"
                src={NetflixAvatar}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            }
          >
            <NavDropdown.Item>Dropdown Item 1</NavDropdown.Item>
            <NavDropdown.Item>Dropdown Item 2</NavDropdown.Item>
            <NavDropdown.Item>Dropdown Item 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <div className="container-fluid py-4 ps-5 pe-0 z-1">
        <h1 className="fs-6 mb-0 text-white mb-2">
          Drama Programmes
        </h1>
        <Row className="flex-nowrap overflow-hidden g-1">
          {movies}
          {movies}
          {movies}
          {movies}
          {movies}
          {movies}
          {movies}
          {movies}
        </Row>
      </div>
      <div className="container-fluid py-4 ps-5 pe-0 z-1 ">
        <h1 className="fs-6 mb-0 text-white mb-2">
          We've picked these for you today
        </h1>
        <Row className="flex-nowrap overflow-hidden g-1">
          {movies}
          {movies}
          {movies}
          {movies}
          {movies}
          {movies}
          {movies}
          {movies}
        </Row>
      </div>
      <div className="container-fluid py-4 ps-5 pe-0 z-1 ">
        <h1 className="fs-6 mb-0 text-white mb-2">
          Top 10 TV Programmes in Sweden Today
        </h1>
        <Row className="flex-nowrap overflow-hidden g-1">
          {movies2}
          {movies2}
          {movies2}
          {movies2}
          {movies2}
          {movies2}
          {movies2}
          {movies2}
        </Row>
      </div>
    </div>
  );
}
