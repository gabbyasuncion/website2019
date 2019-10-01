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

var http = require("http");
setInterval(function() {
  http.get("http://hidden-atoll-53882.herokuapp.com");
}, 300000);

export default App;
