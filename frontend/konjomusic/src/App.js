import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom"
import { withRouter } from "react-router";
import axios from 'axios'
import './App.css';
import Home from "./Home"
import About from "./About"
import Songs from "./Songs"
import Edit from "./Edit"
import New from "./New"
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import LogOut from './LogOut'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      songs: "",
      email: "",
      password: "",
      isLoggedIn: false
   };

    this.getSongs = this.getSongs.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    }

  getSongs(){
    fetch("http://konjomusicbackend.herokuapp.com/songs")
    .then(res => res.json())
    .then(res => {
      this.setState(
        {songs: res}
      )
    });
  }

componentDidMount() {
  this.getSongs();
  if (localStorage.token) {
    this.setState({
      isLoggedIn: true
      })
    } else {
    this.setState({
      isLoggedIn: false
      })
    }
  }

  handleLogOut (e) {
    e.preventDefault()
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    })
    localStorage.clear()
    console.log("User has been logged out")
    this.props.history.push('/login')
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp (e) {
    e.preventDefault()
    axios.post('http://konjomusicbackend.herokuapp.com/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
      console.log("User has signed up")
      this.props.history.push('/songs')
    })
    .catch(err => console.log(err))
  }

  handleLogIn (e) {
    e.preventDefault()
    axios.post('http://konjomusicbackend.herokuapp.com/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({isLoggedIn: true})
      console.log("User is logged in")
      this.props.history.push('/songs')
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <nav>
          <img src="https://konjoinfinity.github.io/img/logo.png" alt="Konjo"/>
            
          {this.state.isLoggedIn === true &&
          <Link to="/songs">
          <h2>Home</h2> 
          </Link>}
          {this.state.isLoggedIn === true &&
          <Link to="/about">
          <h2>About</h2>
          </Link>}
          {this.state.isLoggedIn === true &&
          <Link to="/new">
          <h2>New</h2>
          </Link>}
          {this.state.isLoggedIn === false &&
          <Link to="/login">
          <h2>Login</h2>
          </Link>}
          {this.state.isLoggedIn === false &&
          <Link to="/signup">
          <h2>Sign Up</h2>
          </Link>}
          {this.state.isLoggedIn === true &&
          <Link to="/logout">
          <h2>Logout</h2>
          </Link>}
          </nav>
          <main  className="container">
          <Switch>
          <Route path="/" exact render={props => 
        <Home {...props} songs={this.state.songs} isLoggedIn={this.state.isLoggedIn}/> }/>
        <Route path="/songs" exact render={props => 
        <Home {...props} songs={this.state.songs} isLoggedIn={this.state.isLoggedIn}/> }/>
        <Route path="/about" render={() => <About isLoggedIn={this.state.isLoggedIn} />}/>
        <Route path="/new" exact render={props => 
        <New {...props} getSongs={this.getSongs} isLoggedIn={this.state.isLoggedIn}/> }/>
        <Route path="/songs/:id" exact render={props => 
        <Songs {...props} songs={this.state.songs} getSongs={this.getSongs} isLoggedIn={this.state.isLoggedIn}/> }/>
        <Route path="/songs/:id/edit" render={props => 
        <Edit {...props} getSongs={this.getSongs} isLoggedIn={this.state.isLoggedIn}/> }/>
        <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
                )
              }}
            />
            <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
        </Switch>
        </main>
      </div>
    );
  }
}


export default withRouter(App)
