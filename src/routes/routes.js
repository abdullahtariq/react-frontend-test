import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../components/Home";
import UserRegister from "../components/auth/UserRegister";

export default function Routes() {
  return (
    <Router>
      <div>
        {/*<ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>*/}
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/register">
            <UserRegister />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

