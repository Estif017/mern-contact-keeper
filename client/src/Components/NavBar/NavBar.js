import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({icon,title}) => {
    return (
        <div className='navbar bg-primary'>
            <Link to='/'>
                <h1><i className={icon}/>{title}</h1>
            </Link>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ul>
            </nav>
        </div>
    )
}

NavBar.defaultProps = {
    title:'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default NavBar
