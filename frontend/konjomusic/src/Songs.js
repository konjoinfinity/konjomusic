import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Songs extends Component {
    constructor(props) {
        super(props)
        this.state = { song: "" };
        
        this.deleteSong = this.deleteSong.bind(this);
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
            deleteSong(event){
              event.preventDefault();
              console.log(this.state.song._id)
              fetch(`http://localhost:4000/songs/${this.state.song._id}`, {
                method: 'DELETE'
                })
                .then(this.props.history.push('/songs'))
                .finally(() => this.props.getSongs())
            }

    render() { 
        return (
                <div className="song">
                <h1>{this.state.song.title}</h1>
                <h2>Author: {this.state.song.author}</h2>
                <p>Notes: {this.state.song.notes}</p>
                <p>Lyrics: {this.state.song.lyrics}</p>
                
                    <button><Link to={`/songs/${this.props.match.params.id}/edit`}>Edit</Link></button>
                    <form onSubmit={this.deleteSong}>
                    <button>Delete</button>
                    </form>
              </div> 


        );
    }
}

export default Songs;