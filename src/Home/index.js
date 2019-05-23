import AsyncLoader from '../_common/AsyncLoader'

const AsyncHome = AsyncLoader({
  loader: () => import('./components/Home'),
})

export {
  AsyncHome,
}
