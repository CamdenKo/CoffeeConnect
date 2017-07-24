import React from 'react'
import { connect } from 'react-redux'
import { Row, Container } from 'react-materialize'

import PersonCard from './personCard'
import AddPerson from './addPerson'
import NoPeople from './noPeople'

function People(props){
  return(
    <Container>
      {
        !props.people.length && <NoPeople />
      }
      <Row>
        {
          props.people.map(person => <PersonCard key = {person.id} person = {person} />)
        }
      </Row>
      <AddPerson pulse = {props.people.length === 0}/>

    </Container>
  )
}

function mapStateToProps(state){
  return {
    people: state.people,
  }
}

export default connect(mapStateToProps)(People)
