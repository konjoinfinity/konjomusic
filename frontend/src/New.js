import React, { Component } from "react";
import backendUrl from "./Url";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      notes: "",
      lyrics: ""
    };
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
    event.preventDefault();
    const data = this.state;
    console.log(event);
    fetch(backendUrl + "songs", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        this.props.history.push("/songs");
        console.log(result);
      })
      .finally(() => this.props.getSongs());
  }

  render() {
    return (
      this.props.isLoggedIn === true && (
        <div className="card m-5">
          <div className="card-body">
            <h1>Create New Song</h1>
            <form onSubmit={this.handleSubmit} action="/songs">
              <div className="form-group">
                <label>Title</label>
                <p>
                  <input
                    className="form-control"
                    id="title"
                    name="title"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </p>
              </div>
              <div className="form-group">
                <label>Author</label>
                <p>
                  <input
                    className="form-control"
                    id="author"
                    name="author"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </p>
              </div>
              <div className="form-group">
                <label>Notes</label>
                <p>
                  <input
                    className="form-control"
                    id="notes"
                    name="notes"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </p>
              </div>
              <div className="form-group">
                <label>Lyrics</label>
                <p>
                  <textarea
                    className="form-control"
                    id="lyrics"
                    name="lyrics"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </p>
              </div>
              <p>
                <button className="btn btn-success">Create Song</button>
              </p>
            </form>
          </div>
        </div>
      )
    );
  }
}

export default New;
