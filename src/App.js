import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import { Container } from "react-bootstrap";
import Homepage from "./views/Homepage";

function App() {
  return (
    <Container>
      <Header />
      <NavigationMenu />
      <Homepage />
    </Container>
  );
}

export default App;
