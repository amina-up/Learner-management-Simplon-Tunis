import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import Apprenants from "./Components/Apprenants/Apprenants";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Apprenants} />
          <Route path="/comments/:id" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
