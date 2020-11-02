import React, { useReducer } from 'react'

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
    //Login user
    //Logout
    //Clear errors

    return (
        <AuthContext.Provider value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            isLoading: state.isLoading,
            user:state.user,
            error:state.error
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthSelectors
