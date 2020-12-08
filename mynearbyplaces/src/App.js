import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Place from "./components/Place";
import Review from "./components/Reviews";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/mynearbyplaces/" render = {props => <Home {...props} />}>
        </Route>
        <Route path="/place" render = {props => <Place {...props} />}>
        </Route>
        <Route path='/review' render = {props => <Review {...props} />}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
