import React from "react";
import {
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </Container>
  );
};

export default Header;
