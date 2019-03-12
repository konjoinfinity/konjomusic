import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';
import Home from "./Home"
import About from "./About"
import Songs from "./Songs"
import Edit from "./Edit"
import New from "./New"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img src="https://konjoinfinity.github.io/img/logo.png" alt="Konjo"/>
            <Link to="/songs">
          <h1>Home</h1>
          </Link>
          <Link to="/about">
          <h1>About</h1>
          </Link>
          <Link to="/new">
          <h1>New</h1>
          </Link>
          </nav>
          <main>
          <Switch>
        <Route path="/songs" exact render={() => <Home />}/>
        <Route path="/about" render={() => <About />}/>
        <Route path="/new" exact render={props => 
        <New {...props} /> }/>
        <Route path="/songs/:id" exact render={props => 
        <Songs {...props} /> }/>
        <Route path="/songs/:id/edit" render={props => 
        <Edit {...props} /> }/>
        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
