import AsyncLoader from '../_common/AsyncLoader'

const AsyncLogin = AsyncLoader({
  loader: () => import('./components/Login'),
})

export default AsyncLogin
