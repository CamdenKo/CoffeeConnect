import { createStore, applyMiddleware, combineReducers} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import people from './people'
import search from './search'
import suggestions from './suggestions'

const reducer = combineReducers({
  people,
  search,
  suggestions,
})

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())))

export * from './people'
export * from './search'
export * from './suggestions'
