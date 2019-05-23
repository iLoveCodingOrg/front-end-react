import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createRavenMiddleware from 'raven-for-redux'
import { version as release } from '../../package.json'

import rootReducer from './rootReducer'

const env = process.env.NODE_ENV || 'development'
Raven.config('https://c8a587be7b4940f4b4cbd9bc2c8a6538@sentry.io/1211166', {
  release,
  environment: env,
}).install()

let store

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger()

  store = createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      logger,
      createRavenMiddleware(Raven),
    ),
  )
} else {
  store = createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      createRavenMiddleware(Raven),
    ),
  )
}

export default store
