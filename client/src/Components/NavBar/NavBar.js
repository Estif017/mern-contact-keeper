import React, { useContext,Fragment } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext/authContext'
import ContactsContext from '../../Context/ContactsContext/contactsContext'

const NavBar = ({icon,title}) => {
    const {isAuthenticated, logout, user}=useContext(AuthContext)
    const {clearContacts}=useContext(ContactsContext)
    const onLogout = () => {
        logout();
        clearContacts()
      };
    
      const authLinks = (
        <Fragment>
          <li>Hello {user && user.name}</li>
          <li>
            <a onClick={onLogout} href='#!'>
              <i className='fas fa-sign-out-alt' />{' '}
              <span className='hide-sm'>Logout</span>
            </a>
          </li>
        </Fragment>
      );
    
      const guestLinks = (
        <Fragment>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </Fragment>
      );
    
      return (
        <div className='navbar bg-primary'>
          <h1>
            <i className={icon} /> {title}
          </h1>
          <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
        </div>
      );
};

NavBar.defaultProps = {
    title:'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default NavBar
