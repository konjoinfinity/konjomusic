import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backendUrl from "./Url";

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: null,
      comment: null
    };

    this.popTopComment = this.popTopComment.bind(this);
    this.popBottomComment = this.popBottomComment.bind(this);
    this.deleteAllComments = this.deleteAllComments.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.getSong = this.getSong.bind(this);
  }
  componentDidMount() {
    fetch(backendUrl + `songs/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ song: res });
      });
  }

  getSong() {
    fetch(backendUrl + `songs/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ song: res });
      });
  }

  deleteSong(event) {
    event.preventDefault();
    fetch(backendUrl + `songs/${this.state.song._id}`, {
      method: "DELETE"
    })
      .then(this.props.history.push("/songs"))
      .finally(() => this.props.getSongs());
  }

  handleComment() {
    fetch(backendUrl + `songs/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ song: res });
      });
    this.props.history.push(`/songs/${this.props.match.params.id}/`);
  }

  deleteComment(event) {
    event.preventDefault();
    axios
      .put(backendUrl + `songs/${this.state.song._id}/delete`, {
        body: event.target.dataset.id
      })
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
        this.getSong();
      });
    this.props.history.push(`/songs/${this.props.match.params.id}/`);
  }

  deleteAllComments(event) {
    event.preventDefault();
    axios
      .delete(backendUrl + `songs/${this.state.song._id}/clean`)
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
        this.getSong();
      });
    this.props.history.push(`/songs/${this.state.song._id}/`);
  }

  popTopComment(event) {
    event.preventDefault();
    axios
      .delete(backendUrl + `songs/${this.state.song._id}/poptop`)
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
        this.getSong();
      });
    this.props.history.push(`/songs/${this.state.song._id}/`);
  }

  popBottomComment(event) {
    event.preventDefault();
    axios
      .delete(backendUrl + `songs/${this.state.song._id}/popbottom`)
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
        this.getSong();
      });
    this.props.history.push(`/songs/${this.state.song._id}/`);
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
    axios
      .put(backendUrl + `songs/${this.props.match.params.id}/comment`, {
        comment: this.state.comment
      })
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
        this.getSong();
      });
    this.props.history.push(`/songs/${this.state.song._id}/`);
  }

  render() {
    return (
      this.props.isLoggedIn === true && (
        <div className="conatiner">
          <div className="song card m-5">
            <div className="card-body">
              <h1>{this.state.song && this.state.song.title}</h1>
              <h2>Author: {this.state.song && this.state.song.author}</h2>
              <p>Notes: {this.state.song && this.state.song.notes}</p>
              <p>Lyrics: {this.state.song && this.state.song.lyrics}</p>
              <p>
                <Link to={`/songs/${this.props.match.params.id}/edit`}>
                  <button className="btn btn-primary">Edit</button>
                </Link>
              </p>
              <form onSubmit={this.deleteSong}>
                <button className="btn btn-danger">Delete</button>
              </form>
            </div>
          </div>
          <div className="song card m-5">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <p>
                    <input
                      className="form-control"
                      id="comment"
                      name="comment"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </p>
                </div>
                <p>
                  <button className="btn btn-primary">Comment</button>
                </p>
              </form>
              <form onSubmit={this.deleteAllComments}>
                <p>
                  <button className="btn btn-danger">
                    Delete All Comments
                  </button>
                </p>
              </form>
              <form onSubmit={this.popTopComment}>
                <p>
                  <button className="btn btn-info">Pop Top Comment</button>
                </p>
              </form>
              <form onSubmit={this.popBottomComment}>
                <p>
                  <button className="btn btn-dark">Pop Bottom Comment</button>
                </p>
              </form>
            </div>
          </div>

          {this.state.song &&
            this.state.song.comments.map((comment, id) => {
              return (
                <div className="song card m-5" key={id}>
                  <div className="card-body">
                    <p>{comment.text}</p>
                    <form data-id={comment._id} onSubmit={this.deleteComment}>
                      <p>
                        <button className="btn btn-warning">Delete</button>
                      </p>
                    </form>
                  </div>
                </div>
              );
            })}
        </div>
      )
    );
  }
}

export default Songs;
