import reducer from './reducer'

import AsyncNotFound from './components/AsyncNotFound'
import AsyncLoader from '../_common/AsyncLoader'

const AsyncRoutes = AsyncLoader({
  loader: () => import('./components/Routes'),
})

export default AsyncRoutes
export {
  reducer,
  AsyncNotFound,
}
