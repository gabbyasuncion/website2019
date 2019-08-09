import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "@emotion/styled";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Castyr from "./projects/Castyr";
import ProjectFrame from "./ProjectFrame";

const row1 = [
  {
    title: "Castyr",
    path: "/projects/castyr",
    lang: "React, Javascript",
    description:
      "Leading a team of four engineers in frontend development of MVP -- reviewing code and planning sprints"
  },
  {
    title: "Iterative Design",
    path: "/projects/iterative",
    lang: "Figma",
    description: ""
  },
  {
    title: "Redesign",
    path: "/projects/redesign",
    lang: "HTML, CSS, AdobeXD",
    description: ""
  }
];

const row2 = [
  {
    title: "Shell",
    path: "/projects/shell",
    lang: "C",
    description: ""
  },
  {
    title: "ARrg Photos",
    path: "/projects/arrg",
    lang: "Python",
    description: ""
  },
  {
    title: "Data Configuration Script",
    path: "/projects/data",
    lang: "Python, Excel",
    description: ""
  }
];

function ProjectsView() {
  return (
    <Container>
      <Header>projects</Header>
      <CardContainer>
        <RowContainer>
          {row1.map(i => (
            <ProjectCard
              title={i.title}
              path={i.path}
              lang={i.lang}
              description={i.description}
            />
          ))}
        </RowContainer>
        <RowContainer>
          {row2.map(i => (
            <ProjectCard
              title={i.title}
              path={i.path}
              lang={i.lang}
              description={i.description}
            />
          ))}
        </RowContainer>
      </CardContainer>
    </Container>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  margin-right: 50px;
  margin-top: 70px;
`;

const Container = styled.div`
  margin-top: 50px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 70px;
`;

const Header = styled.span`
  font-size: 24pt;
  margin-right: 60px;
`;

export default ProjectsView;
