import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageView from "./components/PageView";
import "./index.css";
import styled from "@emotion/styled";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" component={PageView} />
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  height: 80%;
`;

export default App;
