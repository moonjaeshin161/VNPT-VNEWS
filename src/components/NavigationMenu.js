import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationMenu = () => {
  return (
    <Container>
      <Navbar>
        <Nav.Link>Logo</Nav.Link>
        <Nav.Link>Xã Hội</Nav.Link>
        <Nav.Link>Kinh tế</Nav.Link>
        <Nav.Link>Đời sống</Nav.Link>
        <Nav.Link>Thế giới</Nav.Link>
        <Nav.Link>Giải trí</Nav.Link>
        <Nav.Link>Thể thao</Nav.Link>
        <Nav.Link>Sức khoẻ</Nav.Link>
        <Nav.Link>Công nghệ</Nav.Link>
        <Nav.Link>Video</Nav.Link>
        <Nav.Link>Tin ảnh</Nav.Link>
        <Nav.Link>Logo</Nav.Link>
      </Navbar>
    </Container>
  );
};

export default NavigationMenu;
