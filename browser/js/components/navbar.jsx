import React from 'react'
import {Navbar, NavItem} from 'react-materialize'
import { connect } from 'react-redux'

function nav(props){
  return (
    <Navbar brand = 'CoffeeConnect' right>
      <NavItem>NavItem</NavItem>
    </Navbar>
  )
}

function mapStateToProps(state){
  return {
    // people: state.people,
  }
}

export default connect(mapStateToProps)(nav)
