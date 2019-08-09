import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Castyr from "./projects/Castyr";
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
    </Switch>
    // </Container>
  );
}

export default ProjectFrame;
