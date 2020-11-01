import React, { useContext, useState,useEffect } from 'react'
import ContactsContext from '../../Context/ContactsContext/contactsContext'

const ContactsForm = () => {
    const {addContacts,current,clearCurrent,updateContact}=useContext(ContactsContext)
    const [contact,setContact]=useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    })

    useEffect(()=>{
     if(current!==null){
         setContact(current)
     }else{
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'
        })
     }   
    },[current])

    const {name,email,phone,type}=contact
    const onChange=e=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    const onSubmit=e => {
        e.preventDefault()
        if (current===null){
            addContacts(contact)
        }else{
            updateContact(contact)
        }
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'
        })
    }
    return (
       <form onSubmit={onSubmit}>
           <h2 className='text-primary'>{`${current? 'Update' : 'Add'} Contact`}</h2>
           <input type="text"
            name='name'
            placeholder='Name'
            value={name}
            onChange={onChange}
           />
           <input type="text"
            name='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
           />
           <input type="text"
            name='phone'
            placeholder='Phone'
            value={phone}
            onChange={onChange}
           />
           <h5>Contact type</h5>
           <input type="radio"
            name='type'
            value='personal'
            checked={type === 'personal'}
            onChange={onChange}
           />{' '}
           Personal{' '}
           <input type="radio"
            name='type'
            value='professional'
            checked={type === 'professional'}
            onChange={onChange}
           />{' '}
           professional{' '}
           <div>
                <input
                type='submit'
                value={`${current? 'Update' : 'Add'} Contact`}
                className='btn btn-primary btn-block'
                />
            </div>
            {current && <button className='btn btn-light btn-block' onClick={clearCurrent}>clear</button> }
       </form>
    )
}

export default ContactsForm
