import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { songs: null };

        this.getSongs = this.getSongs.bind(this);
        }

        getSongs(){
          fetch("http://localhost:4000/songs")
          .then(res => res.json())
          .then(res => {
            this.setState(
              {songs: res}
            )
          });
        }

    componentDidMount() {
        this.getSongs();
        }

    render() {
        let songs;
        this.state.songs && (
            songs = this.state.songs.map((song, id) => {
                return (
                  <div className="song" key={id}>
                    <p>
                    <Link to={"/songs/" + song._id}>{song.title}</Link>
                    </p>
    
                  </div>
                )
              })
        )
        
        return (
            <div>
                <h1>Songs</h1>
                {songs}
            </div>
        );
    }
}


export default Home;