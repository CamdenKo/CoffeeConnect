import React from 'react'
import { connect } from 'react-redux'
import {Col, Card, CardTitle} from 'react-materialize'

const propsInBody = new Set(['imageUrl', 'email', 'address', 'notes'])
function Person(props){
  return (
    <Col l= {4} m = {6} s = {12}>
      <Card title = {props.person.name}>
      {
        Object.keys(props.person).map(prop => propsInBody.has(prop) && props.person[prop] && <div>{props.person[prop]}<br/></div>)
      }
      </Card>
    </Col>
  )
}

function mapStateToProps(state, oldProps){
  return {
    person: oldProps.person,
    key: oldProps.key,
  }
}

export default connect(mapStateToProps)(Person)
