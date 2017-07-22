import React from 'react'

import { Modal } from 'react-materialize'
import PersonForm from './personForm.jsx'

export default function AddPerson(props){
  console.log(props.pulse)
  const button = props.pulse ? (<a className = 'btn-floating waves-effect waves-light btn pulse btn-large red'>
    <i className = 'large material-icons'>add</i>
  </a>) : (<a className = 'btn-floating waves-effect waves-light btn-large red'>
    <i className = 'large material-icons'>add</i>
</a>)

  return (
    <Modal
    header = 'New Connection'
    trigger = {
    <div className = 'fixed-action-btn'>
      {button}
    </div>
    }>
      <PersonForm />
    </Modal>
  )
}

