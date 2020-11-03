import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext/authContext'

const PrivateRoute = ({component:Component,...rest}) => {
    const {isAuthenticated, loading}=useContext(AuthContext)
    return (
       <Route {...rest} render={props=>
        !isAuthenticated && !loading ? (
            <Redirect to='/login' />
          ):
          <Component {...props} />
       }/>
    )
}

export default PrivateRoute
