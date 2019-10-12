import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    hideSomething = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container mt-3">
            	<h1>About Us {this.props.match.params.id}</h1>
            	<p className="lead-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, mollitia labore, rem vel reiciendis pariatur harum! Quia inventore neque, officia harum, ducimus impedit nihil possimus laudantium porro sapiente ullam expedita!</p>
            	<button className="btn btn-danger" onClick={this.hideSomething.bind(this)}>Redirect</button>
            </div>
        );
    }
}