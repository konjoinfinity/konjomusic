import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Songs extends Component {
    constructor(props) {
        super(props)
        this.state = { song: null };
        }
        componentDidMount() {
            fetch(`http://localhost:4000/songs/${this.props.match.params.id}`)
              .then(res => res.json())
              .then(res => {
                
                this.setState(
                  {song: res}
                )
              });
            }
    render() { 
        return (
                <div className="song">
                <h1>{this.state.song && this.state.song.title}</h1>
                <h2>Author: {this.state.song && this.state.song.author}</h2>
                <p>Notes: {this.state.song && this.state.song.notes}</p>
                <p>Lyrics: {this.state.song && this.state.song.lyrics}</p>
                <p>
                    <Link to={`/songs/${this.props.match.params.id}/edit`}>Edit</Link>
                    </p>
              </div> 


        );
    }
}

export default Songs;