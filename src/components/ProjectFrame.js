import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Castyr from "./projects/Castyr";
import Iterative from "./projects/Iterative";
import Redesign from "./projects/Redesign";
import styled from "@emotion/styled";

function ProjectFrame() {
  return (
    // <Container>
    <Switch>
      <Route
        exact
        path={process.env.PUBLIC_URL + "/projects/castyr"}
        component={Castyr}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/projects/iterative"}
        component={Iterative}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/projects/redesign"}
        component={Redesign}
      />
    </Switch>
    // </Container>
  );
}

export default ProjectFrame;
