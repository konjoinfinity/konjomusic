import React, { Component } from 'react'

class LogOut extends Component {
  render () {
    return (
        <div className="card">
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
