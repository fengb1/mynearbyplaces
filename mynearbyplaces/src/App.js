import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/mynearbyplaces/Home" render = {props => <Home {...props} />}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
