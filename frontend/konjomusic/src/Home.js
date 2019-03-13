import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Home extends Component {

  componentDidMount(){
  console.log(this.props.songs)
  }
    render() {
        let songs;
        this.props.songs && (
            songs = this.props.songs.map((song, id) => {
                return (
                  <div className="song" class="card" key={id}>
                  <div class="card-body">
                    <p>
                    <Link to={"/songs/" + song._id}>{song.title} - {song.author}</Link>
                    </p>
                    </div>
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