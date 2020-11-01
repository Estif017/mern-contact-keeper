import React, { useContext,Fragment } from 'react'

import ContactsContext from '../../Context/ContactsContext/contactsContext'
import ContactsItem from './ContactsItem'

const Contacts = () => {
    const {contacts}=useContext(ContactsContext)
    return(
        <Fragment>
            {contacts.map(contact=>(<ContactsItem key={contact.id} contact={contact}/>))}
        </Fragment>
    )
    
}

export default Contacts
