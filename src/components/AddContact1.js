import React from 'react';

export default class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        phone: ""
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
            <h3 className="mt-3">Add Contact</h3>
	            <form onSubmit={this.onSubmitHandler}>
	            	<div className="form-group">
					    <label>Full Name</label>
					    <input onChange={this.onChangeHandler} name="name" type="text" className="form-control" />
					  </div>
					  <div className="form-group">
					    <label>Email Address</label>
					    <input onChange={this.onChangeHandler} name="email" type="email" className="form-control" />
					  </div>
					  <div className="form-group">
					    <label>Phone Number</label>
					    <input onChange={this.onChangeHandler} name="phone" type="text" className="form-control" />
					  </div>
					  <button className="btn w-100 btn-danger mb-4">Submit</button>
	            </form>
            </div>
        );
    }
}