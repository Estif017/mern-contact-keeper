import React,{Fragment} from 'react'
import {Switch, Route}from 'react-router-dom'

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import About from './Pages/About/About';
import Homepage from './Pages/Home/Homepage';

function App() {
  return (
    <Fragment>
     <NavBar/>
     <div className="container">
       <Switch>
         <Route exact path='/'><Homepage/></Route>
         <Route path='/about'><About/></Route>
       </Switch>
     </div>
    </Fragment>
  );
}

export default App;
