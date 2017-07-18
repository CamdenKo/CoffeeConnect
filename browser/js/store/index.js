import { createStore, applyMiddleware, combineReducers} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import people from './people'

const reducer = combineReducers({
  people,
})

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())))

export * from './people'
