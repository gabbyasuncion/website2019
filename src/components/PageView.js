import React from "react";
import Navbar from "./Navbar";
import ProjectsView from "./ProjectsView";
import styled from "@emotion/styled";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "./HomePage";
import ProjectFrame from "./ProjectFrame";

function PageView({ location }) {
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }}>
        <Container>
          <Navbar />
          <ContentContainer>
            <Switch>
              <Route exact path={"/"} component={HomePage} />
              <Route exact path={"/projects"} component={ProjectsView} />
              <Route path={"/projects"} component={ProjectFrame} />
            </Switch>
          </ContentContainer>
        </Container>
      </CSSTransition>
    </TransitionGroup>
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
`;

export default withRouter(PageView);
