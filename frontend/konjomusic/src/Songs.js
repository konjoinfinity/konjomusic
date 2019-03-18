import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: null,
      comment: null
    };
    this.deleteComment = this.deleteComment.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }
  componentDidMount() {
    fetch(
      `http://konjomusicbackend.herokuapp.com/songs/${
        this.props.match.params.id
      }`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ song: res });
      });
  }

  deleteSong(event) {
    event.preventDefault();
    fetch(
      `http://konjomusicbackend.herokuapp.com/songs/${this.state.song._id}`,
      {
        method: "DELETE"
      }
    )
      .then(this.props.history.push("/songs"))
      .finally(() => this.props.getSongs());
  }

  handleComment() {
    fetch(
      `http://konjomusicbackend.herokuapp.com/songs/${
        this.props.match.params.id
      }`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ song: res });
      });
  }

  deleteComment(event) {
    event.preventDefault();
    axios
      .put(
        `http://konjomusicbackend.herokuapp.com/songs/${
          this.state.song._id
        }/delete`,
        {
          body: event.target.dataset.id
        }
      )
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
      });
    this.componentDidMount();
    this.props.history.push(`/songs/${this.props.match.params.id}/`);
  }

  deleteAllComments(event) {
    console.log(event);
    console.log(this.state.song.comments);
    axios.delete(
      `http://konjomusicbackend.herokuapp.com/songs/${
        this.state.song._id
      }/deletecomments`
    );
    this.componentDidMount();
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
    console.log(event);
    axios
      .put(
        `http://konjomusicbackend.herokuapp.com/songs/${
          this.props.match.params.id
        }/comment`,
        {
          comment: this.state.comment
        }
      )
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
      });
    this.componentDidMount();
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
                <p>
                  <input
                    id="comment"
                    name="comment"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </p>
                <p>
                  <button className="btn btn-primary">Comment</button>
                </p>
              </form>
              <form onSubmit={this.deleteAllComments}>
                <button className="btn btn-danger">Delete All Comments</button>
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
                      <button className="btn btn-danger">Delete</button>
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
