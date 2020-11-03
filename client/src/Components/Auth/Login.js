import React, { useContext, useState,useEffect } from 'react'
import {useHistory}from 'react-router-dom'
import AlertContext from '../../Context/AlertContext/alertContext'
import AuthContext from '../../Context/AuthContext/authContext'

const Login = () => {
    const {setAlert}=useContext(AlertContext)
    const {login, error, clearErrors, isAuthenticated}= useContext(AuthContext)
    const history=useHistory()
    useEffect(() => {
        if (isAuthenticated) {
          history.push('/');
        }
    
        if (error === 'Invalid Credentials') {
          setAlert(error, 'danger');
          clearErrors();
        }
        // eslint-disable-next-line
      }, [error, isAuthenticated, history]);
    const [user,setUser]=useState({
        email:'',
        password: ''
    })

    const {email, password}=user

    const onChange=e => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
          setAlert('Please fill in all fields', 'danger');
        } else {
          login({
            email,
            password
          });
        }
      };

    return (
        <div className="form-control">
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name='email'
                    value={email}
                    onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input
                    type="password"
                    name='password'
                    value={password}
                    onChange={onChange}
                    />
                </div>
                <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block'
                 />
            </form>
        </div>
    )
}

export default Login
