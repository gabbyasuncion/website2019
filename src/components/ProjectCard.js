import React from "react";
import styled from "@emotion/styled";

function ProjectCard(props) {
  return (
    <Link href={props.path}>
      <Card>
        <Title>{props.title}</Title>
      </Card>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: black;
  width: 50px;
`;

const Card = styled.div`
  @media only screen and (min-width: 1550px) {
    width: 300px;
    height: 200px;
  }
  @media only screen and (max-width: 1550px) {
    width: 500px;
    height: 200px;
    margin: 30px;
  }
  background-color: #cbcddb;
  box-shadow: 6px 6px grey;
  display: flex;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #ffd8e9;
  }
`;

const Title = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 16pt;
  margin-top: 15px;
`;

export default ProjectCard;
