import React, { useContext, useEffect, useRef } from 'react'
import ContactsContext from '../../Context/ContactsContext/contactsContext'

const FilterContacts = () => {
    const {filtered,filterContacts,clearFilters}=useContext(ContactsContext)
    const text=useRef('')
    const onChange=e => {
        if(text.current.value!==''){
            filterContacts(e.target.value)
        }else{
            clearFilters()
        }
    }
    useEffect(()=>{
        if(filtered===null){
            text.current.value=''
        }
    })
    return (
        <form >
            <input 
            type="text" 
            name='filter'
            ref={text}
            placeholder='Search...'
            onChange={onChange}
            />
        </form>
    )
}

export default FilterContacts
