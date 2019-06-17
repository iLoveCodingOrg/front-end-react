import reducer from './reducer'

import AsyncLoader from '../_common/AsyncLoader'

const AsyncVerifyEmail = AsyncLoader({
  loader: () => import('./components/VerifyEmail'),
})

export default AsyncVerifyEmail
export { reducer }
