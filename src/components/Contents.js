import React from 'react';
import { ContactContext } from '../contexts/ContactContext'
import Contact from '../components/Contact'

export default class Contents extends React.Component {
    render() {
        return (
            <ContactContext.Consumer> 
            {(context) => {
            	const { contacts, changeState } = context;
            	return (
		            <div className = "container mt-4" > {
		                contacts.map(contact => (
		                	<div key={contact.id}>
		                    <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}/>
		                		<a className="btn btn-sm btn-danger mt-1" onClick={changeState}>Delete</a>
		                	</div>
		                ))
		            } </div>
            		)
            }}
            </ContactContext.Consumer>
        );
    }
}