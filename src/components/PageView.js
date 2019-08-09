import React from "react";
import Navbar from "./Navbar";
import ProjectsView from "./ProjectsView";
import styled from "@emotion/styled";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectFrame from "./ProjectFrame";

function PageView() {
  return (
    <Container>
      <Navbar />
      <ContentContainer>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={HomePage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/projects"}
            component={ProjectsView}
          />
          <Route
            path={process.env.PUBLIC_URL + "/projects"}
            component={ProjectFrame}
          />
        </Switch>
      </ContentContainer>
    </Container>
  );
}

const ContentContainer = styled.div`
  flex-grow: 1;
  margin-top: 50px;
  text-align: right;
`;

const Container = styled.div`
  display: flex;
  background-color: #ffee93;
  height: 100vh;
  padding-top: 40px;
  width: 100hw;
`;

export default PageView;
