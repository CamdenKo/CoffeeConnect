import React, { Component } from 'react'
import store, { getAllPeople } from '../store'
import {Switch, BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import People from './people'
import Navbar from './navbar'

export default class Root extends Component{
  constructor(){
    super()
  }
  componentDidMount(){
    store.dispatch(getAllPeople())
  }

  render(){
    return(
      <Provider store = {store}>
        <BrowserRouter>
          <main>
            <Route path = '/' component = {Navbar} />
            <Route path = '/' component = {People} />
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}

