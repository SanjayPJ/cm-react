import React from 'react';

export default class AddContact extends React.Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }

        console.log(contact);
    }

    static defaultProps = {
        name: 'Fred Smith',
        email: 'fred@yahoo.com',
        phone: '555-555-5555'
    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="container">
            <h3 className="mt-3">Add Contact</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input defaultValue={name} name="name" type="text" className="form-control" ref={this.nameInput} />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input defaultValue={email} name="email" type="email" className="form-control" ref={this.emailInput} />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input defaultValue={phone} name="phone" type="text" className="form-control" ref={this.phoneInput} />
                      </div>
                      <button className="btn w-100 btn-danger mb-4">Submit</button>
                </form>
            </div>
        );
    }
}