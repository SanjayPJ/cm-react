import React from 'react';
import { ContactContext } from '../contexts/ContactContext'
import Contact from '../components/Contact'

export default class Contents extends React.Component {
    render() {
        return (
            <ContactContext.Consumer> 
            {(context) => {
            	const { contacts } = context;
            	return (
		            <div className = "container mt-4" > {
		                contacts.map(contact => (
		                    <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}/>
		                ))
		            } </div>
            		)
            }}
            </ContactContext.Consumer>
        );
    }
}