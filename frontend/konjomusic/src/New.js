import React, { Component } from 'react';

class New extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        author: "",
        notes: "",
        lyrics: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
      const data = this.state
      console.log(event)
      fetch('http://konjomusicbackend.herokuapp.com/songs', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((result) => {
          this.props.history.push('/songs')
          console.log(result) 
      }).finally(() => this.props.getSongs())
      
    }  
  
    render() {
      return (
        this.props.isLoggedIn === true &&
        <div className="card m-5">
        <div className="card-body">
        <h1>Create New Song</h1>
        <form onSubmit={this.handleSubmit} action="/songs">
        <p>
          Title </p>
          <p>
          <input id="title" name="title" type="text" onChange={this.handleInputChange}/>
          </p>
          <p>
          Author </p>
          <p>
          <input id="author" name="author" type="text" onChange={this.handleInputChange}/>
          </p>
          <p>
          Notes </p>
          <p>
          <input id="notes" name="notes" type="text" onChange={this.handleInputChange}/>
          </p>
          <p>
          Lyrics </p>
          <p>
          <textarea id="lyrics" name="lyrics" type="text" rows="8" cols="48" onChange={this.handleInputChange}/>
          </p>
          <p>
          <button className="btn btn-success">Create Song</button>
          </p>
        </form>
        </div>
        </div>
      );
    }
  }

  export default New;