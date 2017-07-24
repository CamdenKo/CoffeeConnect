import React from 'react'
import { connect } from 'react-redux'

function PersonView(props){
  // console.log('personId', props.personId)
  console.log(props.people, 'props.peoples')
  return (
    <div>
      PERSON VIEW
      {
        props.people.map( pers => (
          <div className = 'section'>
            <div className = 'container'>
              <h1 className = 'header center'>{pers.name}</h1>
              <div className = 'row center'>
                <h5 className = 'header col s12 light'>{pers.companyName}</h5>
              </div>
              <div className = 'row'>
                <div className = 'col s6 m4'>

                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

function mapStateToProps(state, oldProps){
  return {
    people: state.people,
    // personId: oldProps.params.personId,
  }
}

export default connect(mapStateToProps)(PersonView)
