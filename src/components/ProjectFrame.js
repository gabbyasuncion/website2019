import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Castyr from "./projects/Castyr";
import styled from "@emotion/styled";

function ProjectFrame() {
  return (
    <PageContainer>
      <Link href="/projects">cd ..</Link>
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/projects/castyr"}
          component={Castyr}
        />
      </Switch>
    </PageContainer>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: 24pt;
  margin-right: 150px;
  margin-bottom: 100px;
`;

const PageContainer = styled.div`
  margin: 100px 0px 100px;
`;

export default ProjectFrame;
