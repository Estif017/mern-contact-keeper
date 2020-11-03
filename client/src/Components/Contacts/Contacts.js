import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactsContext from '../../Context/ContactsContext/contactsContext'
import { Spinner } from '../NavBar/Spinner';
import ContactsItem from './ContactsItem'

const Contacts = () => {
    const {contacts,filtered,getContacts,loading}=useContext(ContactsContext)

    useEffect(()=>{
      getContacts()
      //eslint-disable-next-line
    },[])

    if ( contacts!==null &&contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>;
      }
    return(
        contacts!==null && !loading ? (<TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition key={contact._id} timeout={500} classNames='item'>
                  <ContactsItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition key={contact._id} timeout={500} classNames='item'>
                  <ContactsItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>) : <Spinner/>
        
    )
    
}

export default Contacts
