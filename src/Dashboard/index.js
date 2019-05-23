import AsyncLoader from '../_common/AsyncLoader'

const AsyncDashboard = AsyncLoader({
  loader: () => import('./components/Dashboard'),
})

export {
  AsyncDashboard,
}
