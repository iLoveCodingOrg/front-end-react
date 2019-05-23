import * as actions from './actions'
import reducer from './reducer'

import AsyncLoader from '../_common/AsyncLoader'

const AsyncVerifyEmail = AsyncLoader({
  loader: () => import('./components/VerifyEmail'),
})

export {
  reducer,
  actions,
  AsyncVerifyEmail,
}
