import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Home extends Component {

  componentDidMount(){
  }
    render() {
        let songs;
        this.props.songs && (
            songs = this.props.songs.map((song, id) => {
                return (
                  <div className="song card mt-3" key={id}>
                  <div className="card-body">
                    <p>
                    <Link to={"/songs/" + song._id}><button className="btn btn-success">{song.title} - {song.author}</button></Link>
                    </p>
                    </div>
                  </div>
                )
              })
        )
        
        return (
          this.props.isLoggedIn === true &&
            <div>
                <h1>Songs</h1>
                {songs}
            </div>
        );
    }
}


export default Home;