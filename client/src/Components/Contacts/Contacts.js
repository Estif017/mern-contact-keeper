import React, { useContext,Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactsContext from '../../Context/ContactsContext/contactsContext'
import ContactsItem from './ContactsItem'

const Contacts = () => {
    const {contacts,filtered}=useContext(ContactsContext)

    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>;
      }
    return(
        <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactsItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactsItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    )
    
}

export default Contacts
