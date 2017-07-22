import React from 'react'
import { connect } from 'react-redux'
import { postPerson } from '../../store'

function PersonForm(props){
  return (
    <div className = "row">
      <form className = "col s12" onSubmit = {props.sendPerson}>
        <div className = "row">
          <div className = "input-field col s12 m6">
            <input id = "name" type = "text" className = "validate" />
            <label>Name</label>
          </div>
          <div className = "input-field col s12 m6">
            <input id = "company" type = "text" className = "validate"/>
            <label>Company</label>
            {/*TODO: add autocomplete suggestions*/}
          </div>
        </div>
        <ul className = "collapsible" data-collapsible = "accordion">
          <li>
            <div className = "collapsible-header">
              <i className = "material-icons">assignment</i>
              Contact Information
            </div>
            <div className = "collapsible-body row">
              <div className = "input-field col s12 m6">
                <input id = "email" type = "email" className = "validate" />
                <label>Email</label>
              </div>
              <div className = "input-field col s12 m6">
                <input id = "linkedIn" type = "text" className = "validate"/>
                <label>LinkedIn</label>
              </div>
              <div className = "input-field col s12 m6">
                <input id = "workPhone" type = "tel" className = "validate"/>
                <label>Work Phone</label>
              </div>
              <div className = "input-field col s12 m6">
                <input id = "cellPhone" type = "tel" className = "validate"/>
                <label>Cell Phone</label>
              </div>
            </div>
          </li>
          <li>
            <div className = "collapsible-header">
              <i className = "material-icons">note</i>
              Notes
            </div>
            <div className = "collapsible-body row">
              <div className = "input-field col s12">
                <textarea id = "jobDescription" className = "materialize-textarea"></textarea>
                <label>Job Description</label>
              </div>
              <div className = "input-field col s12">
                <textarea id = "generalNotes" className = "materialize-textarea"></textarea>
                <label>General Notes</label>
              </div>
            </div>
          </li>
        </ul>
        <div className = "col s12 right-align">
          <button type = "submit" className = "btn waves-effect waves-light modal-close">
            Submit<i className = "material-icons right">send</i>
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
      console.log(evt.target)
      const person = {
        name: evt.target.name.value,
        companyName: evt.target.company.value,
        email: evt.target.email.value,
        linkedIn: evt.target.linkedIn.value,
        workPhone: evt.target.workPhone.value,
        cellPhone: evt.target.cellPhone.value,
        jobDescription: evt.target.jobDescription.value,
        generalNotes: evt.target.generalNotes.value,
      }
      dispatch(postPerson(person))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonForm)
