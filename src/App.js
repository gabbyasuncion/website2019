import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageView from "./components/PageView";
import "./index.css";
import styled from "@emotion/styled";

function App() {
  return (
    <Switch>
      <Route path="/" component={PageView} />
    </Switch>
  );
}

export default App;
