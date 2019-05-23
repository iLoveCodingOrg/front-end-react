import AsyncLoader from '../_common/AsyncLoader'

const ChangePassword = AsyncLoader({
  loader: () => import('./components/ChangePassword'),
})

export default ChangePassword
