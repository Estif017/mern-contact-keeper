import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import ContactsSelector from './Context/ContactsContext/ContactsSelector'
import App from './App';
import AuthSelectors from './Context/AuthContext/AuthSelectors';
import AlertSelectors from './Context/AlertContext/AlertSelectors';


ReactDOM.render(
  <AuthSelectors>
    <ContactsSelector>
      <AlertSelectors>
        <Router>
          <App />
        </Router>
      </AlertSelectors>
    </ContactsSelector>
  </AuthSelectors>,
  document.getElementById('root')
);


