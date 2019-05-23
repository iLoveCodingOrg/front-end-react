import reducer from './reducer'

import AsyncLoader from '../_common/AsyncLoader'

const AsyncRoutes = AsyncLoader({
  loader: () => import('./components/Routes'),
})
const AsyncNotFound = AsyncLoader({
  loader: () => import('./components/NotFound'),
})

export {
  reducer,
  AsyncRoutes,
  AsyncNotFound,
}
