import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';
import Home from "./Home"
import About from "./About"
import Songs from "./Songs"
import Edit from "./Edit"
import New from "./New"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { songs: "" };

    this.getSongs = this.getSongs.bind(this);
    }

  getSongs(){
    fetch("http://localhost:4000/songs")
    .then(res => res.json())
    .then(res => {
      this.setState(
        {songs: res}
      )
    });
  }

componentDidMount() {
  this.getSongs();
  }

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
        <Route path="/songs" exact render={props => 
        <Home {...props} songs={this.state.songs} /> }/>
        <Route path="/about" render={() => <About />}/>
        <Route path="/new" exact render={props => 
        <New {...props} getSongs={this.getSongs} /> }/>
        <Route path="/songs/:id" exact render={props => 
        <Songs {...props} songs={this.state.songs} getSongs={this.getSongs} /> }/>
        <Route path="/songs/:id/edit" render={props => 
        <Edit {...props} getSongs={this.getSongs} /> }/>
        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
