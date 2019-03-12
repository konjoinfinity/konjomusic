import React, { Component } from 'react';

class Edit extends Component {
    
    sendEdit(){
        console.log("edit form")
    }
    render() {
        return (
            <div>
<div className="form">
        <h1>Edit Song</h1>
        <p>
        <input type="text" placeholder={this.props.match.params.title}/>
        </p>
        <p>
        <input type="text" placeholder={this.props.match.params.author}/>
        </p>
        <p>
        <input type="text" placeholder={this.props.match.params.notes}/>
        </p>
        <p>
        <input type="text" placeholder={this.props.match.params.lyrics}/>
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