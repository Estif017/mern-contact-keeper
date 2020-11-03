import React, { useContext, useEffect } from 'react'
import Contacts from '../../Components/Contacts/Contacts'
import ContactsForm from '../../Components/Contacts/ContactsForm';
import FilterContacts from '../../Components/Contacts/FilterContacts';
import AuthContext from '../../Context/AuthContext/authContext';

const Homepage = () => {
  const {loadUser}=useContext(AuthContext)
  useEffect(()=>{
    loadUser()
    //eslint-disable-next-line
  },[])
    return (
        <div className='grid-2'>
          <div>
            <ContactsForm/>
          </div>
          <div>
            <FilterContacts/>
            <Contacts />
          </div>
        </div>
      );
}

export default Homepage
