import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            this.props.isLoggedIn === true &&
            <div className="card m-5">
            <div className="card-body">
                <h1>Konjo Music</h1>

                <p>Konjo enjoys writing music.</p>
            </div>
            </div>
        );
    }
}

export default About;