import React, { Component } from 'react';

class New extends Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      const data = new FormData(event.target)
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
          console.log(result)
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <p>
          <label>Title </label>
          <input id="title" name="title" type="text" />
          </p>
          <p>
          <label>Author </label>
          <input id="author" name="author" type="text" />
          </p>
          <p>
          <label>Notes </label>
          <input id="notes" name="notes" type="text" />
          </p>
          <p>
          <label>Lyrics </label>
          <input id="lyrics" name="lyrics" type="text" />
          </p>
          <p>
          <button>Create Song</button>
          </p>
        </form>
      );
    }
  }

  export default New;