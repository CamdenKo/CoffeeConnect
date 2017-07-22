import React from 'react'
import { connect } from 'react-redux'
import { Row, Container } from 'react-materialize'

import Person from './person.jsx'
import AddPerson from './addPerson.jsx'
import PersonForm from './personForm.jsx'

function People(props){
  return(
    <Container>
      <PersonForm />
      <Row>

      </Row>
      <Row>
        {
          props.people.map(person => <Person key = {person.id} person = {person} />)
        }
      </Row>
      <AddPerson />

    </Container>
  )
}

function mapStateToProps(state){
  return {
    people: state.people,
  }
}

export default connect(mapStateToProps)(People)
