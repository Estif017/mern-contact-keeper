import React from 'react'
import Contacts from '../../Components/Contacts/Contacts'
import ContactsForm from '../../Components/Contacts/ContactsForm';

const Homepage = () => {
    return (
        <div className='grid-2'>
          <div>
            <ContactsForm/>
          </div>
          <div>
            <Contacts />
          </div>
        </div>
      );
}

export default Homepage
