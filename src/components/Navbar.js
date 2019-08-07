import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import styled from "@emotion/styled";
import Github from "./github.png";
import Medium from "./medium.png";
import Linkedin from "./linkedin.png";

function Navbar() {
  // const handleSelect = eventKey => alert(`selected ${eventKey}`);
  return (
    <Sidebar style={{ width: "230px" }}>
      <Header>
        gabriela
        <br />
        asuncion
      </Header>
      <MediaNav />
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
          <NavLink eventKey="3" href="/">
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
          <img src={Github} alt="lol" width="20px" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="https://www.linkedin.com/in/gabriela-asuncion/"
          target="_blank"
        >
          <img src={Linkedin} alt="lol" width="20px" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://medium.com/@gabriela_asuncion" target="_blank">
          <img src={Medium} alt="lol" width="20px" />
        </Nav.Link>
      </Nav.Item>
    </MediaLinks>
  );
}

const Sidebar = styled.div`
  margin-left: 60px;
  margin-top: 20px;
`;

const MediaLinks = styled(Nav)`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const NavWrapper = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  width: 230px;
  display: flex;
  justify-content: left;
`;

const Header = styled.div`
  font-family: "Fira Code", monospace;
  font-size: 36pt;
  margin-bottom: -10px;
`;

const NavLink = styled(Nav.Link)`
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-size: 14pt;
  color: black;
  border-left: solid 1px black;
  padding-left: 10px;
  &:hover {
    color: #79addc;
    border-left: solid 3px #79addc;
  }
`;

const NavItem = styled(Nav.Item)`
  padding: 10px 0px;
`;

export default Navbar;
