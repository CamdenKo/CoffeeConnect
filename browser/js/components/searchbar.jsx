import React from 'react'
import { connect } from 'react-redux'

import Autosuggest from 'react-autosuggest'

function SearchBar(props){
  const getSuggestions = value => {
    const minLength = 3
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.inputLength

    let suggested = []
    if (inputLength >= minLength){
      suggested = props.people.filter(person => person.name.toLowerCase().contains(inputValue))
    }
    return suggested
  }

  const getSuggestionValue = suggestion => suggestion

  const renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  )

  return (
    <div>

    </div>
  )
}

function getAllVals(obj){
  let out = []
  for(let key in obj){
    if(typeof obj[key] === 'object'){
      out.push(...getAllVals(obj[key]))
    } else {
      out.push(obj[key])
    }
  }
  return out
}

function mapStateToProps(state){
  return{
    people: state.people,
  }
}

export default connect(mapStateToProps)(SearchBar)
