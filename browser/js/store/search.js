const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE'
const CLEAR_SEARCH_VALUE = 'CLEAR_SEARCH_VALUE'

export function changeSearchValue(value){
  return {
    type: CHANGE_SEARCH_VALUE,
    value,
  }
}

export function clearSearchValue(){
  return{
    type: CLEAR_SEARCH_VALUE,
  }
}

export default function searchReducer(state = '', action){
  switch (action.type){
    case CHANGE_SEARCH_VALUE:
      return action.value
    case CLEAR_SEARCH_VALUE:
      return ''
    default:
      return state
  }
}
