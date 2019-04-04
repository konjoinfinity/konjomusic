import React, { Component } from "react";
import backendUrl from "./Url";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      author: null,
      notes: null,
      lyrics: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch(backendUrl + `songs/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ song: res });
      });
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
    fetch(backendUrl + `songs/${this.props.match.params.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        this.props.history.push(`/songs/${this.props.match.params.id}`);
        console.log(result);
      })
      .finally(() => this.props.getSongs());
  }

  render() {
    return (
      this.props.isLoggedIn === true && (
        <div className="card m-5">
          <div className="card-body">
            <h1>Edit Song</h1>
            <form onSubmit={this.handleSubmit} action="/songs">
              <div className="form-group">
                <label>Title</label>
                <p>
                  <input
                    className="form-control"
                    id="title"
                    name="title"
                    type="text"
                    defaultValue={this.state.song && this.state.song.title}
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
                    defaultValue={this.state.song && this.state.song.author}
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
                    defaultValue={this.state.song && this.state.song.notes}
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
                    placeholder={this.state.song && this.state.song.lyrics}
                    onChange={this.handleInputChange}
                  />
                </p>
              </div>
              <p>
                <button className="btn btn-primary">Edit Song</button>
              </p>
            </form>
          </div>
        </div>
      )
    );
  }
}

export default Edit;
