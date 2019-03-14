import React, { Component } from 'react'

class LogInForm extends Component {
  render () {
    return (
      this.props.isLoggedIn === false &&
      <div className="card m-5">
      <div className="card-body">
        <h2>Log In</h2>

        <form>
          <div>
            <p>Email</p>
            <p>
            <input type='text' name='email' onChange={this.props.handleInput} />
            </p>
          </div>
          <div>
            <p>Password</p>
            <p>
            <input type='password' name='password' onChange={this.props.handleInput} />
            </p>
          </div>
          <button className="btn btn-primary" type='submit' onClick={this.props.handleLogIn}>Log In</button>
        </form>
      </div>
      </div>
    )
  }
}

export default LogInForm