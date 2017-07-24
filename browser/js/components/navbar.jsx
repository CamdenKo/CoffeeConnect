import React from 'react'
import {Navbar, NavItem} from 'react-materialize'
import { connect } from 'react-redux'

function nav(props){
  return (
    //TODO: FIX SPACING
    <Navbar brand = 'CoffeeConnect' right>
      <div className = 'container'><NavItem>NavItem</NavItem></div>
    </Navbar>
    // <nav role = 'navigation'>
    //   <div className = 'nav-wrapper container'>
    //     <a>Coffee Connect</a>
    //   </div>
    // </nav>
  )
}

function mapStateToProps(state){
  return {
    // people: state.people,
  }
}

export default connect(mapStateToProps)(nav)
