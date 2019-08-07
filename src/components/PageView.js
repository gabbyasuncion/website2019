import React from "react";
import Navbar from "./Navbar";
import ProjectsView from "./ProjectsView";
import styled from "@emotion/styled";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

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
            path={process.env.PUBLIC_URL + "/projects"}
            component={ProjectsView}
          />
        </Switch>
      </ContentContainer>
    </Container>
  );
}

const ContentContainer = styled.div`
  flex-grow: 1;
  margin-top: 20px;
  text-align: right;
`;

const Container = styled.div`
  display: flex;
  background-color: #ffee93;
  height: 100vh;
  padding-top: 40px;
  margin-top: -16px;
  margin-bottom: -50px;
  margin-left: -10px;
  margin-right: -10px;
`;

export default PageView;
