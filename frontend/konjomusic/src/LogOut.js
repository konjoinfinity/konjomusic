import React, { Component } from 'react'

class LogOut extends Component {
  render () {
    return (
        this.props.isLoggedIn === true &&
        <div className="card m-5">
        <div className="card-body">
        <h2>Log Out</h2>

        <form>
          <input value='Log Out' type='submit' onClick={this.props.handleLogOut} />
        </form>
      </div>
      </div>
    )
  }
}

export default LogOut
