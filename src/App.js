import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import CV from "./components/CV";
import Contact from "./components/Contact";
import { Route, Switch, withRouter } from "react-router-dom";
import Languages from "./components/Languages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/projects"
            component={routerProps => <Projects {...routerProps} />}
          />
          <Route
          path="/languages"
          component={routerProps => <Languages {...routerProps} />}
        />
          <Route
            path="/cv"
            component={routerProps => <CV {...routerProps} />}
          />
          <Route
            path="/blogs"
            component={routerProps => <Blogs {...routerProps} />}
          />

          <Route
            path="/contact"
            component={routerProps => <Contact {...routerProps} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
