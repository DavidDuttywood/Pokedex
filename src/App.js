import React from "react";
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Pokemon from "./components/Pokemon"
import Pokedex from "./components/Pokedex";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={Pokedex} />
          <Route path="/pokemon/:name" component={Pokemon} />
        </Router>
      </>
    );
  }

}
export default App;
