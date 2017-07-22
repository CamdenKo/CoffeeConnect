const CHANGE_SUGGESTIONS = 'CHANGE_SUGGESTIONS'
const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS'

export function changeSuggestions(suggestions){
  return {
    type: CHANGE_SUGGESTIONS,
    suggestions,
  }
}

export function clearSuggestions(){
  return {
    type: CLEAR_SUGGESTIONS,
  }
}

export default function suggestionsReducer(state = [], action){
  switch(action.type){
    case CHANGE_SUGGESTIONS:
      return action.suggestions
    case CLEAR_SUGGESTIONS:
      return []
    default:
      return state
  }
}
