import React, { Component } from 'react'

class SignUpForm extends Component {
  render () {
    return (
      this.props.isLoggedIn === false &&
        <div className="card m-5">
        <div className="card-body">
        <h2>Sign Up</h2>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
      </div>
    )
  }
}

export default SignUpForm