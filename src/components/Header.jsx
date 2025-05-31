import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import axios from "axios";

const Header = () => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/company") // API endpoint adresin
      .then((response) => {
        setCompany(response.data);
      })
      .catch((error) => {
        console.error("Şirket bilgisi alınamadı:", error);
      });
  }, []);

  if (!company) return <div>Yükleniyor...</div>;
  return (
    <header className="shadow">
      <div className="bg-dark py-3 text-center">
        <span className="text-white">Your fashion partner</span>
      </div>

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            {company.name}
            <img src={company.logo} alt="Company Logo" width="170" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Mens</Nav.Link>
              <Nav.Link href="#action2">Women</Nav.Link>
              <Nav.Link href="#action2">Kids</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
