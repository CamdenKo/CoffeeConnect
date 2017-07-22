import React from 'react'
import { connect } from 'react-redux'
import {postPerson } from '../store'
import { Collapsible, CollapsibleItem } from 'react-materialize'

function PersonForm(props){
  return (
    <div className = 'row'>
      <form className = 'col s12' onSubmit = {props.sendPerson}>
        <div className = 'row'>
          <div className = 'input-field col s12 m6'>
            <input id = 'name' type = 'text' className = 'validate' />
            <label>Name</label>
          </div>
          <div className = 'input-field col s12 m6'>
            <input id = 'company' type = 'text' className = 'validate'/>
            <label>Company</label>
          </div>
        </div>
        <Collapsible>
          <CollapsibleItem header = 'Contact Information' icon = 'assignment'>
            <div className = 'row'>
              <div className = 'input-field col s12 m6'>
                <input id = 'email' type = 'email' className = 'validate' />
                <label>Email</label>
              </div>
              <div className = 'input-field col s12 m6'>
                <input id = 'linkedIn' type = 'text' className = 'validate'/>
                <label>LinkedIn</label>
              </div>
              <div className = 'input-field col s12 m6'>
                <input id = 'phone' type = 'tel' className = 'validate'/>
                <label>Work Phone</label>
              </div>
              <div className = 'input-field col s12 m6'>
                <input id = 'phone' type = 'tel' className = 'validate'/>
                <label>Cell Phone</label>
              </div>
            </div>
          </CollapsibleItem>
          <CollapsibleItem header = 'Notes' icon = 'note'>
            <div className = 'row'>
              <div className = 'input-field col s12'>
                <textarea id = 'jobDescription' className = 'materialize-textarea'></textarea>
                <label>Job Description</label>
              </div>
              <div className = 'input-field col s12'>
                <textarea id = 'generalNotes' className = 'materialize-textarea'></textarea>
                <label>General Notes</label>
              </div>
            </div>
          </CollapsibleItem>
        </Collapsible>
        <div className = 'col s12 right-align'>
          <button type = 'submit' className = 'btn waves-effect waves-light modal-close'>
            Submit<i className = 'material-icons right'>send</i>
          </button>
        </div>
      </form>
    </div>
  )
}

function mapStateToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
  return {
    sendPerson(evt){
      evt.preventDefault()
      dispatch(postPerson())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonForm)
