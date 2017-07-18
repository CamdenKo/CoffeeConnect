import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/root.jsx'

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('app')
)
