import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import ContactsSelector from './Context/ContactsContext/ContactsSelector'
import App from './App';


ReactDOM.render(
  <ContactsSelector>
    <Router>
      <App />
    </Router>
  </ContactsSelector>,
  document.getElementById('root')
);


