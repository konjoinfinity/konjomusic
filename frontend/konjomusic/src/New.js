import React, { Component } from 'react';

class New extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: null,
        author: null,
        notes: null,
        lyrics: null
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
      event.preventDefault();
      fetch('http://localhost:4000/songs', {
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
      });
      
    }  
  
    render() {
      return (
        <div>
        <h1>Create New Song</h1>
        <form onSubmit={this.handleSubmit} action="/songs">
        <p>
          <label>Title </label>
          <input id="title" name="title" type="text" onChange={this.handleInputChange}/>
          </p>
          <p>
          <label>Author </label>
          <input id="author" name="author" type="text" onChange={this.handleInputChange}/>
          </p>
          <p>
          <label>Notes </label>
          <input id="notes" name="notes" type="text" onChange={this.handleInputChange}/>
          </p>
          <p>
          <label>Lyrics </label>
          <textarea id="lyrics" name="lyrics" type="text" rows="8" cols="48" onChange={this.handleInputChange}/>
          </p>
          <p>
          <button>Create Song</button>
          </p>
        </form>
        </div>
      );
    }
  }

  export default New;