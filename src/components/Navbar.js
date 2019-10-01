import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import styled from "@emotion/styled";
import Github from "./github.png";
import Medium from "./medium.png";
import Linkedin from "./linkedin.png";
import Resume from "./GabrielaAsuncion_Resume.pdf";
import Mail from "./mail.png";

function Navbar() {
  return (
    <Sidebar>
      <Header>
        gabriela
        <br />
        asuncion
        <MediaNav />
      </Header>
      <Links />
    </Sidebar>
  );
}

function Links() {
  return (
    <NavWrapper>
      <Nav activeKey="1">
        <NavItem>
          <NavLink eventKey="1" href="/">
            home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="2" href="/projects">
            projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="3" href={Resume}>
            resume
          </NavLink>
        </NavItem>
      </Nav>
    </NavWrapper>
  );
}

function MediaNav() {
  return (
    <MediaLinks>
      <Nav.Item>
        <Nav.Link href="https://github.com/gabbyasuncion" target="_blank">
          <img src={Github} alt="github" width="20px" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="https://www.linkedin.com/in/gabriela-asuncion/"
          target="_blank"
        >
          <img src={Linkedin} alt="linkedin" width="20px" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://medium.com/@gabriela_asuncion" target="_blank">
          <img src={Medium} alt="medium" width="20px" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="mailto:gabrielaasuncion@gmail.com" target="_blank">
          <img src={Mail} alt="mail" width="20px" />
        </Nav.Link>
      </Nav.Item>
    </MediaLinks>
  );
}

const Sidebar = styled.div`
  margin-left: 60px;
  margin-top: 60px;
  width: 230px;
  @media only screen and (max-width: 800px) {
    max-height: 50px;
    margin-left: 20px;
    margin-top: 20px;
  }
`;

const MediaLinks = styled(Nav)`
  display: flex;
  justify-content: space-around;
`;

const NavWrapper = styled(Nav)`
  margin-top: 20px;
  padding-left: 20px;
  width: 230px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Fira Code", monospace;
  font-size: 36pt;
  margin-bottom: -10px;
  @media only screen and (max-width: 800px) {
    float: left;
    font-size: 24pt;
  }
`;

const NavLink = styled(Nav.Link)`
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-size: 14pt;
  color: black;
  border-left: solid 1px black;
  padding-left: 10px;
  transition: color 0.1s ease-in-out;
  transition: border-left 0.1s ease-in-out;
  &:hover {
    color: #79addc;
    border-left: solid 3px #79addc;
  }
`;

const NavItem = styled(Nav.Item)`
  padding: 10px 0px;
`;

export default Navbar;
