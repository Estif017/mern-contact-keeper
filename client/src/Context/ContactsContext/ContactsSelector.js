import {useReducer}from 'react'
import {v4 as uuidv4} from 'uuid';

import ContactsContext from './contactsContext'
import ContactsReducer from './ContactsReducer'
import{ADD_CONTACT,UPDATE_CONTACT,DELETE_CONTACT,SET_CURRENT,CLEAR_CURRENT,CLEAR_CONTACTS,CLEAR_FILTER}from '../Type'

const ContactsSelector = props => {
    const initialState={
        contacts: [
            {
              id: 1,
              name: 'Jill Johnson',
              email: 'jill@gmail.com',
              phone: '111-111-1111',
              type: 'personal'
            },
            {
              id: 2,
              name: 'Sara Watson',
              email: 'sara@gmail.com',
              phone: '222-222-2222',
              type: 'personal'
            },
            {
              id: 3,
              name: 'Harry White',
              email: 'harry@gmail.com',
              phone: '333-333-333',
              type: 'professional'
            }
          ]
    }
   const [state,dispatch]=useReducer(ContactsReducer, initialState)

   //Adding Contact
   const addContacts=contact=>{
       contact.id = uuidv4()
       dispatch({
           type:ADD_CONTACT,
           payload: contact
       })
   }

   //dlelete contact
   const deleteContact=contact=>{
       dispatch({
           type:DELETE_CONTACT,
           payload: contact
       })
   }

   return(
    <ContactsContext.Provider value={{contacts:state.contacts,addContacts,deleteContact}}>
        {props.children}
    </ContactsContext.Provider>
   )
}

export default ContactsSelector
