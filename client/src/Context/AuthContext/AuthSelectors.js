import React, { useReducer } from 'react'
import axios from 'axios'

import AuthContext from './authContext'
import {REGISTER_SUCCESS,REGISTER_FAIL,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,CLEAR_ERRORS} from '../Type'
import AuthReducer from './AuthReducer'

const AuthSelectors = props => {
    const initialState={
        token:localStorage.getItem('token'),
        isAuthenticated:null,
        isLoading:true,
        user:null,
        error: null
    }
    const [state,dispatch]=useReducer(AuthReducer,initialState)

    //Load user
    //Register user
    const register=async formData=>{
        const config = {
            headers:{
                'content-type': 'application/json'
            }
        }
        try {
            const res=await axios.post('/api/users',formData,config)
            dispatch({
                type:REGISTER_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type:REGISTER_FAIL,
                payload:error.response.data.message
            })
        }
    }
    //Login user
    //Logout
    //Clear errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    return (
        <AuthContext.Provider value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            isLoading: state.isLoading,
            user:state.user,
            error:state.error,
            register,
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthSelectors
