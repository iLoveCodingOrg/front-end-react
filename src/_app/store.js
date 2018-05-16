import { createStore, applyMiddleware } from  'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './rootReducer'

let store

if(process.env.NODE_ENV === 'development'){
  const logger = createLogger()
  
  store = createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      logger
    ))
} else{
  store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}

export default store