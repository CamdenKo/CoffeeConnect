import axios from 'axios'

const GOT_PEOPLE_FROM_SERVER = 'GOT_PEOPLE_FROM_SERVER'
const GOT_PERSON = 'GOT_PERSON'
const REMOVE_PERSON = 'REMOVE_PERSON'
const EDIT_PERSON = 'EDIT_PERSON'

export function gotPeopleFromServer(people){
  return {
    type: GOT_PEOPLE_FROM_SERVER,
    people,
  }
}

export function gotPerson(person){
  return {
    type: GOT_PERSON,
    person,
  }
}

export function removePerson(id){
  return {
    type: REMOVE_PERSON,
    id,
  }
}

export function editPerson(person){
  return {
    type: EDIT_PERSON,
    person,
  }
}

export function getAllPeople(){
  return function thunk(dispatch){
    axios.get('/api/person')
    .then(res => res.data)
    .then(people => dispatch(gotPeopleFromServer(people)))
  }
}

export function postPerson(person){
  return function thunk(dispatch){
    console.log('postPerson', person)
    axios.post('/api/person', person)
    .then(res => res.data)
    .then(posted => dispatch(gotPerson(posted)))
  }
}

export function deletePerson(id){
  return function thunk(dispatch){
    axios.delete(`/api/person/${id}`)
    .then(res => res.data)
    .then(dispatch(removePerson(id)))
  }
}

export default function personReducer(state = [], action){
  switch (action.type){
    case GOT_PEOPLE_FROM_SERVER:
      return action.people
    case GOT_PERSON:
      return [...state, action.person]
    case REMOVE_PERSON:
      return [...state.filter(person => person.id !== action.person.id)]
    case EDIT_PERSON:
      return [...state.map(person => person.id === action.person.id ? action.person : person)]
    default:
      return state
  }
}
