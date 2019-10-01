import React from 'react';

export default class Contact extends React.Component {
    render() {
        const { name, email, phone } = this.props
        return (
            <div>
            	<div className="card mt-3">
            	  <div className="card-header">
            	    <h4>{name}</h4>
            	  </div>
            	  <ul className="list-group list-group-flush">
            	    <li className="list-group-item">{email}</li>
            	    <li className="list-group-item">{phone}</li>
            	  </ul>
            	</div>
            </div>
        );
    }
}