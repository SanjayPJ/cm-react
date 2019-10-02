import React from 'react';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Contents from './components/Contents'
import AddContact from './components/AddContact1'
import './App.css'
import ContactContextProvider from './contexts/ContactContext'

export default class App extends React.Component {

    state = {
        contacts: [{
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                    }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
            }
        ]
    }

    deleteClickHandler = (id) => {
        const { contacts } = this.state
        const newContacts = contacts.filter(contact => contact.id !== id);
        this.setState({
            contacts: newContacts
        })
    }

    render() {
        const { contacts } = this.state
        return (
            <ContactContextProvider>
              <Navbar title="Contact Manager"/>
              <AddContact />
              <div className="container">
              {contacts.map(contact => (
                <Contact deleteClickHandler={this.deleteClickHandler.bind(this, contact.id)} key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}/>
                ))}
              </div>
              <Contents />
        </ContactContextProvider>
        );
    }
}