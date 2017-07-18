import React, { Component } from 'react'
import store from '../store'
import {Switch, BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Sidebar from './sidebar.jsx'

export default class Root extends Component{
  constructor(){
    super()
  }
  componentDidMount(){

  }

  render(){
    return(
      <Provider store = {store}>
        <BrowserRouter>
          <main>
            <Route path = '/' component = {Sidebar} />
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}

