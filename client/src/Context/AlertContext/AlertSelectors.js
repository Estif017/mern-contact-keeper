import React, { useReducer } from 'react'
import {v4 as uuidv4} from 'uuid'

import AlertContext from './alertContext'
import AlertReducer from './AlertReducer'
import {SET_ALERT,REMOVE_ALERT}from '../Type'

const AlertSelectors = props => {
    const initialState=[]

    const [state,dispatch]=useReducer(AlertReducer,initialState)

    //set alert
    const setAlert=(msg,type,timeout=5000)=>{
        const id = uuidv4()
        dispatch({
            type:SET_ALERT,
            payload:{msg,type,id}
        })

        //remove alert
        setTimeout(()=>dispatch({type:REMOVE_ALERT}),timeout)
    }

    return (
        <AlertContext.Provider value={{
            alert:state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertSelectors
