import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backendUrl from "./Url";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: ""
    };
    this.getSongs = this.getSongs.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  componentDidMount() {
    fetch(backendUrl + "songs")
      .then(res => res.json())
      .then(res => {
        this.setState({ songs: res });
      });
  }

  getSongs() {
    fetch(backendUrl + "songs")
      .then(res => res.json())
      .then(res => {
        this.setState({ songs: res });
      });
  }

  upVote(event) {
    event.preventDefault();
    axios
      .put(backendUrl + "votes/upvote", {
        body: event.target.dataset.id
      })
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
        this.getSongs();
      });
    this.props.history.push("/songs/");
  }

  downVote(event) {
    event.preventDefault();
    axios
      .put(backendUrl + "votes/downvote", {
        body: event.target.dataset.id
      })
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
        this.getSongs();
      });
    this.props.history.push("/songs/");
  }

  render() {
    let songs;
    this.state.songs &&
      (songs = this.state.songs.map((song, id) => {
        return (
          <div className="song card mt-3" key={id}>
            <div className="card-body">
              <p>
                <Link to={"/songs/" + song._id}>
                  <button className="btn btn-success">
                    {song.title} - {song.author}
                  </button>
                </Link>
              </p>
              <p>Votes: {song.votes}</p>
              <form data-id={song._id} onSubmit={this.upVote}>
                <button className="btn btn-primary m-1">
                  Upvote{" "}
                  <span role="img" aria-label="up">
                    ⬆️
                  </span>
                </button>
              </form>
              <form data-id={song._id} onSubmit={this.downVote}>
                <button className="btn btn-warning m-1">
                  Downvote{" "}
                  <span role="img" aria-label="up">
                    ⬇️
                  </span>
                </button>
              </form>
            </div>
          </div>
        );
      }));

    return (
      this.props.isLoggedIn === true && (
        <div>
          <h1>Songs</h1>
          {songs}
        </div>
      )
    );
  }
}

export default Home;
