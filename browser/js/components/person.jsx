import React from 'react'
import { connect } from 'react-redux'
import {Col, Card, CardTitle} from 'react-materialize'

const propsInBody = new Set(['imageUrl', 'email', 'address', 'notes'])
function Person(props){
  return (
    <Col m= {3} s = {6}>
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
  }
}

export default connect(mapStateToProps)(Person)
