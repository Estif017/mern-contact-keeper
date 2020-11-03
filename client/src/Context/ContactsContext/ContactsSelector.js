import {useReducer}from 'react'
import axios from 'axios'

import ContactsContext from './contactsContext'
import ContactsReducer from './ContactsReducer'
import{ADD_CONTACT,UPDATE_CONTACT,DELETE_CONTACT,SET_CURRENT,CLEAR_CURRENT,CLEAR_FILTER,FILTER_CONTACTS,GET_CONTACTS,CONTACT_ERROR,CLEAR_CONTACTS}from '../Type'

const ContactsSelector = props => {
    const initialState={
        contacts: null,
          current:null,
          filtered:null
    }
   const [state,dispatch]=useReducer(ContactsReducer, initialState)

   //get contacts
   const getContacts=async () => {
       try {
           const res=await axios.get('/api/contacts')
           dispatch({
               type:GET_CONTACTS,
               payload:res.data
           })
       } catch (error) {
        dispatch({
            type: CONTACT_ERROR,
            payload: error.response.msg
          });
       }
   }

   //Adding Contact
   const addContacts=async contact=>{
       const config={
        headers: {
            'Content-Type': 'application/json'
          }
       }
       try {
           const res=await axios.post('/api/contacts',contact,config)
           dispatch({
               type:ADD_CONTACT,
               payload: res.data
           })
       } catch (error) {
        dispatch({
            type: CONTACT_ERROR,
            payload: error.response.msg
        })   
       }
   }

   //dlelete contact
   const deleteContact=async id=>{
       try {
           await axios.delete(`api/contacts/${id}`)
           dispatch({
               type:DELETE_CONTACT,
               payload: id
           })
           
       } catch (error) {
           dispatch({
               type:CONTACT_ERROR,
               payload:error.response.msg
           })
       }
   }

   //set current contact
   const setCurrent=contact=>{
       dispatch({
           type:SET_CURRENT,
           payload:contact
       })
   }

   //clear current
   const clearCurrent=()=>{
       dispatch({type:CLEAR_CURRENT})
   }

   //update contact
   const updateContact=async contact=>{
    const config={
        headers: {
            'Content-Type': 'application/json'
          }
       }
       try {
           const res=await axios.put(`/api/contacts/${contact._id}`,contact,config)
           dispatch({
            type:UPDATE_CONTACT,
            payload:res.data
        })
       } catch (error) {
        dispatch({
            type: CONTACT_ERROR,
            payload: error.response.msg
        })   
       }
      
   }

   //clear contacts
   const clearContacts=()=>{
       dispatch({
           type:CLEAR_CONTACTS
       })
   }

   //Filter contacts
   const filterContacts=text=>{
       dispatch({
           type:FILTER_CONTACTS,
           payload:text
       })
   }
   
   //clear filter
   const clearFilters=()=>{
       dispatch({
           type:CLEAR_FILTER
       })
   }

   return(
    <ContactsContext.Provider value={{
        contacts:state.contacts,
        current:state.current,
        filtered:state.filtered,
        addContacts,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilters,
        clearContacts,
        getContacts
    }}>
        {props.children}
    </ContactsContext.Provider>
   )
}

export default ContactsSelector
