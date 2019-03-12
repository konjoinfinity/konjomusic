import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            title: null,
            author: null,
            notes: null,
            lyrics: null };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
                const data = this.state
                fetch(`http://localhost:4000/songs/${this.props.match.params.id}`, {
                  method: 'PUT',
                  headers: {
                      'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                  })
                  .then((response) => response.json())
                  .then((result) => {
                    this.props.history.push('/songs')
                    console.log(result) 
                });
                
              }  
    
    render() {
        return (
            <div>
        <h1>Edit Song</h1>
        <form onSubmit={this.handleSubmit} action="/songs">
        <p>
          <label>Title </label>
          <input id="title" name="title" type="text" placeholder={this.state.song && this.state.song.title} onChange={this.handleInputChange}/>
          </p>
          <p>
          <label>Author </label>
          <input id="author" name="author" type="text" placeholder={this.state.song && this.state.song.author} onChange={this.handleInputChange}/>
          </p>
          <p>
          <label>Notes </label>
          <input id="notes" name="notes" type="text" placeholder={this.state.song && this.state.song.notes} onChange={this.handleInputChange}/>
          </p>
          <p>
          <label>Lyrics </label>
          <textarea type="text" rows="8" cols="48" placeholder={this.state.song && this.state.song.lyrics} onChange={this.handleInputChange}/>
          </p>
          <p>
          <button>Edit Song</button>
          </p>
        </form>
            </div>
        );
    }
}

export default Edit;

