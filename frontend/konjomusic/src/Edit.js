import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = { song: null };

        this.evtTitle = this.evtTitle.bind(this);
        this.evtAuthor = this.evtAuthor.bind(this);
        this.evtNotes = this.evtNotes.bind(this);
        this.evtLyrics = this.evtLyrics.bind(this);
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

        evtTitle(event) {
            this.setState({title: event.target.value});
        };
        evtAuthor(event) {
            this.setState({author: event.target.value});
        };
        evtNotes(event) {
            this.setState({notes: event.target.value});
        };
        evtLyrics(event) {
            this.setState({lyrics: event.target.value});
        };
    
    sendEdit(){
        console.log(this.state.song)
    }
    render() {
        return (
            <div>
<div className="form">
        <h1>Edit Song</h1>
        <p>
        <label>Title </label>
        <input type="text" name="Title" placeholder={this.state.song && this.state.song.title} onChange={this.evtTitle}/>
        </p>
        <p>
        <label>Author </label>
        <input type="text" placeholder={this.state.song && this.state.song.author} onChange={this.evtAuthor}/>
        </p>
        <p>
        <label>Notes </label>
        <input type="text" placeholder={this.state.song && this.state.song.notes} onChange={this.evtNotes}/>
        </p>
        <p>
        <label>Lyrics </label>
        <textarea type="text" rows="8" cols="48" placeholder={this.state.song && this.state.song.lyrics} onChange={this.evtLyrics}/>
        </p>
        <p>
        <input type="submit" value="Submit" onClick={this.sendEdit} />
        </p>
        </div>
            </div>
        );
    }
}

export default Edit;

