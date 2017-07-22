import React from 'react'

import { Modal } from 'react-materialize'
import PersonForm from './personForm.jsx'

export default function AddPerson(){
  return (
    <Modal
    header = 'New Connection'
    trigger = {
    <div className = 'fixed-action-btn'>
      <a className = 'btn-floating waves-effect waves-light btn-large red'>
        <i className = 'large material-icons'>add</i>
      </a>
    </div>
    }>
      <PersonForm />
    </Modal>
  )
}

