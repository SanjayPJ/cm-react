import React from 'react';

export default class Contact extends React.Component {
    state = { show_info: true }
    hideSomething = () => {
        this.setState({ show_info: !this.state.show_info })
    }

    render() {
        const { name, email, phone } = this.props
        const { show_info } = this.state
        return (
            <div>
                <div className="card mt-3">
                  <div className="card-header">
                    <h4>{name} <a className="text-primary" style={{ "cursor": "pointer" }} onClick={this.hideSomething.bind(this)}>*</a> <a className="text-danger" style={{ "cursor": "pointer" }} onClick={this.props.deleteClickHandler}>-</a>  </h4>
                  </div>
                  {show_info ? <ul className="list-group list-group-flush">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                  </ul> : null}
                </div>
            </div>
        );
    }
}