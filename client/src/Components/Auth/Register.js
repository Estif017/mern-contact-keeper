import React, { useContext, useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import AlertContext from '../../Context/AlertContext/alertContext'
import AuthContext from '../../Context/AuthContext/authContext'


const Register = () => {
    const {register,error,clearErrors,isAuthenticated}=useContext(AuthContext)
    const {setAlert} = useContext(AlertContext)
    const [user,setUser]=useState({
        name:'',
        email:'',
        password: '',
        confirmPassword:''
    })
    const {name,email, password, confirmPassword}=user
    const history=useHistory()

    useEffect(() => {
        if(isAuthenticated){
            history.push('/')
        }
        if (error === 'User already exists') {
          setAlert(error, 'danger');
          clearErrors();
        }
        //eslint-disable-next-line
      }, [error,isAuthenticated,history.push()]);

    const onChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = e=>{
        e.preventDefault()
        if(name===''|| email===''||password === ''||confirmPassword===''){
            setAlert('Please enter information in all field','danger')
        }else if(password!==confirmPassword){
            setAlert('Password don\'t match','danger')
        }else{
            register({name,email,password})
        }
    }
   
    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>  
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        name='name'
                        placeholder='Name'
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={onChange}
                        required
                        minLength='6'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password"
                        name='confirmPassword'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={onChange}
                        required
                    />
                </div>
                <input
                    type='submit'
                    value='Register'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    )
}

export default Register
