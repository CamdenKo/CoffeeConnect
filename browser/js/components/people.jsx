import React from 'react'
import { connect } from 'react-redux'
import Person from './person.jsx'
import { Row, Container } from 'react-materialize'

function People(props){
  return(
    <Container>
      <Row>

      </Row>
      <Row>
        {
          props.people.map(person => <Person key = {person.id} person = {person} />)
        }
      </Row>
    </Container>
  )
}

function mapStateToProps(state){
  return {
    people: state.people,
  }
}

export default connect(mapStateToProps)(People)
