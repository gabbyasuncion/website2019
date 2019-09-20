import React from "react";
import styled from "@emotion/styled";

function ProjectCard(props) {
  return (
    <Link href={props.path}>
      <Card>
        <Title>{props.title}</Title>
        <Details>{props.lang}</Details>
        <Description>{props.description}</Description>
      </Card>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: black;
  width: 50px;
`;

const Details = styled.div`
  color: #424242;
`;

const Description = styled.div`
  margin: 20px;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: "Open Sans", sans-serif;
  color: #424242;
`;

const Card = styled.div`
  @media only screen and (min-width: 1000px) {
    width: 300px;
    height: 200px;
  }
  @media only screen and (max-width: 999px) {
    width: 500px;
    height: 200px;
    margin: 30px;
  }
  background-color: #cbcddb;
  border: 1px solid gray;
  padding: 20px;
  display: flex;
  transition: transform 0.4s, background-color 0.4s, box-shadow 0.4s;
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px grey;
    background-color: #c7e5ff;
  }
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 16pt;
`;

export default ProjectCard;
