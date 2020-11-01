import React from 'react'
import Contacts from '../../Components/Contacts/Contacts'
import ContactsForm from '../../Components/Contacts/ContactsForm';
import FilterContacts from '../../Components/Contacts/FilterContacts';

const Homepage = () => {
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
