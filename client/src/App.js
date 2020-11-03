import React,{Fragment} from 'react'
import {Switch, Route, Router}from 'react-router-dom'

import './App.css';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import NavBar from './Components/NavBar/NavBar';
import About from './Pages/About/About';
import Homepage from './Pages/Home/Homepage';
import setAuthToken from './utils/setAuthToken'

function App() {
  if(localStorage.token){
    setAuthToken(localStorage.token)
  }
  return (
    <Fragment>
     <NavBar/>
     <div className="container">
       <Switch>
         <Route exact path='/'><Homepage/></Route>
         <Route path='/about'><About/></Route>
         <Route path='/register'><Register/></Route>
         <Route path='/login'><Login/></Route>
       </Switch>
     </div>
    </Fragment>
  );
}

export default App;
