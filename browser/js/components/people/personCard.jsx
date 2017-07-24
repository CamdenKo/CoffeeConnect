import React from 'react'
import { connect } from 'react-redux'
import {Col} from 'react-materialize'

const propsInBody = new Set(['email', 'linkedIn', 'address', 'notes', 'workPhone', 'cellPhone'])
function Person(props){
  console.log(props.person.companyName.length)
  return (
    <Col l= {4} m = {6} s = {12} key = {props.person.id}>
      <a className = "card-person">
        <div className = "card" key = {props.person.id}>
          <div className = "card-content">
            <span className = "card-title">
              {
                props.person.companyName.length ? (<div>
                  {props.person.name} - <i>{props.person.companyName}</i>
                </div>
                ) : (
                  props.person.name
                )
              }
            </span>
            {
              Object.keys(props.person).map(prop => propsInBody.has(prop) && props.person[prop] && <div key = {prop}>{props.person[prop]}<br /></div>)
            }
          </div>
        </div>
      </a>
    </Col>
  )
}

function mapStateToProps(state, oldProps){
  return {
    person: oldProps.person,
  }
}

export default connect(mapStateToProps)(Person)
