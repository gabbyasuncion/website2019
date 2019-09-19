import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Castyr from "./projects/Castyr";
import Iterative from "./projects/Iterative/Iterative";
import Redesign from "./projects/Redesign";
import Shell from "./projects/Shell";
import ArrgPhotos from "./projects/ArrgPhotos";
import Data from "./projects/Data";
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
      <Route
        exact
        path={process.env.PUBLIC_URL + "/projects/shell"}
        component={Shell}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/projects/arrg"}
        component={ArrgPhotos}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/projects/data"}
        component={Data}
      />
    </Switch>
    // </Container>
  );
}

export default ProjectFrame;
